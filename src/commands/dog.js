import getDog from '../dogHandler';
import { sendMessage } from '../messageHandler';

export default (message) => {
  getDog()
    .then((dog) => {
      sendMessage(message.channel, dog);
    })
    .catch((error) => {
      console.error(error);
    });
};
