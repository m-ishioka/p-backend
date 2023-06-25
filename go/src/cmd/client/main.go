package main

import (
	"context"
	"fmt"
	"log"
	"math/rand"
	"time"

	"./ent/proto/entpb"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
)

func main() {
	rand.Seed(time.Now().UnixNano())

	conn, err := grpc.Dial(":5001", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("failed connecting to server: %s", err)
	}
	defer conn.Close()
	grpc.EnableTracing = true

	client := entpb.NewProcessTypeServiceClient(conn)

	ctx := context.Background()
	created, err := client.Create(ctx, &entpb.CreateProcessTypeRequest{
		ProcessType: &entpb.ProcessType{
			Name: fmt.Sprintf("process type_%d", rand.Int()),
		},
	})
	if err != nil {
		se, _ := status.FromError(err)
		log.Fatalf("failed creating process type: status=%s message=%s", se.Code(), se.Message())
	}
	log.Printf("process type created with id: %d", created.Id)

	get, err := client.Get(ctx, &entpb.GetProcessTypeRequest{
		Id: created.Id,
	})
	if err != nil {
		se, _ := status.FromError(err)
		log.Fatalf("failed retrieving process type: status=%s message=%s", se.Code(), se.Message())
	}
	log.Printf("retrieved process type with id=%d: %v", get.Id, get)
}
