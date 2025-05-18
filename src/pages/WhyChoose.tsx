import { Link } from 'react-router-dom'
import '../WhyChoose.css'

const WhyChooseGbe = () => {
  return (
    <div className="why-container">
      <h1 className="why-heading">Why Choose Gbese?</h1>
      <p className="why-subheading">
        One app to manage, repay, transfer, and stay on top of your debt game – with ease and style.
      </p>

      <div className="why-content-wrapper">
        {/* Left Section */}
        <div className="chart-section">
          <h3 className="chart-title">How Gbese Members Are Thriving:</h3>
<img src="https://raw.githubusercontent.com/Gbese-app/gbese-app/main/image.png" alt="Gbese Members Thriving" className="chart-image" />
        </div>

        {/* Right Section */}
        <div className="features-section">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h4 className="feature-title">Debt Made Simple</h4>
            <p className="feature-description">
              Track your debt, set reminders, and automate payments. No drama, no long talk.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h4 className="feature-title">Transfer Debts</h4>
            <p className="feature-description">
              Need help paying? Let someone else cover you, with their consent. Stay accountable
              without the pressure.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h4 className="feature-title">Built for Trust</h4>
            <p className="feature-description">
              Use cash or crypto; your choice. Smart contracts keep repayments secure on-chain when
              you want extra peace of mind.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h4 className="feature-title">Earn While You Help</h4>
            <p className="feature-description">
              Every good gbeṣe deed earns you XP. Transfer debts, pay on time, help others, then
              watch your rewards rack up.
            </p>
          </div>

          <Link to="/sign-up">
            <button className="cta-button">Join Gbese Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseGbe
