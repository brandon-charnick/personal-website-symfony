#!/bin/sh
set -e

npm ci

if [ "$APP_ENV" != 'prod' ]; then
	npm run watch
else
	npm run build
fi

exec "$@"