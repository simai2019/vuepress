#!/usr/bin/env sh

# abort on errors
set -e
git config user.email "vuepress@docker.build"
git config user.name "Vuepress Autobuild in docker"
git pull origin master
git add -A
git commit -m 'Auto Deploy'
git push origin master