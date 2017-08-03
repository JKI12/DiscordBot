import { expect } from 'chai';
import sinon from 'sinon';

import messageHandler from '../../src/messageHandler';
import info from '../../src/commands/info';

describe('Info Command', () => {
  const message = {
    channel: {
      id: 1
    }
  };

  it('should send a message when the info command is called', () => {
    // Arrange
    const sendMessageStub = sinon.stub(messageHandler, "sendMessage");

    // Act
    info(message);

    // Assert
    expect(sendMessageStub.calledOnce).to.be.true;

    messageHandler.sendMessage.restore();
  });
});