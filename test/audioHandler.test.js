import sinon from 'sinon';
import messageHandler from '../src/messageHandler';

import { expect } from 'chai';
import { playFile } from '../src/audioHandler';

describe('Audio handler', () => {
  it('should send "Please join a voice channel to trigger that command" if the user is not in a voice channel', () => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, 'sendMessage');

    const client = {
      createVoiceBroadcast: sinon.stub()
    }

    const message = {
      channel: {
        id: 1
      },
      member: {
        voiceChannel: undefined
      }
    };

    // Act

    playFile(client, message, 'test.mp3');

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;
    expect(sendMessageStub.args[0]).to.deep.equal(
      [
        {
          id: 1
        },
        'Please join a voice channel to trigger that command'
      ]
    );

    messageHandler.sendMessage.restore();
  });
});