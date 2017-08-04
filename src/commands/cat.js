import { getCat } from '../catHandler';
import { sendMessage } from '../messageHandler';

export default (message) => {
  getCat()
    .then((cat) => {
      sendMessage(message.channel, cat);
    })
    .catch((err) => {
      console.error(err);
    })
};
