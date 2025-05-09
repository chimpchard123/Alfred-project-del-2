export default function ReplyList({ replies }) {
    if (!replies || replies.length === 0) {
      return <p>No Replies</p>
    }
  
    return (
      <ul>
        {replies.map(reply => (
          <li key={reply.id}>
            <p>{reply.content}</p>
            <small>Created: {new Date(reply.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    )
  }
  