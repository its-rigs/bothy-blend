#!/usr/bin/env bash

set -e

npx gh-pages-clean
npx gh-pages \
  --silent \
  --dist public \
  --repo "https://$GH_TOKEN@github.com/its-rigs/bothy-blend" \
  --user 1016498+its-rigs@users.noreply.github.com
