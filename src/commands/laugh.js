import { playFile } from '../audioHandler';

export default (message, parameters, client) => {
  playFile(client, message, './res/audio/weeb1.mp3');
};
