FROM node:12.10.0-alpine as builder
WORKDIR /app
COPY ./package.json ./package.json
RUN npm install

WORKDIR /app
COPY . ./
# RUN npm install
RUN npm run build

### STAGE 2: Setup ###

FROM nginx

## Copy our default nginx config
RUN rm /etc/nginx/conf.d/default.conf
# RUN ln -s /home/nimap/logs/nginx /digital-gold/logs
# RUN ln -s /config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf

# ## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/build /usr/share/nginx/html


# COPY --from=builder /blueprism/build /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]
