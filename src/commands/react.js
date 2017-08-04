import rand from '../rand';

import { reactions, getReactions } from '../reacts/reactions';
import { sendMessage, sendDm } from '../messageHandler';

const react = (message, reaction) => {
  const gifs = reactions[reaction];
  const index = rand(0, gifs.length);
  const { channel } = message;

  sendMessage(channel, gifs[index]);
};

const isValidReaction = (reaction) => {
  if (reactions[reaction]) {
    return true;
  }

  return false;
};

export default (message, parameters) => {
  const reaction = parameters[0];

  if (isValidReaction(reaction)) {
    react(message, reaction);
  } else {
    const { author } = message;
    
    if (author) {
      const typeReactions = getReactions();
      sendDm(author, `Sorry the only emotions I can react with are: ${typeReactions}`);
      return;
    }
  }
};

