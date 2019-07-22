#!/usr/bin/env sh

# abort on errors
set -e
git config --global user.email "vuepress@docker.build"
git config --global user.name "Vuepress Autobuild in docker"
git pull origin master
git add -A
git commit -m 'Auto Deploy'
git push origin master