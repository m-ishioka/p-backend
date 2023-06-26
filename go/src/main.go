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

	value := os.Getenv("GRPC_GO_LOG_VERBOSITY_LEVEL")
	value2 := os.Getenv("GRPC_GO_LOG_SEVERITY_LEVEL")
	fmt.Println(value)
	fmt.Println(value2)

	// client, err := ent.Open("mysql", "test_user:test_password@tcp(p-db:3306)/test_db?parseTime=True")
	// client, err := ent.Open("mysql", "root:.0nj+*4MSb0mAtN=@tcp(34.84.131.120:3306)/p-db?parseTime=True")

	// var (
	// 	dbUser         = "root"
	// 	dbPwd          = ".0nj+*4MSb0mAtN="
	// 	dbName         = "p-db"
	// 	unixSocketPath = "/cloudsql/private-390603:asia-northeast1:p-db"
	// )

	// dbURI := fmt.Sprintf("%s:%s@unix(%s)/%s?parseTime=true", dbUser, dbPwd, unixSocketPath, dbName)
	client, err := ent.Open("mysql", "root:.0nj+*4MSb0mAtN=@unix(/cloudsql/private-390603:asia-northeast1:p-db)/p-db?parseTime=true")

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
