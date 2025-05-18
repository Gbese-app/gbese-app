import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import BalanceCards from './BalanceCards'
import DebtRequest from './RequestCard'
import EnterPin from './EnterPin'
import PaymentResult from './PaymentResult';
import '../PaymentForm.css'

const PaymentForm = () => {
  const location = useLocation();
  const debt = location.state?.debt || {};

  const [formData, setFormData] = useState({
    amount: '',
    narration: '',
    method: '',
    attachDebt: false
  });

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showEnterPin, setShowEnterPin] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false); // Result modal visibility
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'declined'>('success'); // Payment status

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowRequestModal(true);
  };

  const handleMakePayment = () => {
    setShowRequestModal(false);
    setShowEnterPin(true);
  };

  const handleCloseEnterPin = (status: 'success' | 'declined' = 'success') => {
    setShowEnterPin(false);
    setPaymentStatus(status);
    setShowResultModal(true);
  };

  const handleCloseResultModal = () => {
    setShowResultModal(false);
  };

  return (
    <div className="app-container">
      <BalanceCards />

      {/* Recipient Summary */}
      <div className="recipient-card">
        <div className="recipient-details">
          <div>
            <h3 className="recipient-name">{debt.name}</h3>
            <p className="recipient-desc">{debt.description}</p>
            <div className="recipient-amount">
              ₦{parseInt(debt.amount || '0').toLocaleString()}
            </div>
          </div>
          <div className="recipient-info">
            <p className="due-date">Due date: {debt.dueDate}</p>
            <p className="bank-info">22839632637 - GTBank</p>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="payment-card">
        <h2 className="payment-title">Details</h2>

        <div className="form-group">
          <div className="form-field">
            <label className="form-label">Amount (₦)</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Narration</label>
            <input
              type="text"
              name="narration"
              value={formData.narration}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Payment Method</label>
            <select
              name="method"
              value={formData.method}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="" disabled>Select a payment method</option>
              <option value="bank">Bank Transfer</option>
              <option value="card">Credit/Debit Card</option>
              <option value="wallet">Wallet</option>
            </select>
          </div>

          <div className="form-field checkbox-group">
            <input
              type="checkbox"
              name="attachDebt"
              checked={formData.attachDebt}
              onChange={handleInputChange}
              className="checkbox-input"
            />
            <label className="checkbox-label">Attach debt obligations</label>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Confirm Payment
            </button>
          </div>
        </div>
      </form>

      {/* DebtRequest Modal */}
      {showRequestModal && (
        <DebtRequest
          name={debt.name || 'Francis Edwin'}
          amount={`₦${Number(formData.amount || 0).toLocaleString()}`}
          narration={formData.narration || 'N/A'}
          bank="GTBank"
          accountNumber="22839632637"
          onClose={handleMakePayment}
        />
      )}

      {/* Inline EnterPin Display */}
      {showEnterPin && (
        <div style={{ marginTop: '2rem' }}>
          <EnterPin onClose={handleCloseEnterPin} />
        </div>
      )}

      {/* Payment Result Modal */}
      {showResultModal && (
        <PaymentResult
          status={paymentStatus}
          onClose={handleCloseResultModal}
        />
      )}
    </div>
  );
};

export default PaymentForm;
