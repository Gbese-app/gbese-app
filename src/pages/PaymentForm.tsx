import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BalanceCards from './BalanceCards'
import DebtRequest from './RequestCard'
import PaymentResult from './PaymentResult'
import '../PaymentForm.css'

const PaymentForm = () => {
  const location = useLocation();
  const debt = location.state?.debt || {};

  const [formData, setFormData] = useState({
    amount: '',
    narration: '',
    method: '',
    attachDebt: false,
  });

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'declined'>('success');

  useEffect(() => {
    console.log('PaymentForm rendered:', { debt, formData });
  }, [debt, formData]);

  console.log("this is debt")
  console.log(debt);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('PaymentForm: Form submitted', formData);
    setShowRequestModal(true);
  };

  const handleCloseRequestModal = () => {
    console.log('PaymentForm: Closing DebtRequest modal');
    setShowRequestModal(false);
  };

  const handlePaymentComplete = (status: 'success' | 'declined') => {
    console.log('PaymentForm: Payment complete with status', status);
    setShowRequestModal(false);
    setPaymentStatus(status);
    setShowResultModal(true);
  };

  const handleCloseResultModal = () => {
    console.log('PaymentForm: Closing PaymentResult modal');
    setShowResultModal(false);
  };

  return (
    <div className="app-container">
      <BalanceCards />

      <div className="recipient-card">
        <div className="recipient-details">
          <div>
            <h3 className="recipient-name">{debt.name || 'N/A'}</h3>
            <p className="recipient-desc">{debt.description || 'No description'}</p>
            <div className="recipient-amount">
              ₦{parseInt(debt.amount || '0').toLocaleString()}
            </div>
          </div>
          <div className="recipient-info">
            <p className="due-date">Due date: {debt.dueDate || 'N/A'}</p>
            <p className="bank-info">22839632637 - GTBank</p>
          </div>
        </div>
      </div>

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

      {showRequestModal && (
        <DebtRequest
          modalId="debt-request-1"
          name={debt.name || 'Francis Edwin'}
          amount={formData.amount ? `₦${Number(formData.amount).toLocaleString()}` : '₦0'}
          narration={formData.narration || 'N/A'}
          bank="GTBank"
          accountNumber="22839632637"
          onClose={handleCloseRequestModal}
          onPaymentComplete={handlePaymentComplete}
        />
      )}

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