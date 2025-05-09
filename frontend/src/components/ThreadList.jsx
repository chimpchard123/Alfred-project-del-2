import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ThreadList() {
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/threads')
      .then(res => res.json())
      .then(setThreads)
  }, [])

  return (
    <ul>
      {threads.map(thread => (
        <li key={thread.id}>
          <Link to={`/threads/${thread.id}`}>{thread.title}</Link>
        </li>
      ))}
    </ul>
  )
}
