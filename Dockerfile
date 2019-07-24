FROM node:lts-alpine

ARG username
ARG password
ARG repo
ARG domain

RUN apk add git tzdata
RUN git config --global user.email "vuepress@docker.build" \
	&& git config --global user.name "Vuepress Autobuild in docker"

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# https://serverfault.com/a/683651
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm -rf /app/docs/.vuepress/dist && yarn build \
	&& cd /app/docs/.vuepress/dist \
	&& echo $domain > CNAME \
	&& git init \
	&& git remote -v \
	&& git add -A \
	&& git commit -m 'Auto Deploy' \
	&& git push -f https://$username:$password@$repo  master

EXPOSE 8080
CMD [ "yarn", "dev"]