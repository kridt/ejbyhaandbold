import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="Ejby IF Håndbold" className="footer-logo" />
          <p>En del af Ejby IF siden 1932. Her mødes glade børn og voksne - der er plads til alle uanset niveau.</p>
          <div className="footer-social">
            <a href="https://facebook.com/ejbyifhandbold" target="_blank" rel="noopener noreferrer">f</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Hold</h4>
          <ul>
            <li><Link to="/">Trille Trolle</Link></li>
            <li><Link to="/">U8</Link></li>
            <li><Link to="/">Cool Ladies</Link></li>
            <li><Link to="/">Herre Senior</Link></li>
            <li><Link to="/">Five a Side</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><Link to="/">Om klubben</Link></li>
            <li><Link to="/">Kontingent</Link></li>
            <li><Link to="/">Vedtægter</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Kontakt</h4>
          <ul>
            <li>Ejbyhallen</li>
            <li>Skovvang 4</li>
            <li>4623 Lille Skensved</li>
            <li><a href="mailto:info@ejbyhaandbold.dk">info@ejbyhaandbold.dk</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 Ejby IF Håndbold. Stiftet 1932.</span>
        <span>Prototype by Matheo</span>
      </div>
    </footer>
  )
}

export default Footer
