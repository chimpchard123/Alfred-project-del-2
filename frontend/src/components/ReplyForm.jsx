import { useState } from 'react'

export default function ReplyForm({ threadId }) {
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`http://localhost:3000/threads/${threadId}/replies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    setContent('')
    window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Answer</button>
    </form>
  )
}
