FROM nginx:1.21

LABEL maintainer="aleksey@kolyadin.ru"

COPY --chown=www-data:www-data dist/. /var/www/app/dist

### Set timezone
ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && echo "date.timezone=$TZ" >> /usr/local/etc/php/conf.d/extra.ini

WORKDIR /var/www/app