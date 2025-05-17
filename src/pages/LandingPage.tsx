import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../LandingPage.css'

// Importing individual sections/components
import WorksPage from './WorksPage'
import WhyChoose from './WhyChoose'
import GbeAdventure from './GbeAdventure'
import GbeQuestions from './GbeQuestions'
import Footer from './Footer'

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className="landing-page">
      {/* Navbar with anchor links */}
      <header className="navbar">
        <img className="logo" src="/src/assets/Logo Dark BG.png" alt="Gbese Logo" />
        <button className="toggle-btn" onClick={toggleNav} aria-label="Toggle navigation">
          <span className={isNavOpen ? 'hamburger open' : 'hamburger'}></span>
        </button>
        <nav className="nav-links">
          <a href="#works-page" onClick={() => setIsNavOpen(false)}>
            About Us
          </a>
          <a href="#footer" onClick={() => setIsNavOpen(false)}>
            Contact
          </a>
          <a href="#faq" onClick={() => setIsNavOpen(false)}>
            FAQ's
          </a>
        </nav>
        <div className="auth-buttons">
          <div className="log-btn">
            <Link to={'/login'}>
              <button className="login-btn">Login</button>
            </Link>
          </div>
          <div className="sign">
            <Link to={'/sign-up'}>
              <button className="signup-btn">Sign Up</button>
            </Link>
          </div>
        </div>
        {/* Mobile menu for mobile view */}
        <div className={`mobile-menu ${isNavOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <a href="#works-page" onClick={() => setIsNavOpen(false)}>
              About Us
            </a>
            <a href="#footer" onClick={() => setIsNavOpen(false)}>
              Contact
            </a>
            <a href="#faq" onClick={() => setIsNavOpen(false)}>
              FAQ's
            </a>
          </nav>
          <div className="auth-buttons">
            <div className="log-btn">
              <Link to={'/login'}>
                <button className="login-btn">Login</button>
              </Link>
            </div>
            <div className="sign">
              <Link to={'/sign-up'}>
                <button className="signup-btn">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>
          Shift Debt Like a Pro
          <br />
          No Bank Stress, No Wahala!
        </h1>
        <p>
          GBESE lets you transfer loans to willing helpers, negotiate better terms, earn and
          exchange crypto rewards and breathe easy.
        </p>
        <div className="cta-wrapper">
          <Link to={'/sign-up'}>
            <button className="cta-button">Start Passing Debt Now</button>
          </Link>
          <div className="cta-glow-line"></div>
        </div>
      </section>

      {/* App Screenshot */}
      <div className="app-screenshot">
        <img src="/src/assets/gbese-app-screenshot1.png" alt="Gbese App Screenshot" />
      </div>

      {/* Works Page Section */}
      <section id="works-page" className="works-page">
        <WorksPage />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="why-choose">
        <WhyChoose />
      </section>

      {/* GbeAdventure Section */}
      <section className="gbe-adventure">
        <GbeAdventure />
      </section>

      {/* GbeQuestions Section */}
      <section id="faq" className="gbe-questions">
        <GbeQuestions />
      </section>

      {/* Footer Section */}
      <footer id="footer" className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default LandingPage
