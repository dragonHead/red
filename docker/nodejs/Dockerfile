FROM node:19.2.0-bullseye-slim

RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get install -y --no-install-recommends dumb-init

# ENV NODE_NEV production
ENV NODE_NEV development

RUN useradd --user-group --create-home --shell /bin/bash reddev
ENV HOME=/home/reddev

COPY ./src $HOME/red/src
RUN chown -R reddev:reddev $HOME/*

RUN npm i -g npm

USER reddev
WORKDIR $HOME/red/src
# RUN npm ci --only=production
RUN npm install

CMD ["dumb-init", "node", "app.js"]
