import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="card detail">
      <h1>404 - Không tìm thấy trang</h1>
      <p>Đường dẫn bạn truy cập không tồn tại.</p>
      <Link to="/" className="read-more">← Về trang chủ</Link>
    </div>
  )
}