# PHASE 1 : BUILD APP
FROM node:22.9-alpine AS app
WORKDIR /app
COPY . /app
RUN npm install && npm run build

# PHASE 2
FROM nginx:alpine
COPY --from=app /app/dist/jo24-front/browser /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
