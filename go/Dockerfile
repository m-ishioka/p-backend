FROM golang:1.18.0
ARG PROTOBUF_VERSION=3.17.3
ARG PROTOBUF_WEB_PLUGIN_VERSION=3.21.2

# air
RUN apt-get update && apt-get install -y git && apt-get install -y unzip && apt-get install -y curl
RUN apt-get install -y protobuf-compiler
RUN go install github.com/cosmtrek/air@v1.29.0

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt install -y nodejs
RUN npm -g install protoc-gen-grpc-web
RUN npm -g install protoc-gen-ts

WORKDIR /app

ENV GO111MODULE=on

# gRPC
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
# ent
RUN go install entgo.io/ent/cmd/ent@v0.11.0
# ent + grpc
RUN go install entgo.io/contrib/entproto/cmd/protoc-gen-entgrpc@latest

COPY src/go.mod ./
COPY src/go.sum ./

RUN go mod download

COPY src/ ./

RUN mkdir -p ent/migrate/migrations

RUN CGO_ENABLED=0 GOOS=linux go build -o /docker-gs-ping

EXPOSE 5001

CMD ["/docker-gs-ping"]
