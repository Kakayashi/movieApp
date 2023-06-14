FROM php:8.0

RUN apt-get update -y
RUN docker-php-ext-install pdo pdo_mysql
RUN apt-get install -y unzip libpq-dev libcurl4-gnutls-dev


WORKDIR /var/www
COPY . .

COPY --from=composer:2.5.7 /usr/bin/composer /usr/bin/composer

ENV PORT=8000

ENTRYPOINT ["Docker/entrypoint.sh"]



