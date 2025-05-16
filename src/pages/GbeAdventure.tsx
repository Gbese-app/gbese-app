import { Link } from 'react-router-dom';


const GbeAdventure = () => {
  return (
    <div style={styles.container}>
      {/* Heading and Subheading */}
      <h1 style={styles.heading}>Your Gbese Adventure Starts Here.</h1>
      <p style={styles.subheading}>
        Earn XP. Trade debt. Spin wheels. Collect NFTs. It’s debt; but make it fun.
      </p>

      {/* Feature Cards */}
      <div style={styles.featuresContainer}>
        {/* Rack up XPs */}
        <div style={styles.featureCard}>
          <div style={styles.icon}>🏆</div> {/* Replace with actual icon */}
          <h3 style={styles.featureTitle}>Rack up XPs</h3>
          <p style={styles.featureDescription}>
            Earn XP for every smart move. Debt transfers, and helping others.
          </p>
        </div>

        {/* Spin to Win */}
        <div style={styles.featureCard}>
          <div style={styles.icon}>🎡</div> {/* Replace with actual icon */}
          <h3 style={styles.featureTitle}>Spin to Win</h3>
          <p style={styles.featureDescription}>
            Use XP to spin the rewards wheel and unlock NFTs, perks, and fun surprises.
          </p>
        </div>

        {/* Badge Up */}
        <div style={styles.featureCard}>
          <div style={styles.icon}>🎖️</div> {/* Replace with actual icon */}
          <h3 style={styles.featureTitle}>Badge Up</h3>
          <p style={styles.featureDescription}>
            Show off profile badges that highlight your cred and activity in the community.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
        <Link to={'/sign-up'}>
        <button style={styles.ctaButton}>Get in, Let’s Go</button>

        </Link>
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
  featuresContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },
  featureCard: {
    maxWidth: '300px',
    backgroundColor: 'rgb(240, 245, 255)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '20px',
    color: '#1a3c5e',
    marginBottom: '10px',
  },
  featureDescription: {
    fontSize: '16px',
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
  },
};

export default GbeAdventure;