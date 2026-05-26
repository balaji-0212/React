import { useState } from 'react';
import MessageInput from './MessageInput.jsx';
import MessageList from './MessageList.jsx';

function ChatContainer() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    const trimmedMessage = currentMessage.trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage = {
      id: crypto.randomUUID(),
      text: trimmedMessage,
      sentAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((previousMessages) => [...previousMessages, newMessage]);
    setCurrentMessage('');
  };

  return (
    <section className="chat-shell" aria-label="Mini chat application">
      <div className="chat-heading">
        <div>
          <p className="chat-heading__eyebrow">React useState</p>
          <h1>Mini Chat</h1>
        </div>
        <span className="chat-heading__count">{messages.length} sent</span>
      </div>

      <div className="chat-card">
        <MessageInput
          message={currentMessage}
          onMessageChange={setCurrentMessage}
          onSendMessage={handleSendMessage}
        />
      </div>

      <MessageList messages={messages} />
    </section>
  );
}

export default ChatContainer;
