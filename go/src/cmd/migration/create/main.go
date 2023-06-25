package main

import (
	"context"
	"fmt"
	"log"
	"./ent"
	"./ent/migrate"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// client, err := ent.Open("mysql", "test_user:test_password@tcp(p-db:3306)/test_db?parseTime=True")
	client, err := ent.Open("mysql", "root:.0nj+*4MSb0mAtN=@tcp(34.84.131.120:3306)/p-db?parseTime=True")
	if err != nil {
		log.Fatalf("failed opening connection to mysql: %v", err)
		fmt.Println("データベース接続失敗")
	} else {
		fmt.Println("データベース接続成功")
	}
	defer client.Close()
	ctx := context.Background()
	err = client.Schema.Create(
		ctx,
		migrate.WithDropIndex(true),
		migrate.WithDropColumn(true),
	)
	if err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
		fmt.Println("データベーススキーマ生成失敗 ")
	} else {
		fmt.Println("データベーススキーマ生成成功")
	}
}
