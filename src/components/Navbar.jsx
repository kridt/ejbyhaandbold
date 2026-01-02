import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Ejby IF Håndbold" className="navbar-logo-img" />
        </Link>

        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link">Forside</Link></li>
          <li><Link to="/" className="navbar-link">Hold</Link></li>
          <li><Link to="/" className="navbar-link">Kalender</Link></li>
          <li><Link to="/" className="navbar-link">Om os</Link></li>
          <li><Link to="/" className="navbar-cta">Bliv medlem</Link></li>
        </ul>

        <button className="navbar-mobile-btn">☰</button>
      </div>
    </nav>
  )
}

export default Navbar
