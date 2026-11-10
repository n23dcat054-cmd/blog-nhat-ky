import { Link } from 'react-router'

export default function PostCard({ post }) {
  return (
    <article className="card">
      <span className="tag">{post.tag}</span>
      <h3>{post.title}</h3>
      <small>{post.date}</small>
      <p>{post.summary}</p>
      <Link to={`/posts/${post.id}`} className="read-more">Đọc tiếp →</Link>
    </article>
  )
}