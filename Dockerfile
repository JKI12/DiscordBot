FROM letsxo/node-ffmpeg:1.8.0

RUN npm install -g pm2

WORKDIR /opt/app/discord_bot

COPY node_modules node_modules

COPY dist ./dist
COPY package.json .

WORKDIR /opt/app/discord_bot/dist

CMD ["pm2-docker", "index.js"]