import { expect } from 'chai';
import sinon from 'sinon';

import messageHandler from '../../src/messageHandler';
import addAnime from '../../src/commands/addAnime';

import cache from '../../src/cache';

describe('Add Anime Command', () => {
  const message = {
    channel: {
      id: 1
    },
    author: {
      id: "Jake"
    }
  };

  it('should send "<!@Jake> Please provide either a link to an anime or the name" when no parameters are passed', async() => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, "sendMessage");

    // Act
    await addAnime(message, null);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;
    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        '<@!Jake> Please provide either a link to an anime or the name'
      ]
    )

    messageHandler.sendMessage.restore();
  });

  it('should add the anime to the cache', async() => {
    // Arrange
    const getStub = sinon.stub(cache, 'get').returns('[]');
    const addStub = sinon.stub(cache, 'add');
    const sendMessageStub = sinon.stub(messageHandler, "sendMessage");

    // Act
    await addAnime(message, [ 'test anime' ]);

    // Assert
    expect(addStub.calledOnce).to.be.true;
    expect(addStub.args[0]).to.deep.equal(
      [
        "anime",
        JSON.stringify(
          [
            {
              id: 'test anime',
              author: 'Jake'
            }
          ]
        )
      ]
    );

    cache.get.restore();
    cache.add.restore();
    messageHandler.sendMessage.restore();
  });

  it('should send "<@!Jake> Added \'test anime\' to the roulette list" when the anime is not a link', async() => {
    // Arrange
    const getStub = sinon.stub(cache, 'get').returns('[]');
    const addStub = sinon.stub(cache, 'add');
    const sendMessageStub = sinon.stub(messageHandler, "sendMessage");

    // Act
    await addAnime(message, [ 'test anime' ]);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;
    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        '<@!Jake> Added \'test anime\' to the roulette list'
      ]
    );

    cache.get.restore();
    cache.add.restore();
    messageHandler.sendMessage.restore();
  });

  it('should send "<@!Jake> Added \'test.com/anime\' to the roulette list" when the anime is a link', async() => {
    // Arrange
    const getStub = sinon.stub(cache, 'get').returns('[]');
    const addStub = sinon.stub(cache, 'add');
    const sendMessageStub = sinon.stub(messageHandler, "sendMessage");

    // Act
    await addAnime(message, [ 'https://test.com/anime' ]);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;
    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        '<@!Jake> Added \'test.com/anime\' to the roulette list'
      ]
    );

    cache.get.restore();
    cache.add.restore();
    messageHandler.sendMessage.restore();
  });
});