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

	client, err := ent.Open("mysql", "test_user:test_password@tcp(p-db:3306)/test_db?parseTime=True")
	if err != nil {
		log.Fatalf("failed opening connection to mysql: %v", err)
		fmt.Println("データベース接続失敗")
	} else {
		fmt.Println("データベース接続成功")
	}
	defer client.Close()

	// wrappedGrpcServer := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool { return true }))

	grpcServer := grpc.NewServer()
	// grpcweb.WithAllowNonRootResource(true)
	// grpcweb.WithCorsForRegisteredEndpointsOnly(false)
	entpb.RegisterProcessTypeServiceServer(grpcServer, entpb.NewProcessTypeService(client))
	entpb.RegisterProjectServiceServer(grpcServer, service.NewCustomProjectService(client))
	entpb.RegisterSkillServiceServer(grpcServer, service.NewCustomSkillService(client))
	entpb.RegisterSkillTypeServiceServer(grpcServer, entpb.NewSkillTypeService(client))

	// grpcMux := http.NewServeMux()
	// grpcMux.Handle("/", wrappedGrpcServer)
	// grpcMux.Handle("/", http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
	// 	if wrappedGrpcServer.IsGrpcWebRequest(req) {
	// 		fmt.Println("grpc web request")
	// 		// fmt.Println(grpcweb.ListGRPCResources(server))
	// 		wrappedGrpcServer.ServeHTTP(resp, req)
	// 		// grpcServer.ServeHTTP(resp, req)
	// 		return
	// 	}
	// 	fmt.Println("web request")
	// 	http.DefaultServeMux.ServeHTTP(resp, req)
	// 	fmt.Fprintf(resp, "Hello!")
	// }))
	// http.ListenAndServe(":5001", grpcMux)

	lis, err := net.Listen("tcp", ":5001")
	reflection.Register(grpcServer)
	// // grpcServer.RegisterService(&entpb.ProcessTypeService_ServiceDesc, svc)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("server ended: %s", err)
	}
}
