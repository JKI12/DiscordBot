const sendMessage = (channel, message) => {
  channel.send(message)
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(err => console.error(err));
};

const sendDm = (author, message) => {
  author.send(message)
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(err => console.error(err));
};

module.exports = {
  sendMessage,
  sendDm
};
