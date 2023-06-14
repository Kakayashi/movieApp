#!/bin/bash
cd movie_games_api/

if [ ! -f "vendor/autoload.php"]; then
    composer install --no-progresss --no-interaction
fi

if [ ! -f ".env"]; then
    echo "Crating env file for env $APP_ENV"
    cp .env.example .env

else
    echo "env file exists."
fi

php artisan migrate
php artisan key:generate
php artisan cache:clear
php artisan config:clear
php artisan route:clear

php artisan serve --port=$PORT --host=0.0.0.0 --env=.env

exec docker-php-entrypoint "$@"