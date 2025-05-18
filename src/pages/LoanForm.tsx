import { useState } from 'react'
import '../LoanForm.css'

const LoanForm: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number | string>('')
  const [purpose, setPurpose] = useState<string>('')
  const [employmentStatus, setEmploymentStatus] = useState<string>('')
  const [incomeRange, setIncomeRange] = useState<string>('')
  const [wallet, setWallet] = useState<string>('Gbese Pay Wallet')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    switch (name) {
      case 'loanAmount':
        setLoanAmount(value)
        break
      case 'purpose':
        setPurpose(value)
        break
      case 'employmentStatus':
        setEmploymentStatus(value)
        break
      case 'incomeRange':
        setIncomeRange(value)
        break
      case 'wallet':
        setWallet(value)
        break
      default:
        break
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!loanAmount || !purpose || !employmentStatus || !incomeRange) {
      setErrorMessage('Please fill out all required fields.')
      setSuccessMessage('')
      return
    }

    // Assuming the form is valid, display a success message
    setSuccessMessage('Your loan application has been successfully submitted! 🎉')
    setErrorMessage('')

    // Reset the form after 3 seconds
    setTimeout(() => {
      setLoanAmount('')
      setPurpose('')
      setEmploymentStatus('')
      setIncomeRange('')
      setWallet('Gbese Pay Wallet')
      setSuccessMessage('')
    }, 3000) // 3 seconds delay

    console.log({
      loanAmount,
      purpose,
      employmentStatus,
      incomeRange,
      wallet,
    })
  }

  return (
    <div className="loan-container">
      <div className="loan-header">
        <h1>
          Almost There, Boss!{' '}
          <span role="img" aria-label="emoji">
            😎
          </span>
        </h1>
        <p>Let’s Set You Up!</p>
      </div>

      <div className="loan-form-card">
        <h2>Instant Loan Approval System</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form className="loan-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Amount (₦)</label>
            <input
              type="number"
              name="loanAmount"
              value={loanAmount}
              onChange={handleInputChange}
              placeholder="Enter loan amount"
            />
          </div>

          <div className="form-group">
            <label>Purpose</label>
            <input
              type="text"
              name="purpose"
              value={purpose}
              onChange={handleInputChange}
              placeholder="Purpose of loan"
            />
          </div>

          <div className="form-group">
            <label>Employment Status</label>
            <select
              name="employmentStatus"
              value={employmentStatus}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select employment status</option>
              <option>Employed</option>
              <option>Self-Employed</option>
              <option>Unemployed</option>
              <option>Freelancer</option>
              <option>Student</option>
            </select>
          </div>

          <div className="form-group">
            <label>Income Range</label>
            <select
              name="incomeRange"
              value={incomeRange}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Monthly Income Range (₦)</option>
              <option>₦0 - ₦50,000</option>
              <option>₦50,001 - ₦100,000</option>
              <option>₦100,001 - ₦200,000</option>
              <option>₦200,001 - ₦500,000</option>
              <option>₦250,001 - ₦500,000</option>
              <option>₦500,001 - ₦1,000,000</option>
              <option>Above ₦1,000,000</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Wallet</label>
            <select
              name="wallet"
              value={wallet}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Gbese Pay Wallet</option>
            </select>
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  )
}

export default LoanForm
