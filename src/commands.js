import info from './commands/info';
import addAnime from './commands/addAnime';
import listAnime from './commands/listAnime';
import rouletteAnime from './commands/rouletteAnime';

const commands = {
  "!info": info,
  "!addanime": addAnime,
  "!listanime": listAnime,
  "!animeroulette": rouletteAnime
};

const executeCommand = (message) => {
  const content = message.content.toLowerCase().split(' ');
  const command = content[1];
  const parameters = content.slice(2, content.length);

  if (isValidCommand(command)) {
    commands[command](message, parameters);
  }
};

const isValidCommand = (command) => {
  if (commands[command]) {
    return true;
  }

  return false;
};

export default executeCommand;