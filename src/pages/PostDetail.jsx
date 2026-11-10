import { useParams, Link } from 'react-router'
import { posts } from '../data/posts'

export default function PostDetail() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div className="card">
        <h1>Không tìm thấy bài viết</h1>
        <Link to="/posts" className="read-more">← Quay lại danh sách</Link>
      </div>
    )
  }

  return (
    <article className="card detail">
      <span className="tag">{post.tag}</span>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <p>{post.content}</p>
      <Link to="/posts" className="read-more">← Quay lại danh sách</Link>
    </article>
  )
}