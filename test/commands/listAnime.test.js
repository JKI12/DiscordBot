import { expect } from 'chai';
import sinon from 'sinon';

import messageHandler from '../../src/messageHandler';
import listAnime from '../../src/commands/listAnime';
import cache from '../../src/cache';

describe('List Anime Command', () => {
  const message = {
    channel: {
      id: 1
    }
  };

  it('should send the correct message', async () => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, 'sendMessage');
    const cacheGetStub = sinon.stub(cache, 'get')
      .returns([
        { id: 'test anime 1', author: 'Jake' },
        { id: 'https://test.com/anime', author: 'John' }
      ]);

    // Act
    await listAnime(message);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;
    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        [
          '**test anime 1** - Added by: <@!Jake>',
          '**<https://test.com/anime>** - Added by: <@!John>'
        ]
      ]
    );

    messageHandler.sendMessage.restore();
    cache.get.restore();
  });

  it('should send "There currently isnt any anmie in roulette, why no add some? !addAnime" when there is no anime', async () => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, 'sendMessage');
    const cacheGetStub = sinon.stub(cache, 'get')
      .returns([]);

    // Act
    await listAnime(message);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;
    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        'There currently isnt any anmie in roulette, why no add some? !addAnime'
      ]
    );

    messageHandler.sendMessage.restore();
    cache.get.restore();
  });
});
