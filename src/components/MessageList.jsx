export default function MessageList({ messages, onSelect, selectedId }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message-item ${msg.id === selectedId ? 'active' : ''}`}
          onClick={() => onSelect(msg)}
        >
          <strong>{msg.sender}</strong>
          <p>{msg.subject}</p>
        </div>
      ))}
    </div>
  )
}
