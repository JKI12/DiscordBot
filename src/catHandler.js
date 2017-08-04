import axios from 'axios';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const apiKey = process.env.CAT_API_KEY;

const getCat = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://thecatapi.com/api/images/get?format=html`)
      .then(({ data }) => {
        const { window } = new JSDOM(data);
        const imgs = window.document.getElementsByTagName('img');
        const src = imgs[0].getAttribute('src');
        if (src) {
          resolve(src);
        } else {
          reject('No Image Found');
        }
      })
      .catch((err) => {
        reject(err);
      })
  });
};

module.exports = {
  getCat
}