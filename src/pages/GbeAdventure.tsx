import { Link } from 'react-router-dom';
import '../GbeAdventure.css';

const GbeAdventure = () => {
  return (
    <div className="gbe-container">
      <h1 className="gbe-heading">Your Gbese Adventure Starts Here.</h1>
      <p className="gbe-subheading">
        Earn XP. Trade debt. Spin wheels. Collect NFTs. It’s debt; but make it fun.
      </p>

      <div className="features-container">
        <div className="feature-card">
          <div className="icon">🏆</div>
          <h3 className="feature-title">Rack up XPs</h3>
          <p className="feature-description">
            Earn XP for every smart move. Debt transfers, and helping others.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🎡</div>
          <h3 className="feature-title">Spin to Win</h3>
          <p className="feature-description">
            Use XP to spin the rewards wheel and unlock NFTs, perks, and fun surprises.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🎖️</div>
          <h3 className="feature-title">Badge Up</h3>
          <p className="feature-description">
            Show off profile badges that highlight your cred and activity in the community.
          </p>
        </div>
      </div>

      <Link to="/sign-up">
        <button className="cta-button">Get in, Let’s Go</button>
      </Link>
    </div>
  );
};

export default GbeAdventure;
