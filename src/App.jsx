import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Inbox from './pages/Inbox.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/inbox">Inbox</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </div>
  )
}

export default App
