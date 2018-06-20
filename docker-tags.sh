#!/bin/bash

if [ "$TRAVIS_BRANCH" != "" ] ; then
  echo kittycash/kittycash.com:$TRAVIS_BRANCH
fi

echo kittycash/kittycash.com:$(git rev-parse --short HEAD)

git tag --points-at HEAD | \
  egrep '^[a-ZA-Z0-9_.-]{1,128}$' | \
  sed -e 's/\(.*\)/kittycash\/kittycash.com:\1/g'

# the egrep above is to filter out git tags that don't work as docker tags
