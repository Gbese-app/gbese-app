import React from 'react';
import '../LoanForm.css'; 

const LoanForm: React.FC = () => {
  return (
    <div className="loan-container">
      <div className="loan-header">
        <h1>Almost There, Boss! <span role="img" aria-label="emoji">😎</span></h1>
        <p>Let’s Set You Up!</p>
      </div>

      <div className="loan-form-card">
        <h2>Instant Loan Approval System</h2>
        <form className="loan-form">
          <div className="form-group">
            <label>Amount (₦)</label>
            <input type="number" placeholder="Enter loan amount" />
          </div>

          <div className="form-group">
            <label>Purpose</label>
            <input type="text" placeholder="Purpose of loan" />
          </div>

          <div className="form-group">
            <label>Employment Status</label>
            <select>
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
            <select>
            <option>Montly Income Range (₦)</option>
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
            <select>
              <option>Select Wallet</option>
              <option>Gbese Pay Wallet</option>
            </select>
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default LoanForm;