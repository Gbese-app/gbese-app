import { Link } from 'react-router-dom';
import "../LandingPage.css";

// Importing individual sections/components
import WorksPage from "./WorksPage";
import WhyChoose from "./WhyChoose";
import GbeAdventure from "./GbeAdventure";
import GbeQuestions from "./GbeQuestions";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar with anchor links */}
      <header className="navbar">
        <img
          className="logo"
          src="/src/assets/Logo Dark BG.png"
          alt="Gbese Logo"
        />
        <nav className="nav-links">
          {/* Add href links to navigate to specific sections */}
          <a href="#works-page">About Us</a>
          <a href="#footer">Contact</a>
          <a href="#footer">FAQ's</a>
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
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Shift Debt Like a Pro<br />No Bank Stress, No Wahala!</h1>
        <p>
          GBESE lets you transfer loans to willing helpers, negotiate better
          terms, earn and exchange crypto rewards and breathe easy.
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
        <img
          src="/src/assets/gbese-app-screenshot1.png"
          alt="Gbese App Screenshot"
        />
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
      <section className="gbe-questions">
        <GbeQuestions />
      </section>

      {/* Footer Section */}
      <footer id="footer" className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
