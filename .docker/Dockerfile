FROM nginx:1.21

LABEL maintainer="aleksey@kolyadin.ru"

COPY --chown=www-data:www-data dist/. /var/www/app/dist

### Set timezone
ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /var/www/app