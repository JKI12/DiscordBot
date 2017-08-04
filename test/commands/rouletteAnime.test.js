import { expect } from 'chai';
import sinon from 'sinon';

import messageHandler from '../../src/messageHandler';
import rouletteAnime from '../../src/commands/rouletteAnime';
import cache from '../../src/cache';

describe('Roulette Anime Command', () => {
  const message = {
    channel: {
      id: 1
    },
    author: {
      id: 'Jake'
    }
  };

  it('should send "Unfortuently <@!Jake> there is no anime for roulette just yet, add anime by typing \'!addAnime "anime name or url"\'" when there is no anime present', async () => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, 'sendMessage');
    const cacheGetStub = sinon.stub(cache, 'get')
      .returns([]);

    // Act
    await rouletteAnime(message);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;

    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        'Unfortuently <@!Jake> there is no anime for roulette just yet, add anime by typing \'!addAnime "anime name or url"\''
      ]
    );

    messageHandler.sendMessage.restore();
    cache.get.restore();
  });

  it('should send "Spinning the roulette table for <@!Jake>" and a url if there is anime', async () => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, 'sendMessage');
    const cacheGetStub = sinon.stub(cache, 'get')
      .returns(JSON.stringify([{ id: 'test anime', author: 'Jake' }]));
    const addStub = sinon.stub(cache, 'add');

    // Act
    await rouletteAnime(message);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;

    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        [
          'Spinning the roulette table for <@!Jake>',
          'https://media.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif'
        ]
      ]
    );

    messageHandler.sendMessage.restore();
    cache.get.restore();
    cache.add.restore();
  });
});
