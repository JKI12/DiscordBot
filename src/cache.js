import jsonfile from 'jsonfile';
const file = './cache.json';

const add = async (key, value) => {
  const json = await readFile();
  json[key] = value;
  console.log(`Added ${JSON.stringify(value)} to '${key}'`);
  await writeToFile(json);
};

const get = async (key) => {
  const json = await readFile();
  return json[key];
};

const readFile = () => {
  return new Promise((resolve, reject) => {
    jsonfile.readFile(file, (err, obj) => {
      if(err) {
        reject(err);
      } else {
        resolve(obj);
      }
    });
  });
};

const writeToFile = (json) => {
  return new Promise((resolve, reject) => {
    jsonfile.writeFile(file, json, (err) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  add,
  get
};
