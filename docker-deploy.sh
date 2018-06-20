#!/bin/bash

for tag in $(./docker-tags.sh) ; do
  docker push $tag || exit 1
done
