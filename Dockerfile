FROM node:5.11
MAINTAINER <Marc Bramaud m.duboucheron@gmail.com>

RUN npm i -g phantomjs
WORKDIR /tmp
COPY ./package.json /tmp
RUN npm config set registry http://registry.npmjs.org/
RUN npm i

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app

CMD npm test
