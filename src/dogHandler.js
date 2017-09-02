import axios from 'axios';

export default () => {
  return new Promise((resolve, reject) => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(({data}) => {
        resolve(data.message);
      })
      .catch(error => {
        reject(error);
      });
  });
};
