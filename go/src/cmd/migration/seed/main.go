package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"src/ent"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

var currentDir = "/cmd/migration/seed"
var projectMdDir = currentDir + "/md/project"
var skillMdDir = currentDir + "/md/skill"

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
	SkillSeeds(ctx, client)
	ProjectSeeds(ctx, client)

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

func ProjectSeeds(ctx context.Context, client *ent.Client) ([]*ent.Project, error) {
	dir, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	fmt.Println(dir)
	projects := []ent.Project{
		{
			ID:          1,
			IDKey:       "wordpress",
			Name:        "wordpress開発業務",
			StartDate:   time.Date(2019, 7, 1, 0, 0, 0, 0, time.Local),
			EndDate:     time.Date(2019, 10, 1, 0, 0, 0, 0, time.Local),
			Scale:       1,
			Role:        "PG",
			Description: readFile(dir + projectMdDir + "/wordpress.md"),
			Edges: ent.ProjectEdges{
				Skills: []*ent.Skill{
					{
						ID: 1,
					},
					{
						ID: 9,
					},
					{
						ID: 10,
					},
					{
						ID: 11,
					},
					{
						ID: 13,
					},
					{
						ID: 14,
					},
					{
						ID: 19,
					},
					{
						ID: 20,
					},
					{
						ID: 23,
					},
					{
						ID: 26,
					},
					{
						ID: 28,
					},
					{
						ID: 29,
					},
				},
				ProcessTypes: []*ent.ProcessType{
					{
						ID: 2,
					},
					{
						ID: 3,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 6,
					},
					{
						ID: 7,
					},
				},
			},
		},
		{
			ID:          2,
			IDKey:       "cm",
			Name:        "自社サービス開発業務（Web・スマホアプリ）",
			StartDate:   time.Date(2019, 7, 1, 0, 0, 0, 0, time.Local),
			EndDate:     time.Date(2023, 2, 1, 0, 0, 0, 0, time.Local),
			Scale:       6,
			Role:        "SE/AE・PG",
			Description: readFile(dir + projectMdDir + "/cm.md"),
			// Description: "自社サービスの立ち上げよりプログラマーとして参画し、2019年4月以降はメインのシステムエンジニアとして、主に追加機能の用件定義〜実装まで担当し、自社サービスのグロースに貢献しました。",
			Edges: ent.ProjectEdges{
				Skills: []*ent.Skill{
					{
						ID: 1,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 9,
					},
					{
						ID: 10,
					},
					{
						ID: 11,
					},
					{
						ID: 13,
					},
					{
						ID: 14,
					},
					{
						ID: 20,
					},
					{
						ID: 22,
					},
					{
						ID: 24,
					},
					{
						ID: 26,
					},
				},
				ProcessTypes: []*ent.ProcessType{
					{
						ID: 1,
					},
					{
						ID: 2,
					},
					{
						ID: 3,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 6,
					},
					{
						ID: 7,
					},
				},
			},
		},
		{
			ID:          3,
			IDKey:       "ma",
			Name:        "月間PV2000万規模のサービス開発業務",
			StartDate:   time.Date(2020, 9, 1, 0, 0, 0, 0, time.Local),
			EndDate:     time.Date(2021, 4, 1, 0, 0, 0, 0, time.Local),
			Scale:       20,
			Role:        "SE/PG",
			Description: readFile(dir + projectMdDir + "/ma.md"),
			// Description: "広告業務の自動化・リテンションメール配信システム構築など・業務系システムの構築をメインに行なっておりました。",
			Edges: ent.ProjectEdges{
				Skills: []*ent.Skill{
					{
						ID: 1,
					},
					{
						ID: 9,
					},
					{
						ID: 11,
					},
					{
						ID: 13,
					},
					{
						ID: 14,
					},
					{
						ID: 15,
					},
					{
						ID: 23,
					},
					{
						ID: 26,
					},
					{
						ID: 29,
					},
				},
				ProcessTypes: []*ent.ProcessType{
					{
						ID: 2,
					},
					{
						ID: 3,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 6,
					},
					{
						ID: 7,
					},
				},
			},
		},
		{
			ID:          4,
			IDKey:       "cmtob",
			Name:        "to B向け自社サービスの開発業務",
			StartDate:   time.Date(2021, 6, 1, 0, 0, 0, 0, time.Local),
			EndDate:     time.Date(2021, 12, 1, 0, 0, 0, 0, time.Local),
			Scale:       3,
			Role:        "SE/PG",
			Description: readFile(dir + projectMdDir + "/cmtob.md"),
			Edges: ent.ProjectEdges{
				Skills: []*ent.Skill{
					{
						ID: 1,
					},
					{
						ID: 4,
					},
					{
						ID: 6,
					},
					{
						ID: 23,
					},
					{
						ID: 24,
					},
					{
						ID: 26,
					},
					{
						ID: 28,
					},
				},
				ProcessTypes: []*ent.ProcessType{
					{
						ID: 1,
					},
					{
						ID: 2,
					},
					{
						ID: 3,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 6,
					},
					{
						ID: 7,
					},
				},
			},
		},
		{
			ID:          5,
			IDKey:       "pay",
			Name:        "to b向け決済システムの開発業務",
			StartDate:   time.Date(2022, 4, 1, 0, 0, 0, 0, time.Local),
			EndDate:     time.Date(2022, 12, 1, 0, 0, 0, 0, time.Local),
			Scale:       2,
			Role:        "SE/PG",
			Description: readFile(dir + projectMdDir + "/pay.md"),
			Edges: ent.ProjectEdges{
				Skills: []*ent.Skill{
					{
						ID: 10,
					},
					{
						ID: 13,
					},
					{
						ID: 14,
					},
					{
						ID: 19,
					},
					{
						ID: 20,
					},
					{
						ID: 22,
					},
					{
						ID: 24,
					},
					{
						ID: 26,
					},
					{
						ID: 28,
					},
				},
				ProcessTypes: []*ent.ProcessType{
					{
						ID: 2,
					},
					{
						ID: 3,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 6,
					},
					{
						ID: 7,
					},
				},
			},
		},
		{
			ID:          6,
			IDKey:       "ec",
			Name:        "ECサイトシステム開発",
			StartDate:   time.Date(2022, 4, 1, 0, 0, 0, 0, time.Local),
			EndDate:     time.Date(2022, 7, 1, 0, 0, 0, 0, time.Local),
			Scale:       2,
			Role:        "SE/PG",
			Description: readFile(dir + projectMdDir + "/ec.md"),
			Edges: ent.ProjectEdges{
				Skills: []*ent.Skill{
					{
						ID: 9,
					},
					{
						ID: 11,
					},
					{
						ID: 13,
					},
					{
						ID: 14,
					},
					{
						ID: 15,
					},
					{
						ID: 20,
					},
					{
						ID: 23,
					},
					{
						ID: 24,
					},
					{
						ID: 26,
					},
					{
						ID: 28,
					},
				},
				ProcessTypes: []*ent.ProcessType{{
					ID: 1,
				},
					{
						ID: 2,
					},
					{
						ID: 3,
					},
					{
						ID: 4,
					},
					{
						ID: 5,
					},
					{
						ID: 6,
					},
					{
						ID: 7,
					},
				},
			},
		},
	}

	bulk := make([]*ent.ProjectCreate, len(projects))

	for i, p := range projects {
		bulk[i] = client.Project.Create().SetIDKey(p.IDKey).SetName(p.Name).SetStartDate(p.StartDate).SetEndDate(p.EndDate).SetScale(p.Scale).SetRole(p.Role).SetDescription(p.Description).AddSkills(p.Edges.Skills...).AddProcessTypes(p.Edges.ProcessTypes...)
	}

	return client.Project.CreateBulk(bulk...).Save(ctx)
}

