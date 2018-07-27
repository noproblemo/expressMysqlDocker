# Dockerfile
FROM node:7.7.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .

EXPOSE 3000