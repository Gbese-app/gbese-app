import { Link } from 'react-router-dom';



const WhyChooseGbe = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Why Choose Gbese?</h1>
      <p style={styles.subheading}>
        One app to manage, repay, transfer, and stay on top of your debt game – with ease and style.
      </p>

      <div style={styles.contentWrapper}>
        {/* Left Section: Replaced Chart with Image */}
        <div style={styles.chartSection}>
          <h3 style={styles.chartTitle}>How Gbese Members Are Thriving:</h3>
          <img
            src="/src/assets/image.png" // Replace with the actual path to your image
            alt="Gbese Members Thriving"
            style={styles.image}
          />
        </div>

        {/* Right Section: Feature Cards */}
        <div style={styles.featuresSection}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>👤</div> {/* Replace with actual icon */}
            <h4 style={styles.featureTitle}>Debt Made Simple</h4>
            <p style={styles.featureDescription}>
              Track your debt, set reminders, and automate payments. No drama, no long talk.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔄</div> {/* Replace with actual icon */}
            <h4 style={styles.featureTitle}>Transfer Debts</h4>
            <p style={styles.featureDescription}>
              Need help paying? Let someone else cover you, with their consent. Stay accountable without the pressure.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🛡️</div> {/* Replace with actual icon */}
            <h4 style={styles.featureTitle}>Built for Trust</h4>
            <p style={styles.featureDescription}>
              Use cash or crypto; your choice. Smart contracts keep repayments secure on-chain when you want extra peace of mind.
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🏆</div> {/* Replace with actual icon */}
            <h4 style={styles.featureTitle}>Earn While You Help</h4>
            <p style={styles.featureDescription}>
              Every good gbeṣe deed earns you XP. Transfer debts, pay on time, help others, then watch your rewards rack up.
            </p>
          </div>
            <Link to={'/sign-up'}>
            <button style={styles.ctaButton}>Join Gbese Now</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f5f7fa',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '600',
    color: 'rgb(2, 19, 70)',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
    color: '#4a4a4a',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
  },
  chartSection: {
    maxWidth: '500px',
    backgroundColor: 'rgb(240, 245, 255)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  chartTitle: {
    fontSize: '20px',
    color: '#1a3c5e',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '75%',
    borderRadius: '10px',
  },
  featuresSection: {
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  featureCard: {
    backgroundColor: 'rgb(240, 245, 255)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
  featureIcon: {
    fontSize: '30px',
    marginBottom: '10px',
  },
  featureTitle: {
    fontSize: '18px',
    color: '#1a3c5e',
    marginBottom: '10px',
  },
  featureDescription: {
    fontSize: '14px',
    color: '#4a4a4a',
  },
  ctaButton: {
    backgroundColor: 'rgb(2, 19, 70)',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '400px',
  },
};

export default WhyChooseGbe;