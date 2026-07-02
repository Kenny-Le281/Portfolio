import { Button, Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import profileImg from '../assets/profile-headshot.jpg'
import barbershopCase from '../assets/barbershop.png'
import memoryGameCase from '../assets/memory-game.avif'
import ecommerceStoreCase from '../assets/e-commerce.jpg'
import analyticsDashboardCase from '../assets/analytics-dashboard.avif'
import './Home.css'

function Home() {
  return (
    <>
      <Navbar expand="lg" className="pb-5">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mx-auto gap-5">
              <Nav.Link href="#" active>HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#workflows">WORKFLOWS</Nav.Link>
              <Nav.Link href="#case-studies">PROJECTS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section className="hero mx-auto my-5 mt-5" style={{ backgroundImage: `url(${heroImg})` }}>
          <div className="hero-overlay" />
          <Container>
            <Row className="align-items-center hero-content">
              <Col md={6}>
                <div className="hero-left">
                  <p className="hero-label">Software Developer</p>
                  <h1 className="hero-name">Kenny Le</h1>
                  <p className="hero-description">Developing reliable and scalable software solutions</p>
                  <div className="d-flex gap-3 mt-4">
                    <Button className="btn-about" variant="primary" href="#case-studies">
                      View Projects
                    </Button>
                    <Button variant="outline-light" href="#about">
                      About Me
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="about" className="about-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="about-text-panel">
                  <p className="section-label">About Me</p>
                  <h2 className="section-title">Hello, I'm Kenny.</h2>
                  <p className="section-text">
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
                <img src={profileImg} alt="Kenny Le" className="profile-image" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="workflows" className="work-section">
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
                  <p className="work-text">What am I building? Who is it for?</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">02</span>
                  <h3>Plan the layout</h3>
                  <p className="work-text">Sketch ideas (quick paper sketch first, then Figma). Decide structure (navbar, cards, etc.).</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">03</span>
                  <h3>Design the UI</h3>
                  <p className="work-text">Choose colors, fonts, spacing. Make it look clean and consistent.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">04</span>
                  <h3>Build it</h3>
                  <p className="work-text">Code it using React. Style it with Bootstrap and CSS.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">05</span>
                  <h3>Test & improve</h3>
                  <p className="work-text">Check responsiveness (mobile vs desktop). Fix spacing, alignment, usability issues.</p>
                </div>
              </div>
              <div className="col-sm-10 col-md-6">
                <div className="work-card">
                  <span className="work-step">06</span>
                  <h3>Iterate on feedback</h3>
                  <p className="work-text">Gather user feedback, refine the interface, and improve usability based on user input.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className="project-section">
          <div className="container">
            <div className="project-heading text-center mb-5">
              <p className="section-label">Case Studies</p>
              <h2 className="project-title">Projects I’m Building</h2>
            </div>

            <div className="row justify-content-center gx-4 gy-4">
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <a
                  href="https://seg-3125-assignment2-barbershop.vercel.app/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-card">
                    <img src={barbershopCase} alt="Barbershop" className="project-image" />
                    <div className="project-card-body">
                      <h3>FreshFade Studio</h3>
                      <p className="project-text">A user-focused barbershop booking experience with service selection, appointment scheduling, and shop details.</p>
                      <span className="coming-tag available-tag">Available</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <a
                  href="https://seg-3125-assignment3-memory-game.vercel.app/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-card">
                    <img src={memoryGameCase} alt="Memory Game" className="project-image" />
                    <div className="project-card-body">
                      <h3>Memory Game</h3>
                      <p className="project-text">A playful memory matching game with responsive design, animations, and polished user interactions.</p>
                      <span className="coming-tag available-tag">Available</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <a
                  href="https://seg-3125-assignment4-e-commerce.vercel.app/"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-card">
                    <img src={ecommerceStoreCase} alt="E-commerce Store" className="project-image" />
                    <div className="project-card-body">
                      <h3>E-commerce Store</h3>
                      <p className="project-text">A modern online storefront with product browsing, clean checkout flows, and strong visual merchandising.</p>
                      <span className="coming-tag available-tag">Available</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
                <Link to="/analytics" className="project-link">
                  <div className="project-card">
                    <img src={analyticsDashboardCase} alt="Analytics Dashboard" className="project-image" />
                    <div className="project-card-body">
                      <h3>Analytics Dashboard</h3>
                      <p className="project-text">A data-driven analytics site with clear charts, performance metrics, and easy-to-scan insights.</p>
                      <span className="coming-tag">Coming Soon</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
