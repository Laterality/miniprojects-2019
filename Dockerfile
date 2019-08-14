FROM nginx

COPY ./frontend/public /usr/src/app/public
COPY ./scripts/nginx.conf /etc/nginx/conf.d/nginx.conf
