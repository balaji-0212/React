import { useEffect, useRef } from 'react';

function MessageList({ messages }) {
  const listEndRef = useRef(null);

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="messages-panel" aria-label="Sent messages">
      {messages.length === 0 ? (
        <div className="messages-panel__empty">
          <h2>No messages yet</h2>
          <p>Start a conversation from the message box above.</p>
        </div>
      ) : (
        <ul className="message-list">
          {messages.map((message) => (
            <li className="message-bubble" key={message.id}>
              <p>{message.text}</p>
              <time>{message.sentAt}</time>
            </li>
          ))}
          <li ref={listEndRef} aria-hidden="true" />
        </ul>
      )}
    </section>
  );
}

export default MessageList;
