import info from './commands/info';
import addAnime from './commands/addAnime';
import listAnime from './commands/listAnime';
import rouletteAnime from './commands/rouletteAnime';
import laugh from './commands/laugh';
import react from './commands/react';
import cat from './commands/cat';
import dog from './commands/dog';
import pride from './commands/pride';

const commands = {
  "!info": info,
  "!addanime": addAnime,
  "!listanime": listAnime,
  "!animeroulette": rouletteAnime,
  "!laugh": laugh,
  "!react": react,
  "!cat": cat,
  "!dog": dog,
  "!pride": pride,
};

const executeCommand = (message, client) => {
  const content = message.content.toLowerCase().split(' ');
  const command = content[1];
  const parameters = content.slice(2, content.length);

  if (isValidCommand(command)) {
    commands[command](message, parameters, client);
  }
};

const isValidCommand = (command) => {
  if (commands[command]) {
    return true;
  }

  return false;
};

export default executeCommand;