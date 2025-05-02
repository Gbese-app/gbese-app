import '../MyDebt.css';

function MyDebts() {
  return (
    <div className='app-container'>
      <section className="how-it-works">
        <h2>How Debt Shuffle works</h2>
        <p>The Debt Shuffle is a unique community-driven debt redistribution program designed to help participants manage and potentially reduce their debt through collective support.</p>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="icon-blue">
                <path fill="currentColor" fillRule="evenodd" d="M17.297 6.572c-.41 0-.75-.34-.75-.75V4.598c-.774-.026-1.683-.026-2.75-.026h-2c-1.068 0-1.976 0-2.75.026v1.224c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.706c-.945.123-1.594.36-2.05.816c-.602.602-.822 1.54-.903 3.05H21c-.081-1.51-.302-2.448-.903-3.05c-.456-.456-1.105-.693-2.05-.816v1.116c0 .41-.34.75-.75.75m3.744 3.5q.008.793.006 1.75v1c0 .41.34.75.75.75s.75-.34.75-.75v-1c0-3.98 0-5.97-1.39-7.36c-.772-.772-1.73-1.115-3.11-1.268v-.872c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.775c-.796-.025-1.705-.025-2.75-.025h-2c-1.046 0-1.954 0-2.75.025v-.775c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.872c-1.38.153-2.338.496-3.11 1.268c-1.39 1.39-1.39 3.39-1.39 7.36v2c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-2q-.001-.956.005-1.75zm-3.244 13c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75m0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25m.47 4.78c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.78-.78v-1.69c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .2.08.39.22.53z" color="currentColor"></path>
              </svg>
            </div>
            <div className="feature-details">
              <h3>Monthly Shuffle</h3>
              <p>Next shuffle occurs on Apr 30, 2025. Participate by selecting your debts.</p>
            </div>
          </div>
          <div>
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="icon-green">
                <path fill="currentColor" fillRule="evenodd" d="M17.297 6.572c-.41 0-.75-.34-.75-.75V4.598c-.774-.026-1.683-.026-2.75-.026h-2c-1.068 0-1.976 0-2.75.026v1.224c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.706c-.945.123-1.594.36-2.05.816c-.602.602-.822 1.54-.903 3.05H21c-.081-1.51-.302-2.448-.903-3.05c-.456-.456-1.105-.693-2.05-.816v1.116c0 .41-.34.75-.75.75m3.744 3.5q.008.793.006 1.75v1c0 .41.34.75.75.75s.75-.34.75-.75v-1c0-3.98 0-5.97-1.39-7.36c-.772-.772-1.73-1.115-3.11-1.268v-.872c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.775c-.796-.025-1.705-.025-2.75-.025h-2c-1.046 0-1.954 0-2.75.025v-.775c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.872c-1.38.153-2.338.496-3.11 1.268c-1.39 1.39-1.39 3.39-1.39 7.36v2c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-2q-.001-.956.005-1.75zm-3.244 13c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75m0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25m.47 4.78c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.78-.78v-1.69c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .2.08.39.22.53z" color="currentColor"></path>
              </svg>
            </div>
            <div className="feature-details">
              <h3>Potential Benefits</h3>
              <p>Possible debt reduction of 5-15% and improved Wealth Redistribution Index.</p>
            </div>
          </div>
          <div>
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="icon-yellow">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                  <path d="m18 14l4 4l-4 4m0-20l4 4l-4 4"></path>
                  <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path>
                </g>
              </svg>
            </div>
            <div className="feature-details">
              <h3>How it works</h3>
              <p>Our algorithm redistributes debt among participants based on financial capacity.</p>
            </div>
          </div>
          <div>
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"  className="icon-teal">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                  <path d="m3 17l6-6l4 4l8-8"></path>
                  <path d="M17 7h4v4"></path>
                </g>
              </svg>
            </div>
            <div className="feature-details">
              <h3>Track Results</h3>
              <p>Monitor your shuffle history to see the impact on your overall debt.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="your-statistics">
        <h2>Your Shuffle Statistics</h2>
        <div className="statistics-grid">
          <div className="statistic-card">
            <h3>Total Debt Shuffled</h3>
            <p>₦ 200,000</p>
          </div>
          <div className="statistic-card">
            <h3>Total Received</h3>
            <p>₦ 50,000</p>
          </div>
          <div className="statistic-card">
            <h3>Net Impact</h3>
            <p className='net-impact-value'>₦ 5,000</p>
          </div>
          <div className="statistic-card">
            <h3>Participation</h3>
            <p>2 months</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyDebts;
