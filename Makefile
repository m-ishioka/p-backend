.PLONY: generate
generate:
	docker-compose exec p-backend go generate ./ent

# docker-compose exec p-backend go run -mod=mod entgo.io/ent/cmd/ent init User

# docker-compose exec p-backend go get src
