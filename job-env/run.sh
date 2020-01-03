#!/bin/sh
set -e

if [ -z "$PSQL_URI" ]; then
  echo "Please specify PSQL_URI"
  exit 1
fi

echo "HELLO WORLD!!!!!"