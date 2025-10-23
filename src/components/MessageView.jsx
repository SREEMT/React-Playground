export default function MessageView({ message }) {
  if (!message) return <div className="message-view">Select a message</div>

  return (
    <div className="message-view">
      <h2>{message.subject}</h2>
      <h4>From: {message.sender}</h4>
      <p>{message.body}</p>
    </div>
  )
}
