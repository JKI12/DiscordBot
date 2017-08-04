require('dotenv').config();

import Discord from 'discord.js';
import executeCommand from './commands';
import messageReact from './messageReact';
import { initCache } from './cache';

const botToken = process.env.BOT_TOKEN;

initCache();

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Im ready...');
});

client.on('message', (message) => {
  const user = client.user;

  messageReact(message);
  
  if (message.isMemberMentioned(user)) {
    executeCommand(message, client);
  }
});

client.login(botToken);