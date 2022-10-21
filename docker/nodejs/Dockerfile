FROM node:19.0.0-slim

RUN useradd --user-group --create-home --shell /bin/bash reddev
ENV HOME=/home/reddev

COPY ./src $HOME/red/src
RUN chown -R reddev:reddev $HOME/*

USER reddev
WORKDIR $HOME/red/src
# RUN npm install
