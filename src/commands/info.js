import { sendMessage } from '../messageHandler';

const botName = process.env.BOT_NAME;

export default ({ channel }) => {
  sendMessage(channel, [
    `Hi there I am ${botName}!`,
    'The commands I can execute are:',
    '**!info**: Shows the info',
    '**!addAnime** ***anime name / url***: Add anime to the Anime Roullete',
    "**!animeList**: Will list all the anime currently in the roultette table",
    "**!animeroulette**: Will start the anime roulette table for you"
  ]);
};
