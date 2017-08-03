require('dotenv').config();

import Discord from 'discord.js';
import executeCommand from './commands';
import messageReact from './messageReact';

const botToken = process.env.BOT_TOKEN;
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Im ready...');
});

client.on('message', (message) => {
  const user = client.user;

  messageReact(message);
  
  if (message.isMemberMentioned(user)) {
    executeCommand(message);
  }
});

client.login(botToken);