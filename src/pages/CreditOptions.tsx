import { Link } from 'react-router-dom'
import '../CreditOptions.css'

const creditOptions = [
  {
    title: 'QuickCash',
    interest: '15%',
    terms: '30 days',
    minMax: '₦5,000 - ₦100,000',
  },
  {
    title: 'FlexiLoan',
    interest: '12%',
    terms: '90 days',
    minMax: '₦50,000 - ₦500,000',
  },
  {
    title: 'Chop Life Loan',
    interest: '18%',
    terms: '120 days',
    minMax: '₦500,000 - ₦5,000,000',
  },
  {
    title: 'QuickCash',
    interest: '15%',
    terms: '30 days',
    minMax: '₦5,000 - ₦100,000',
  },
  {
    title: 'FlexiLoan',
    interest: '12%',
    terms: '90 days',
    minMax: '₦50,000 - ₦500,000',
  },
]

const CreditOptions = () => {
  return (
    <div className="credit-options-container">
      <h2>Credit Options</h2>
      <p className="subtitle">Pick your credit. Compare, apply, cash out; na your move!</p>
      <div className="cards-grid">
        {creditOptions.map((option, index) => (
          <div className="credit-card" key={index}>
            <div className="icon-title">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6" />
                    <circle cx="16" cy="9" r="2.9" />
                    <circle cx="6" cy="5" r="3" />
                  </g>
                </svg>
              </div>
              <h3>{option.title}</h3>
            </div>
            <div className="card-details">
              <p>
                Interest rate <span className="bold">{option.interest}</span>
              </p>
              <p>
                Terms <span className="bold">{option.terms}</span>
              </p>
              <p>
                Min–Max <span className="bold">{option.minMax}</span>
              </p>
            </div>
            <button className="apply-btn">
              <Link to={'/credit/loanform'}>Apply Now</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreditOptions
