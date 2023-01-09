.PHONY: test go run compose-up compose-down

BUILD_DIR = $(PWD)/app

test:
	npm test

go:
	npm start

docker_build_image:
	docker build -t portfolio:latest .

docker_app: docker_build_image
	docker run -d \
	            --restart unless-stopped \
        		--name portfolio-c \
        		portfolio:latest

run: docker_app
stop:
	docker container stop portfolio-c
	docker container rm portfolio-c
	docker rmi portfolio:latest

compose-up:
	docker compose up
compose-down:
	docker-compose down
