#!/bin/sh
set -e

npm ci
npx encore production

exec "$@"
