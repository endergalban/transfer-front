FROM node:14-alpine as base

WORKDIR /usr/local/app/

RUN npm cache clean --force

COPY ./ /usr/local/app/

RUN npm install
RUN npm run build

FROM nginx:alpine as deploy
COPY --from=base /usr/local/app/dist/transfer-front /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80