import { ANIME_CACHE_KEY } from '../constants';
import { get } from '../cache';
import { sendMessage } from '../messageHandler';

const linkRegex = /(https?:\/\/[^\s]+)/g;

export default async (message) => {
  const { channel } = message;

  const cached = await get(ANIME_CACHE_KEY);

  let anime;

  if (cached) {
    anime = JSON.parse(cached);
  }

  if(!cached || !anime || anime.length == 0) {
    sendMessage(channel, 'There currently isnt any anmie in roulette, why no add some? !addAnime');
    return;
  }

  const m = anime.map((element) => {
    const isLink = linkRegex.test(element.id);
    const name = isLink ? `<${element.id}>` : element.id;
    return `**${name}** - Added by: <@!${element.author}>`;
  });

  var arrays = [], size = 5;

  while (m.length > 0) {
    arrays.push(m.splice(0, size));
  }

  for(let i = 0; i < arrays.length; i ++) {
    const array = arrays[i];
    sendMessage(channel, array);
  }
};
