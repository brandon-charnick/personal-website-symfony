#!/bin/sh
set -e

npm ci
if [ "$APP_ENV" != 'prod' ]; then
	npm run watch
fi

setfacl -R -m u:www-data:rwX -m u:"$(whoami)":rwX var
setfacl -dR -m u:www-data:rwX -m u:"$(whoami)":rwX var

exec "$@"