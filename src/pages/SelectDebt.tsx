import '../SelectDebt.css'

const debts = [
  {
    title: 'Rent Balance - Lekki Apartment',
    amount: '₦200,000',
    dueDate: '15th April, 2025',
    mpr: '8%',
    mprColor: '#ffe5b4',
    mprTextColor: '#ff9900',
  },
  {
    title: 'Smart Phone Installment - Tecno',
    amount: '₦100,000',
    dueDate: '15th April, 2025',
    mpr: '2%',
    mprColor: '#e0fff4',
    mprTextColor: '#0f9d58',
  },
  {
    title: 'Car Loan',
    amount: '₦1,000,000',
    dueDate: '15th April, 2025',
    mpr: '2%',
    mprColor: '#ffe5e5',
    mprTextColor: '#d93025',
  },
]

function SelectDebt() {
  return (
    <div className="select-debt-page">
      <div className="title-and-button-container items-center my-8">
        <h2 className="select-title">Select Debt for Next Shuffle</h2>
        <button className="shuffle-btn" disabled>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="icon-yellow"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="m18 14l4 4l-4 4m0-20l4 4l-4 4"></path>
              <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22M2 6h1.972a4 4 0 0 1 3.6 2.2M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path>
            </g>
          </svg>
          <span className="shuffle-text">Shuffle Selected Debt</span>
        </button>
      </div>
      <div className="debt-card-grid">
        {debts.map((debt, idx) => (
          <div className="debt-card" key={idx}>
            <h3>{debt.title}</h3>
            <p className="debt-amount">{debt.amount}</p>
            <p className="due-date">Due date: {debt.dueDate}</p>
            <span
              className="mpr-tag"
              style={{
                backgroundColor: debt.mprColor,
                color: debt.mprTextColor,
              }}
            >
              {debt.mpr} MPR
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectDebt
