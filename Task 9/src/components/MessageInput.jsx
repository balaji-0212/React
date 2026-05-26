function MessageInput({ message, onMessageChange, onSendMessage }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSendMessage();
    }
  };

  return (
    <div className="message-input">
      <input
        aria-label="Message"
        type="text"
        value={message}
        placeholder="Type your message..."
        onChange={(event) => onMessageChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={onSendMessage}>
        Send Message
      </button>
    </div>
  );
}

export default MessageInput;
