#!/bin/sh
set -e

npm ci
if [ "$APP_ENV" != 'prod' ]; then
	npm run watch
fi

exec "$@"