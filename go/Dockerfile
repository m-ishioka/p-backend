FROM golang:1.18.0
ARG PROTOBUF_VERSION=3.17.3
ARG PROTOBUF_WEB_PLUGIN_VERSION=3.21.2

# air
RUN apt-get update && apt-get install -y git && apt-get install -y unzip && apt-get install -y curl
RUN apt-get install -y protobuf-compiler
RUN go install github.com/cosmtrek/air@v1.29.0

# WORKDIR /tmp/protoc
# protoc
# RUN curl -L https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOBUF_VERSION}/protoc-${PROTOBUF_VERSION}-linux-x86_64.zip -o protoc.zip && \
#     unzip protoc.zip
# RUN curl -L https://github.com/protocolbuffers/protobuf-javascript/releases/download/v${PROTOBUF_WEB_PLUGIN_VERSION}/protobuf-javascript-${PROTOBUF_WEB_PLUGIN_VERSION}-linux-x86_64.zip -o protoc-web-plugin.zip && \
#     unzip protoc-web-plugin.zip
# ENV PATH $PATH:/tmp/protoc/bin
# ENV PATH $PATH:/tmp/protoc/protoc-gen-grpc-web
# RUN echo $PATH

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt install -y nodejs
RUN npm -g install protoc-gen-grpc-web
RUN npm -g install protoc-gen-ts

WORKDIR /app

COPY ./src/ ./

RUN mkdir -p ent/migrate/migrations

# gRPC
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
# ent
RUN go install entgo.io/ent/cmd/ent@v0.11.0
# ent + grpc
RUN go install entgo.io/contrib/entproto/cmd/protoc-gen-entgrpc@latest

RUN go build -o /docker-gs-ping

EXPOSE 5001

CMD [ "/docker-gs-ping" ]
