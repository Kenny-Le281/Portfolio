import heroImg from './assets/hero.jpg'
import bikeRepairImg from './assets/bike-repair-service.jpg'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-left">
              <h1 className="hero-name">Kenny Le</h1>
              <p className="hero-sub">PORTFOLIO</p>
              <a className="btn btn-primary mt-4" href="#about">About Me</a>
            </div>

            <div className="hero-card">
              <div className="role">Innovative</div>
              <div className="role">Software Developer</div>
              <div className="role">Creative</div>
              <div className="hero-location">Ottawa, Ontario</div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <p className="section-label">About Me</p>
                <h2 className="section-title">Hello, I'm Kenny.</h2>
                <p className="section-copy">I am a passionate software developer and creative problem solver based in Ottawa. I design polished, user-focused digital experiences and build modern applications that help teams move faster.</p>
                <p className="section-copy">My work brings together strong visual design with practical software architecture, producing clean interfaces and scalable solutions across web and mobile.</p>
              </div>
              <div className="col-lg-6">
                <div className="profile-panel">
                  <p className="panel-heading">Quick facts</p>
                  <ul className="profile-list">
                    <li><strong>Experience:</strong> UI-driven full stack projects</li>
                    <li><strong>Specialty:</strong> React, Bootstrap, responsive design</li>
                    <li><strong>Location:</strong> Ottawa, Ontario</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="work-section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-xl-8 col-lg-10">
                <p className="section-label">How I Work</p>
                <h2 className="section-title">A simple process for better product outcomes</h2>
              </div>
            </div>
            <div className="row gx-4 gy-4 justify-content-center">
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">01</span>
                  <h3>Discover</h3>
                  <p className="work-copy">I listen to your goals, understand your users, and define clear project requirements before writing a line of code.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">02</span>
                  <h3>Design</h3>
                  <p className="work-copy">I craft polished interfaces that feel modern and intuitive, using typography, spacing, and layout systems that scale.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">03</span>
                  <h3>Build</h3>
                  <p className="work-copy">I develop responsive apps with clean, maintainable code so your product performs well across screens and devices.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">04</span>
                  <h3>Launch</h3>
                  <p className="work-copy">I help you ship with confidence, ensuring the final product is polished, stable, and ready for users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="services-heading text-center mb-5">
              <p className="services-label">My Services</p>
              <h2 className="services-title">What I Can Do For You</h2>
            </div>

            <div className="row justify-content-center gx-4 gy-4">
              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <div className="service-card">
                  <h3>Web & App Development</h3>
                  <p className="service-copy">Design and build polished, responsive web applications using modern front-end tools and best UI practices.</p>
                </div>
              </div>

              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <div className="service-card">
                  <h3>UI / UX Design</h3>
                  <p className="service-copy">Create user-friendly interfaces with strong visual hierarchy, typography, and clean layout systems.</p>
                </div>
              </div>

              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <div className="service-card">
                  <h3>Software Solutions</h3>
                  <p className="service-copy">Develop scalable, maintainable solutions that solve real problems and keep business goals top of mind.</p>
                </div>
              </div>

              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <div className="service-card">
                  <h3>Creative Branding</h3>
                  <p className="service-copy">Support brand identity with polished visuals, consistent style, and professional presentation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