func SkillSeeds(ctx context.Context, client *ent.Client) ([]*ent.Skill, error) {
	dir, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	fmt.Println(dir)
	skills := []ent.Skill{
		{
			ID:          1,
			IDKey:       "typescript",
			IconName:    "devicon-typescript-plain",
			Name:        "TypeScript ( JavaScript )",
			Level:       3,
			Experience:  3.5,
			Description: readFile(dir + skillMdDir + "/typescript.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 1,
				},
			},
		},
		{
			ID:          2,
			IDKey:       "jquery",
			Name:        "jQuery",
			IconName:    "devicon-jquery-plain",
			Level:       3,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/jquery.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          3,
			IDKey:       "threejs",
			Name:        "threejs",
			IconName:    "devicon-threejs-original",
			Level:       1,
			Experience:  0.5,
			Description: readFile(dir + skillMdDir + "/threejs.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          4,
			IDKey:       "react",
			Name:        "React / ReactNative",
			IconName:    "devicon-react-original",
			Level:       4,
			Experience:  3.5,
			Description: readFile(dir + skillMdDir + "/react.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          5,
			IDKey:       "nextjs",
			Name:        "Next.js",
			IconName:    "devicon-nextjs-original",
			Level:       2,
			Experience:  2,
			Description: readFile(dir + skillMdDir + "/nextjs.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          6,
			IDKey:       "nestjs",
			Name:        "NestJS",
			IconName:    "devicon-nestjs-plain",
			Level:       1,
			Experience:  2,
			Description: readFile(dir + skillMdDir + "/nestjs.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          7,
			IDKey:       "redux",
			Name:        "redux",
			IconName:    "devicon-redux-original",
			Level:       2,
			Experience:  1,
			Description: readFile(dir + skillMdDir + "/redux.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          8,
			IDKey:       "flutter",
			Name:        "Flutter (Dart)",
			IconName:    "devicon-flutter-plain",
			Level:       1,
			Experience:  1,
			Description: readFile(dir + skillMdDir + "/flutter.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          9,
			IDKey:       "html5",
			Name:        "HTML Living Standard（HTML5）",
			IconName:    "devicon-html5-plain",
			Level:       3,
			Experience:  4,
			Description: readFile(dir + skillMdDir + "/html5.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 1,
				},
			},
		},
		{
			ID:          10,
			IDKey:       "pug",
			Name:        "pug",
			IconName:    "",
			Level:       3,
			Experience:  3.5,
			Description: readFile(dir + skillMdDir + "/pug.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 1,
				},
			},
		},
		{
			ID:          11,
			IDKey:       "css3",
			Name:        "CSS3",
			IconName:    "devicon-css3-plain",
			Level:       3,
			Experience:  4,
			Description: readFile(dir + skillMdDir + "/css3.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 1,
				},
			},
		},
		{
			ID:          12,
			IDKey:       "tailwindcss",
			Name:        "tailwindcss",
			IconName:    "devicon-tailwindcss-original-wordmark",
			Level:       1,
			Experience:  0.5,
			Description: readFile(dir + skillMdDir + "/tailwindcss.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          13,
			IDKey:       "sass",
			Name:        "Sass (SCSS記法)",
			IconName:    "devicon-sass-original",
			Level:       3,
			Experience:  3.5,
			Description: readFile(dir + skillMdDir + "/sass.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          14,
			IDKey:       "php",
			Name:        "PHP",
			IconName:    "devicon-php-plain",
			Level:       3,
			Experience:  3.5,
			Description: readFile(dir + skillMdDir + "/php.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 1,
				},
			},
		},
		{
			ID:          15,
			IDKey:       "symfony",
			Name:        "Symfony",
			IconName:    "devicon-symfony-original",
			Level:       2,
			Experience:  2,
			Description: readFile(dir + skillMdDir + "/symfony.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          16,
			IDKey:       "laravel",
			Name:        "Laravel",
			IconName:    "devicon-laravel-plain",
			Level:       1,
			Experience:  1,
			Description: readFile(dir + skillMdDir + "/laravel.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          17,
			IDKey:       "cakephp",
			Name:        "CakePHP",
			IconName:    "devicon-cakephp-plain",
			Level:       1,
			Experience:  0.5,
			Description: readFile(dir + skillMdDir + "/cakephp.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          18,
			IDKey:       "smarty",
			Name:        "Smarty",
			IconName:    "",
			Level:       3,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/smarty.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          19,
			IDKey:       "wordpress",
			Name:        "wordpress",
			IconName:    "devicon-wordpress-plain",
			Level:       3,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/wordpress.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          20,
			IDKey:       "gcp",
			Name:        "GCP (Google Cloud Platform)",
			IconName:    "devicon-googlecloud-plain",
			Level:       2,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/gcp.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          21,
			IDKey:       "aws",
			Name:        "AWS (Amazon Web Service)",
			IconName:    "devicon-amazonwebservices-original",
			Level:       1,
			Experience:  0.5,
			Description: readFile(dir + skillMdDir + "/aws.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          22,
			IDKey:       "postgresql",
			Name:        "PostgreSQL",
			IconName:    "devicon-postgresql-plain",
			Level:       2,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/postgresql.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 2,
				},
			},
		},

		{
			ID:          23,
			IDKey:       "mysql",
			Name:        "MySQL",
			IconName:    "devicon-mysql-plain",
			Level:       1,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/mysql.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 2,
				},
			},
		},

		{
			ID:          24,
			IDKey:       "docker",
			Name:        "Docker",
			IconName:    "devicon-docker-plain",
			Level:       1,
			Experience:  2,
			Description: readFile(dir + skillMdDir + "/docker.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},

		{
			ID:          25,
			IDKey:       "linux",
			Name:        "linux",
			IconName:    "devicon-linux-plain",
			Level:       1,
			Experience:  1,
			Description: readFile(dir + skillMdDir + "/linux.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 3,
				},
			},
		},

		{
			ID:          26,
			IDKey:       "github",
			Name:        "GitHub",
			IconName:    "devicon-github-original",
			Level:       2,
			Experience:  4,
			Description: readFile(dir + skillMdDir + "/github.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},

		{
			ID:          27,
			IDKey:       "svn",
			Name:        "SVN (Subversion)",
			IconName:    "devicon-subversion-original",
			Level:       1,
			Experience:  1,
			Description: readFile(dir + skillMdDir + "/svn.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},

		{
			ID:          28,
			IDKey:       "nginx",
			Name:        "nginx",
			IconName:    "devicon-nginx-original",
			Level:       2,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/nginx.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 3,
				},
			},
		},
		{
			ID:          29,
			IDKey:       "apache",
			Name:        "Apache",
			IconName:    "devicon-apache-plain",
			Level:       1,
			Experience:  3,
			Description: readFile(dir + skillMdDir + "/apache.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 3,
				},
			},
		},
		{
			ID:          30,
			IDKey:       "xd",
			Name:        "Adobe XD",
			IconName:    "devicon-xd-plain",
			Level:       3,
			Experience:  4,
			Description: readFile(dir + skillMdDir + "/xd.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          31,
			IDKey:       "photoshop",
			Name:        "Adobe Photoshop",
			IconName:    "devicon-photoshop-plain",
			Level:       2,
			Experience:  4,
			Description: readFile(dir + skillMdDir + "/photoshop.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
		{
			ID:          32,
			IDKey:       "illustrator",
			Name:        "Adobe illustrator",
			IconName:    "devicon-illustrator-plain",
			Level:       2,
			Experience:  4,
			Description: readFile(dir + skillMdDir + "/illustrator.md"),
			Edges: ent.SkillEdges{
				SkillType: &ent.SkillType{
					ID: 4,
				},
			},
		},
	}

	bulk := make([]*ent.SkillCreate, len(skills))

	for i, s := range skills {
		bulk[i] = client.Skill.Create().SetIDKey(s.IDKey).SetIconName(s.IconName).SetName(s.Name).SetLevel(s.Level).SetExperience(s.Experience).SetDescription(s.Description).SetSkillTypeID(s.Edges.SkillType.ID)
	}

	return client.Skill.CreateBulk(bulk...).Save(ctx)
}

func readFile(name string) []byte {
	fmt.Println("ファイル読み取り処理を開始します")
	f, err := os.Open(name)
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()

	b, err := ioutil.ReadAll(f)

	return b
}
