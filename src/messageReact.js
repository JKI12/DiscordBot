import jakeReact from './reacts/thatsourjakeReact';
import michealReact from './reacts/mushilikesmashReact';

const reactions = {
  // "6886": jakeReact,
  "6622": michealReact
};

const shouldReact = (id) => {
  if(reactions[id]) {
    console.log(`Reacting to ${id}`);
    return true;
  }

  return false;
};

export default (message) => {
  const id = message.author.discriminator;

  if(shouldReact(id)) {
    reactions[id](message);
  }
};