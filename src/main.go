package main

import (
	"fmt"
	"net/http"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func say_hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello!")
}

func main() {
	dbconf := "test_user:test_password@tcp(p-db:3306)/test_db"

	db, err := sql.Open("mysql", dbconf)

	defer db.Close()

	if err != nil {
		fmt.Println(err.Error())
	}

	err = db.Ping()

	if err != nil {
		fmt.Println("データベース接続失敗")
		return
	} else {
		fmt.Println("データベース接続成功")
	}

	http.HandleFunc("/", say_hello)
	http.ListenAndServe(":8080", nil)
}
