#!/usr/bin/env bash

# Remove Old Image
docker rm -f nodejs_nginx
docker rm -f nginx

# No Cache Build
docker build --no-cache -t nodejs_nginx -f nginx/Dockerfile .

