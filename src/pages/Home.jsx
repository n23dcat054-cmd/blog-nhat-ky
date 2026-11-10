import { Link } from 'react-router'
import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <section>
      <div className="hero">
        <h1>Blog nhật ký tự học lập trình</h1>
        <p>Nơi mình ghi lại hành trình học code mỗi ngày.</p>
        <Link to="/posts" className="btn">Xem tất cả bài viết</Link>
      </div>

      <h2 className="section-title">Bài viết mới nhất</h2>
      <div className="post-list">
        {posts.slice(0, 3).map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  )
}