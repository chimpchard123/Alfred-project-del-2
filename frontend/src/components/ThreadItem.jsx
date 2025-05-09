import { Link } from 'react-router-dom'

export default function ThreadItem({ thread }) {
  return (
    <li>
      <Link to={`/threads/${thread.id}`}>
        <h3>{thread.title}</h3>
        <p>{thread.content.slice(0, 100)}...</p>
      </Link>
    </li>
  )
}
