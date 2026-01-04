import { Link } from 'react-router-dom'
import '../styles/home.css'

const HomePage = () => {
  const teams = [
    { name: "Trille Trolle", ages: "3-5 år", time: "Tirsdag 16:00-17:00", color: "yellow" },
    { name: "U8", ages: "6-8 år", time: "Tirsdag 16:00-17:00", color: "blue" },
    { name: "Cool Ladies", ages: "Dame Senior", time: "Tirsdag 18:45-20:15", color: "pink" },
    { name: "Herre Senior", ages: "Senior", time: "Tirsdag 20:30-22:00", color: "green" },
    { name: "Five a Side", ages: "Mix voksne", time: "Følg vores Facebook", color: "purple" },
  ]

  const schedule = [
    { day: "Tirsdag", time: "16:00-17:00", team: "Børnehold", type: "Trille Trolle + U8" },
    { day: "Tirsdag", time: "18:45-20:15", team: "Cool Ladies", type: "Dame Senior" },
    { day: "Tirsdag", time: "20:30-22:00", team: "Herre Senior", type: "Senior mænd" },
    { day: "Se Facebook", time: "for opstart", team: "Five a Side", type: "Mix voksne" },
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">Sæsonstart August 2025</span>
            <h1 className="hero-title">Håndbold for alle aldre</h1>
            <p className="hero-subtitle">
              Ejby IF Håndbold byder alle velkomne. Fra de mindste på 3 år
              til voksne — der er plads til dig uanset niveau.
            </p>
            <div className="hero-buttons">
              <Link to="/tilmelding" className="btn-primary">Bliv medlem</Link>
              <Link to="/hold" className="btn-secondary">Se vores hold</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1932</span>
                <span className="stat-label">Stiftet</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Hold</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/20240711_115608_resized.jpg"
              alt="Ejby IF Håndbold - Børnehold"
            />
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="teams-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Vores hold</h2>
            <p className="section-subtitle">Find det hold der passer til dig</p>
          </div>
          <div className="teams-grid">
            {teams.map((team) => (
              <Link to="/hold" key={team.name} className="team-card">
                <div className={`team-icon ${team.color}`}>
                  <span>👥</span>
                </div>
                <h3 className="team-name">{team.name}</h3>
                <p className="team-age">{team.ages}</p>
                <div className="team-schedule">
                  <span>🕐</span> {team.time}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="schedule-section">
        <div className="section-container">
          <div className="schedule-grid">
            <div className="schedule-content">
              <h2>Træningsplan</h2>
              <p>
                Vi træner i Ejbyhallen hver tirsdag og torsdag.
                Se oversigten og find det tidspunkt der passer dig.
              </p>
              <div className="schedule-list">
                {schedule.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <div className="schedule-time">
                      <div className="schedule-day">{item.day}</div>
                      <div className="schedule-hour">{item.time}</div>
                    </div>
                    <div className="schedule-divider"></div>
                    <div className="schedule-info">
                      <h4>{item.team}</h4>
                      <span>{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="schedule-image">
              <img
                src="/20231010_202800.jpg"
                alt="Træning i Ejbyhallen"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Galleri</h2>
            <p className="section-subtitle">Øjeblikke fra vores klub</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large">
              <img src="/received_558960450347550.jpeg" alt="Cool Ladies fejrer sejr" />
            </div>
            <div className="gallery-item">
              <img src="/20240416_165423_resized.jpg" alt="Vores yngste spillere" />
            </div>
            <div className="gallery-item">
              <img src="/20240827_203508_resized.jpg" alt="Herre Senior holdet" />
            </div>
            <div className="gallery-item">
              <img src="/20240711_100056.jpg" alt="Målvogter i aktion" />
            </div>
            <div className="gallery-item gallery-wide">
              <img src="/20241102_103453_resized.jpg" alt="U8 holdet med trænere" />
            </div>
            <div className="gallery-item">
              <img src="/20240317_145500_resized.jpg" alt="Fejring efter kamp" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2>Klar til at spille?</h2>
            <p>Bliv en del af fællesskabet. Første træning er altid gratis.</p>
            <div className="cta-pricing">
              <div className="price-item">
                <span className="price-amount">450 kr</span>
                <span className="price-label">børn / år</span>
              </div>
              <div className="price-item">
                <span className="price-amount">550 kr</span>
                <span className="price-label">voksne / år</span>
              </div>
            </div>
            <p className="cta-registration-info">
              Tilmelding sker via Holdsport appen eller på <a href="mailto:info@ejbyhaandbold.dk">info@ejbyhaandbold.dk</a>
            </p>
            <a href="https://www.holdsport.dk/team/ejby-if-handbold" target="_blank" rel="noopener noreferrer" className="cta-button">Tilmeld via Holdsport</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Kontakt os</h2>
              <p>Har du spørgsmål? Vi er klar til at hjælpe dig.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Adresse</h4>
                    <p>Ejbyhallen, Skovvang 4<br/>4623 Lille Skensved</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📅</div>
                  <div className="contact-text">
                    <h4>Træning</h4>
                    <p>Tirsdag & Torsdag</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p><a href="mailto:info@ejbyhaandbold.dk">info@ejbyhaandbold.dk</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send en besked</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Dit navn" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Din email" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Din besked" rows="4"></textarea>
                </div>
                <button type="submit" className="form-submit">Send besked</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
