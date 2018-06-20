#!/bin/bash

echo Building+tagging images
for tag in $(./docker-tags.sh) ; do
  docker build --pull --cache-from kittycash/kittycash.com --tag "$tag" . || exit 1
done
