import { ANIME_CACHE_KEY } from '../constants';
import { add, get } from '../cache';
import { sendMessage } from '../messageHandler';

const linkRegex = /(https?:\/\/[^\s]+)/g;

export const addAnime = async (item, author) => {
  const cached = await get(ANIME_CACHE_KEY);

  let anime = [];

  if(cached) {
    anime = JSON.parse(cached);
  }

  anime.push({
    id: item,
    author
  });

  add(ANIME_CACHE_KEY, JSON.stringify(anime));
};

export default async (message, parameters) => {
  const { channel, author } = message;

  if (!parameters || parameters.length == 0) {
    sendMessage(channel, `<@!${author.id}> Please provide either a link to an anime or the name`);
    return;
  }

  let anime = '';

  if (parameters.length == 1) {
    anime = parameters[0];
  } else {
    anime = parameters.join(' ');
  }

  await addAnime(anime, author.id);

  const isLink = linkRegex.test(anime);
  anime = isLink ? `<${anime}>` : anime;

  sendMessage(channel, `<@!${author.id}> Added '${anime}' to the roulette list`);
};