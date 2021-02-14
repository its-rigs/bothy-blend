#!/usr/bin/env bash

set -e

# Remove any caches
rm -rf node_modules/.cache/gh-pages

npx gh-pages \
  --silent \
  --dist public \
  --repo "https://$GH_TOKEN@github.com/its-rigs/bothy-blend" \
  --user 1016498+its-rigs@users.noreply.github.com
