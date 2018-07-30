ROOT_DIR       := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
VARIABLES_FILE  = $(ROOT_DIR)/variables.env
SHELL          := $(shell which bash)
ARGS            = $(filter-out $@,$(MAKECMDGOALS))

.SILENT: ;               # no need for @
.ONESHELL: ;             # recipes execute in same shell
.NOTPARALLEL: ;          # wait for this target to finish
.EXPORT_ALL_VARIABLES: ; # send all vars to shell
Makefile: ;              # skip prerequisite discovery

.title:
	$(info )

build: check
	docker-compose build --no-cache

pull:
	docker pull mysql:5.7

up: check
	docker-compose up -d

start: check
	docker-compose start

stop:
	docker-compose stop

status:
	docker-compose ps

reset: check stop clean build up

check:
ifeq ($(wildcard $(VARIABLES_FILE)),)
	$(error Failed to locate the $(VARIABLES_FILE) file.)
endif
	docker-compose config -q

bash: shell

shell:
	docker exec -it -u application $$(docker-compose ps -q app) /bin/bash

root:
	docker exec -it -u root $$(docker-compose ps -q app) /bin/bash

clean: stop
	docker-compose down

%:
	@:
