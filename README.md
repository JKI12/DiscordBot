# DiscordBot
This is a discord bot for a private discord server

![Build Status](https://travis-ci.org/JKI12/DiscordBot.svg?branch=master)

## Getting Started
If you want to pull the code down and have a look yourself you will need to create an app inside [ Discord Developer](https://discordapp.com/developers/docs/intro) and then also create a bot user whoes token you then put into a .env file. An example .env file is included

The application is dockerised (slightly incorrectly) but the bot can be built using `docker build .` and then ran using `docker run -d -e BOT_TOKEN="" -e BOT_NAME="" image_id`. You will however also need to create a redis container using the following command `docker pull redis && docker run -p 6379:6379 --name discord_bot-cache -d redis redis-server --appendonly yes` - Yes this should use docker-compose but an issue with env (Should probably look at env files)

## Deployment
At this moment I deploy this bot onto aws manually by running the following commands:
```
  npm run build
  docker build .
  docker tag image_id repo/image_name:latest
  docker push repo/image_name
  SSH into aws instance
  docker network create bot
  docker pull repo/image_name
  docker run -p 6379:6379 --name discord_bot-cache --net bot -d redis redis-server --appendonly yes
  docker run --net bot -d -e BOT_TOKEN="" -e BOT_NAME="" -e REDIS_ADDRESS=(redis container id) repo/image_name:latest
```

A intense process yes but meh 😆