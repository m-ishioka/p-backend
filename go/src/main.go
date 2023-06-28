package main

import (
	"fmt"
	"log"
	"net"
	"os"
	"src/ent"
	"src/ent/proto/entpb"
	service "src/service"

	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/health"
  healthpb "google.golang.org/grpc/health/grpc_health_v1"
)

func main() {
	os.Setenv("GRPC_GO_LOG_VERBOSITY_LEVEL", "99")
	os.Setenv("GRPC_GO_LOG_SEVERITY_LEVEL", "info")
	defer os.Setenv("GRPC_GO_LOG_VERBOSITY_LEVEL", "")
	defer os.Setenv("GRPC_GO_LOG_SEVERITY_LEVEL", "")

	env := os.Getenv("APP_ENV")
	var (
		dbUser string
		dbPwd string
		dbHost string
		dbName string
		unixSocketPath string
		dbURI string 
	)
	fmt.Printf("env : %v\n", env)
	if env == "dev" {
		dbUser         = os.Getenv("MYSQL_USER")
		dbPwd          = os.Getenv("MYSQL_PASSWORD")
		dbHost         = os.Getenv("MYSQL_HOST")
		dbName         = os.Getenv("MYSQL_NAME")
		dbURI          = fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?parseTime=true", dbUser, dbPwd, dbHost, dbName)
	} else {
		dbUser         = os.Getenv("MYSQL_USER")
		dbPwd          = os.Getenv("MYSQL_PASSWORD")
		dbName         = os.Getenv("MYSQL_NAME")
		unixSocketPath = os.Getenv("UNIX_SOCKET_PATH")
		dbURI          = fmt.Sprintf("%s:%s@unix(%s)/%s?parseTime=true", dbUser, dbPwd, unixSocketPath, dbName)
	}
	client, err := ent.Open("mysql", dbURI)

	if err != nil {
		log.Fatalf("failed opening connection to mysql: %v", err)
		fmt.Println("データベース接続失敗")
	} else {
		fmt.Println("データベース接続成功")
	}
	defer client.Close()

	grpcServer := grpc.NewServer()
	entpb.RegisterProcessTypeServiceServer(grpcServer, entpb.NewProcessTypeService(client))
	entpb.RegisterProjectServiceServer(grpcServer, service.NewCustomProjectService(client))
	entpb.RegisterSkillServiceServer(grpcServer, service.NewCustomSkillService(client))
	entpb.RegisterSkillTypeServiceServer(grpcServer, entpb.NewSkillTypeService(client))
	healthSvc := health.NewServer()
  healthpb.RegisterHealthServer(grpcServer, healthSvc)
  healthSvc.SetServingStatus("bookstore.BookstoreService", healthpb.HealthCheckResponse_SERVING)

	lis, err := net.Listen("tcp", ":5001")
	reflection.Register(grpcServer)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("server ended: %s", err)
	}
}
