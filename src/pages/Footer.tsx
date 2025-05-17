
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container as React.CSSProperties}>
        {/* Column 1: Logo and Social Media */}
        <div style={styles.column}>
          <div style={styles.logo}>Gbese</div> {/* Replace with actual logo */}
          <p style={styles.tagline}>No Carry Debt Alone – Join Our Squad!</p>
          <div style={styles.socialIcons}>
            <span style={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 512 512">
	<path fill="#fff" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
</svg></span> {/* Replace with actual icon */}
            <span style={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
	<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
</svg></span> {/* Replace with actual icon */}
            <span style={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
	<path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277" />
</svg></span> {/* Replace with actual icon */}
            <span style={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
	<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#fff">
		<path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
		<path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
	</g>
</svg></span> {/* Replace with actual icon */}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle as React.CSSProperties}>Quick Links</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Product</li>
            <li style={styles.listItem}>Company</li>
            <li style={styles.listItem}>Web 3</li>
            <li style={styles.listItem}>Legal</li>
          </ul>
        </div>

        {/* Column 3: Trust & Social Proof */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle as React.CSSProperties}>Trust & Social Proof</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Badges</li>
            <li style={styles.listItem}>Testimonial</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle as React.CSSProperties}>Contact</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>Lagos, Nigeria</li>
            <li style={styles.listItem}>+234 800 GBESE</li>
            <li style={styles.listItem}>hello@gbese.com</li>
          </ul>
        </div>

        {/* Column 5: Newsletter */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle as React.CSSProperties}>Newsletter</h4>
          <p style={styles.newsletterText}>
            No Miss Update Again! Subscribe for GBESE Gist & Quick Loans.
          </p>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Email Address"
              style={styles.input}
            />
            <button type="submit" style={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
    <div style={styles.copyright as React.CSSProperties}>
        <p style={styles.copyrightText}>
          Copyright 2025 | gbese.com <br /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Inline styles
const styles = {
  footer: {
    backgroundColor: 'rgb(2, 19, 70)',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  tagline: {
    fontSize: '14px',
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  columnTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textTransform: 'uppercase',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  newsletterText: {
    fontSize: '14px',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '14px',
    flex: '1',
  },
  subscribeButton: {
    backgroundColor: '#fff',
    color: '#1a3c5e',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  copyright: {
    textAlign: 'center',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  copyrightText: {
    fontSize: '12px',
    margin: 0,
    lineHeight: '1.5',
  },
};

export default Footer;