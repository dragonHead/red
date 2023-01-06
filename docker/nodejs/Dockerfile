FROM node:19.4.0-bullseye-slim

RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get install -y --no-install-recommends dumb-init \
  libxtst6 libdbus-glib-1-2 libx11-xcb1 \
  libgtk-3.0 libgbm-dev libnss3 libatk-bridge2.0-0 libasound2 \
  libgstreamer1.0-0 libegl1 libevent-2.1-7 libopus0 libxslt1.1 libopengl0 libglx0 libwoff1 libharfbuzz-icu0 libgstreamer-plugins-base1.0-0 libgstreamer-gl1.0-0 libopenjp2-7 libwebpdemux2 libenchant-2-2 libsecret-1-0 libhyphen0 libmanette-0.2-0 libatomic1 libgles2 gstreamer1.0-libav

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
RUN npm install \
 && npx playwright install

CMD ["dumb-init", "node", "app.js"]
