#!/bin/sh
set -e

npm ci
npm run build

exec "$@"