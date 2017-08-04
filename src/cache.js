import redis from 'redis';
import bluebird from 'bluebird';

let client;

const initCache = () => {
  if (!client) {
    bluebird.promisifyAll(redis.RedisClient.prototype);

    const redisAddress = process.env.REDIS_ADDRESS;

    if (redisAddress) {
      client = redis.createClient(6379, `${redisAddress}`);
    } else {
      client = redis.createClient();
    }

    client.on('connect', () => {
      console.log('connected to redis cache');
    });

    client.on("error", (err) => {
      console.log("Error " + err);
    });
  }
};

const add = (key, value) => {
  if (client) {
    client.set(key, value, (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Added ${value} to ${key}`);
      }
    })
  }
};

const get = (key) => {
  if (client) {
    return client.getAsync(key);
  }
};

module.exports = {
  add,
  get,
  initCache
};
