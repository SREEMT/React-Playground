import { useState } from 'react'
import MessageList from '../components/MessageList'
import MessageView from '../components/MessageView'
import '../styles/inbox.css'

const mockMessages = [
  { id: 1, sender: 'Alice', subject: 'Meeting tomorrow', body: 'Let’s meet at 10am.' },
  { id: 2, sender: 'Bob', subject: 'Project update', body: 'The build is ready for review.' },
  { id: 3, sender: 'Eve', subject: 'Lunch?', body: 'Want to grab lunch later?' },
]

export default function Inbox() {
  const [selected, setSelected] = useState(mockMessages[0])

  return (
    <div className="inbox-container">
      <MessageList
        messages={mockMessages}
        onSelect={setSelected}
        selectedId={selected.id}
      />
      <MessageView message={selected} />
    </div>
  )
}
