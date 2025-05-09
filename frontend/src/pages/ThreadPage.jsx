import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReplyList from '../components/ReplyList'
import ReplyForm from '../components/ReplyForm'

export default function ThreadPage() {
  const { id } = useParams()
  const [thread, setThread] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/threads/${id}`)
      .then(res => res.json())
      .then(setThread)
  }, [id])

  if (!thread) return <p>Loading</p>

  return (
    <div>
      <h2>{thread.title}</h2>
      <p>{thread.content}</p>
      <ReplyList replies={thread.replies} />
      <ReplyForm threadId={id} />
    </div>
  )
}
