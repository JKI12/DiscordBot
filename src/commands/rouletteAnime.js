import rand from '../rand';

import { ANIME_CACHE_KEY } from '../constants';
import { get, add } from '../cache';
import { sendMessage } from '../messageHandler';

export default async (message) => {
  const { channel, author } = message;

  let anime = await get(ANIME_CACHE_KEY);

  if(!anime || anime.length == 0) {
    sendMessage(channel,
      `Unfortuently <@!${author.id}> there is no anime for roulette just yet, add anime by typing '!addAnime "anime name or url"'`);
    return;
  }

  sendMessage(channel, [
    `Spinning the roulette table for <@!${author.id}>`,
    'https://media.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif'
  ]);

  const index = rand(0, anime.length);
  const selection = anime[index];
  anime.splice(index, 1);

  await add(ANIME_CACHE_KEY, anime);

  setTimeout(() => {
    sendMessage(channel, `<@!${author.id}> Anime Roulette has given you: ${selection.id}`);
  }, 1500);
};
