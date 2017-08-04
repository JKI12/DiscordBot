import { sendMessage } from '../messageHandler';

const botName = process.env.BOT_NAME;

export default ({ channel }) => {
  sendMessage(channel, [
    `Hi there I am ${botName}!`,
    'The commands I can execute are:',
    '**!info**: Shows the info',
    '**!addAnime** ***anime name / url***: Add anime to the Anime Roullete',
    "**!listAnime**: Will list all the anime currently in the roultette table",
    "**!animeRoulette**: Will start the anime roulette table for you",
    "**!laugh**: Join a voice channel to trigger this command",
    "**!react** ***emotion***: Will send a gif reaction based on emotion"
  ]);
};
