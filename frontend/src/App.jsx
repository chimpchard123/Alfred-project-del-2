import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ThreadPage from './pages/ThreadPage'
import NewThreadPage from './pages/NewThreadPage'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Start</Link> | <Link to="/new">Ny tråd</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/threads/:id" element={<ThreadPage />} />
        <Route path="/new" element={<NewThreadPage />} />
      </Routes>
    </div>
  )
}
