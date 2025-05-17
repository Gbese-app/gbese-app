const HowGbeWorks = () => {
  return (
    <div style={styles.container as React.CSSProperties}>
      <h1 style={styles.heading}>How Gbese Works.</h1>
      <p style={styles.subheading}>
        From debt requests to repayments, Gbese makes every step simple, social, and secure. Here’s
        how you stay in control.
      </p>

      <div style={styles.stepsContainer as React.CSSProperties}>
        <div style={styles.step as React.CSSProperties}>
          <div style={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52px"
              height="52px"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="#0735D2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="26"
                d="m53.12 199.94l400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06M460 52L227 285"
              />
            </svg>
          </div>
          <h3 style={styles.stepTitle}>Step 1: Start or Accept a Gbese</h3>
          <p style={styles.stepDescription}>
            Send or accept debt. Whether you’re owing or helping out, it begins with one simple
            agreement.
          </p>
        </div>

        <div style={styles.step as React.CSSProperties}>
          <div style={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="52px" height="52px" viewBox="0 0 24 24">
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#009B7D"
                  d="M20 14a1 1 0 0 1 .117 1.993L20 16H6.414l2.293 2.293a1 1 0 0 1-1.32 1.497l-.094-.083l-3.83-3.83c-.665-.664-.239-1.783.663-1.871L4.241 14zm-4.707-9.707a1 1 0 0 1 1.32-.083l.094.083l3.83 3.83c.665.664.239 1.783-.663 1.871l-.115.006H4a1 1 0 0 1-.117-1.993L4 8h13.586l-2.293-2.293a1 1 0 0 1 0-1.414"
                />
              </g>
            </svg>
          </div>
          <h3 style={styles.stepTitle}>Step 2: Transfer or Repay</h3>
          <p style={styles.stepDescription}>
            Need help? Shift the debt to someone else. Ready to pay back? Clear it in a tap.
          </p>
        </div>

        <div style={styles.step as React.CSSProperties}>
          <div style={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="52px" height="52px" viewBox="0 0 24 24">
              <path
                fill="#8743E2"
                d="M9.517 15.558L12 14.052l2.483 1.506l-.66-2.825l2.196-1.885l-2.886-.256L12 7.942l-1.133 2.65l-2.886.256l2.196 1.885zM12 21.916L9.073 19H5v-4.073L2.085 12L5 9.073V5h4.073L12 2.085L14.927 5H19v4.073L21.916 12L19 14.927V19h-4.073zm0-1.416l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18h3.5zm0-8.5"
              />
            </svg>
          </div>
          <h3 style={styles.stepTitle}>Step 3: Earn XP & Trust</h3>
          <p style={styles.stepDescription}>
            Make smart money moves, climb ranks, and unlock rewards in the community.
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f5f7fa',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '36px',
    fontWeight: '600',
    color: '#021346',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: '100',
    color: 'black',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
  step: {
    maxWidth: '300px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '40px',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    backgroundColor: '#e0f0ff',
  },
  stepTitle: {
    fontSize: '20px',
    color: 'black',
    fontWeight: '600',
    marginBottom: '10px',
  },
  stepDescription: {
    fontSize: '16px',
    color: '#4a4a4a',
  },

  // Mobile responsiveness
  '@media (max-width: 768px)': {
    container: {
      padding: '30px 15px',
    },
    heading: {
      fontSize: '28px',
    },
    subheading: {
      fontSize: '16px',
      maxWidth: '90%',
    },
    stepsContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px',
    },
    step: {
      maxWidth: '90%',
    },
    stepTitle: {
      fontSize: '18px',
    },
    stepDescription: {
      fontSize: '14px',
    },
    icon: {
      fontSize: '35px',
      width: '60px',
      height: '60px',
    },
  },

  // Extra Small Mobile responsiveness
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '24px',
    },
    subheading: {
      fontSize: '14px',
    },
    stepTitle: {
      fontSize: '16px',
    },
    stepDescription: {
      fontSize: '12px',
    },
    icon: {
      fontSize: '30px',
      width: '50px',
      height: '50px',
    },
  },
}

export default HowGbeWorks
