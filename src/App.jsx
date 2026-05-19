import { Button, Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import heroImg from './assets/hero.jpg'
import profileImg from './assets/profile-headshot.jpg'
import bikeRepairCase from './assets/bike-repair-service.jpg'
import memoryGameCase from './assets/memory-game.avif'
import ecommerceStoreCase from './assets/e-commerce.jpg'
import analyticsDashboardCase from './assets/analytics-dashboard.avif'
import './App.css'

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" active>Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="hero-overlay" />
          <Container>
            <Row className="align-items-center hero-content">
              <Col md={6}>
                <div className="hero-left">
                  <p className="hero-eyebrow">Software Developer</p>
                  <h1 className="hero-name">Kenny Le</h1>
                  <p className="hero-sub">Designing clean digital experiences with clarity, confidence, and calm.</p>
                  <Button href="#about" className="hero-cta mt-4">About Me</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="about-section">
          <Container>
            <Row className="align-items-center gy-4">
              <Col lg={6}>
                <div className="about-text-panel">
                  <p className="section-label">About Me</p>
                  <h2 className="section-title">Hello, I'm Kenny.</h2>
                  <p className="section-copy">
                    I am a second-year Software Engineering student in the co-op program at the University of Ottawa. I am passionate about software development and enjoy building clean, efficient, and user-focused applications.
                  </p>

                  <p className="section-copy">
                    I have experience working in full-stack development, along with exposure to agentic workflows and internal developer platforms (IDPs). I enjoy exploring how modern software systems are built and how different tools and services work together to create scalable applications.
                  </p>

                  <p className="section-copy">
                    Outside of development, I enjoy playing sports such as tennis and soccer, which help me stay active and balanced.
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="about-photo-panel">
                  <img src={profileImg} alt="Kenny Le" className="profile-image" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="work-section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-xl-8 col-lg-10">
                <p className="section-label">How I Work</p>
                <h2 className="section-title">My Workflow as a UI/UX Designer</h2>
              </div>
            </div>
            <div className="row gx-4 gy-4 justify-content-center">
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">01</span>
                  <h3>Understand the problem</h3>
                  <p className="work-copy">What am I building? Who is it for?</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">02</span>
                  <h3>Plan the layout</h3>
                  <p className="work-copy">Sketch ideas (paper or Figma). Decide structure (navbar, cards, etc.).</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">03</span>
                  <h3>Design the UI</h3>
                  <p className="work-copy">Choose colors, fonts, spacing. Make it look clean and consistent.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">04</span>
                  <h3>Build it</h3>
                  <p className="work-copy">Code it using React. Style it with Bootstrap or CSS.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">05</span>
                  <h3>Test & improve</h3>
                  <p className="work-copy">Check responsiveness (mobile vs desktop). Fix spacing, alignment, usability issues.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">06</span>
                  <h3>Iterate on feedback</h3>
                  <p className="work-copy">Gather user feedback, refine the interface, and improve usability based on real-world input.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="services-heading text-center mb-5">
              <p className="services-label">Case Studies</p>
              <h2 className="services-title">Projects I’m Building</h2>
            </div>

            <div className="row justify-content-center gx-4 gy-4">
              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <a href="/bike-repair.html" className="case-link">
                  <div className="case-card">
                    <img src={bikeRepairCase} alt="Bike Repair Shop" className="case-image" />
                    <div className="case-card-body">
                      <h3>Bike Repair Shop</h3>
                      <p className="case-copy">A user-focused bike repair booking experience with service selection, appointment scheduling, and storefront details.</p>
                      <span className="coming-tag">Coming Soon</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <a href="/memory-game.html" className="case-link">
                  <div className="case-card">
                    <img src={memoryGameCase} alt="Memory Game" className="case-image" />
                    <div className="case-card-body">
                      <h3>Memory Game</h3>
                      <p className="case-copy">A playful memory matching game with responsive design, animations, and polished user interactions.</p>
                      <span className="coming-tag">Coming Soon</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <a href="/ecommerce-store.html" className="case-link">
                  <div className="case-card">
                    <img src={ecommerceStoreCase} alt="E-commerce Store" className="case-image" />
                    <div className="case-card-body">
                      <h3>E-commerce Store</h3>
                      <p className="case-copy">A modern online storefront with product browsing, clean checkout flows, and strong visual merchandising.</p>
                      <span className="coming-tag">Coming Soon</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <a href="/analytics-dashboard.html" className="case-link">
                  <div className="case-card">
                    <img src={analyticsDashboardCase} alt="Analytics Dashboard" className="case-image" />
                    <div className="case-card-body">
                      <h3>Analytics Dashboard</h3>
                      <p className="case-copy">A data-driven analytics site with clear charts, performance metrics, and easy-to-scan insights.</p>
                      <span className="coming-tag">Coming Soon</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
