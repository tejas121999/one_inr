FROM node:12.10.0-alpine 
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install

WORKDIR /app
COPY . ./
# RUN npm install
RUN npm run build
