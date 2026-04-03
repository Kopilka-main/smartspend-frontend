#!/bin/sh

if [ ! -f .env ]; then
    echo "Error: .env file not found!"
    echo "Please create .env file from .env.example"
    exit 1
fi

# Reading COMPOSE_FILE_NAME from .env file
COMPOSE_FILE_NAME=$(grep -E "^COMPOSE_FILE_NAME=" .env | cut -d '=' -f2 | tr -d ' ' | tr -d '"' | tr -d "'")

# If COMPOSE_FILE_NAME is not set or empty, use default docker-compose.yml
if [ -z "$COMPOSE_FILE_NAME" ]; then
    COMPOSE_FILE="docker-compose.yml"
    echo "Starting with default docker-compose.yml..."
else
    COMPOSE_FILE="$COMPOSE_FILE_NAME"
    echo "Starting with $COMPOSE_FILE..."
fi

docker compose -f "$COMPOSE_FILE" up --build -d
