import { NavLink, Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">📘 Nhật ký Code</Link>
        <nav className="nav">
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/posts">Bài viết</NavLink>
          <NavLink to="/about-us">Giới thiệu</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        © 2026 Blog nhật ký tự học lập trình
      </footer>
    </>
  )
}