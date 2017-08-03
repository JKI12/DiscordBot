import { ANIME_CACHE_KEY } from '../constants';
import { get } from '../cache';
import { sendMessage } from '../messageHandler';

const linkRegex = /(https?:\/\/[^\s]+)/g;

export default async (message) => {
  const { channel } = message;

  const anime = await get(ANIME_CACHE_KEY);

  if(!anime || anime.length == 0) {
    sendMessage(channel, 'There currently isnt any anmie in roulette, why no add some? !addAnime');
    return;
  }

  const m = anime.map((element) => {
    const isLink = linkRegex.test(element.id);
    const name = isLink ? `<${element.id}>` : element.id;
    return `**${name}** - Added by: <@!${element.author}>`;
  });

  sendMessage(channel, m);
};
