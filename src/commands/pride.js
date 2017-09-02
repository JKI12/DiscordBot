import { sendMessage } from '../messageHandler';
import { playFile } from '../audioHandler';

export default (message, parameters, client) => {
  const { channel } = message;
  sendMessage(channel, 'https://media.tenor.com/images/5a7d949cc2c0ba3d3a30ac72ef140d85/tenor.gif');
  sendMessage(channel, '<:KappaPride:282911362336948224><:KappaPride:282911362336948224><:KappaPride:282911362336948224><:KappaPride:282911362336948224><:KappaPride:282911362336948224>');
  playFile(client, message, './res/audio/history.mp3');
};
