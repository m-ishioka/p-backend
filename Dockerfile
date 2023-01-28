FROM golang:1.18-alpine

# air
RUN apk update &&  apk add git
RUN go install github.com/cosmtrek/air@v1.29.0

# gRPC
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

# ent
RUN go install entgo.io/ent/cmd/ent@v0.11.0

WORKDIR /app

CMD ["air", "-c", ".air.toml"]
