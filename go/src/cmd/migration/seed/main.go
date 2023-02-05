package main

import (
	"context"
	"fmt"
	"log"
	"src/ent"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	client, err := ent.Open("mysql", "test_user:test_password@tcp(p-db:3306)/test_db?parseTime=True")
	if err != nil {
		log.Fatalf("failed opening connection to mysql: %v", err)
		fmt.Println("データベース接続失敗")
	} else {
		fmt.Println("データベース接続成功")
	}
	defer client.Close()
	ctx := context.Background()

	ProcessTypeSeeds(ctx, client)
	SkillTypeSeeds(ctx, client)

	fmt.Println("初期データ挿入完了")
}

func ProcessTypeSeeds(ctx context.Context, client *ent.Client) {

	names := []string{"要件定義", "基本設計", "詳細設計", "実装・単体", "結合テスト", "統合テスト", "保守・運用 "}

	bulk := make([]*ent.ProcessTypeCreate, len(names))

	for i, name := range names {
		bulk[i] = client.ProcessType.Create().SetName(name)
	}

	client.ProcessType.CreateBulk(bulk...).Save(ctx)
}

func SkillTypeSeeds(ctx context.Context, client *ent.Client) {
	names := []string{"使用言語", "DB", "サーバーOS", "FW・MW ツール 等"}

	bulk := make([]*ent.SkillTypeCreate, len(names))

	for i, name := range names {
		bulk[i] = client.SkillType.Create().SetName(name)
	}

	client.SkillType.CreateBulk(bulk...).Save(ctx)
}
