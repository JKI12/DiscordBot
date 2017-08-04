import { sendMessage } from './messageHandler';

const playFile = (client, message, audioFile) => {
  const broadcast = client.createVoiceBroadcast();

  const channel = message.member.voiceChannel;

  if (!channel) {
    sendMessage(message.channel, 'Please join a voice channel to trigger that command');
    return;
  }

  broadcast.on('end', () => {
    channel.leave();
  });

  channel.join()
    .then(connection => {
      broadcast.playFile(audioFile);
      for (const connection of client.voiceConnections.values()) {
        connection.playBroadcast(broadcast);
      }
    })
    .catch(err => console.error(err));
};

module.exports = {
  playFile
};
