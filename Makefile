.PLONY: init
init:
	make clean
	docker-compose build --no-cache

.PHONY: dev-init
dev-init:
	make init
	make create-schema
	make insert-seed

.PHONY: clean
clean:
	docker-compose down --volumes

.PLONY: dev
dev:
	docker-compose up

.PLONY: generate
generate:
	docker-compose run --rm backend go generate ./...

.PLONY: client
client:
	docker-compose run --rm backend go run ./cmd/client

.PHONY: create-schema
create-schema :
	docker-compose run --rm backend go run ./cmd/migration/create/main.go

.PHONY: insert-seed
insert-seed :
	docker-compose run --rm backend go run ./cmd/migration/seed/main.go
