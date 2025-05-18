import '../RequestCard.css'

interface DebtRequestProps {
  name: string;
  amount: string;
  narration: string;
  bank: string;
  accountNumber: string;
  onClose?: () => void;
}
const DebtRequest = ({ name, amount, narration, bank, accountNumber, onClose }: DebtRequestProps) => {
  return (
    <div className="request-modal-overlay">
      <div className="debt-container modal-card">
        <div className="debt-header">
          <h2 className="debt-title">Debt Request</h2>
          {onClose && (
            <button className="close-btn" onClick={onClose} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
                <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" />
              </svg>
            </button>
          )}
        </div>

        <div className="balance-section">
          <span className="balance-label">Available balance</span>
          <div className="balance-amount">₦300,000</div>
        </div>

        <div className="details-section">
          <div className="detail-row"><span className="detail-label">Bank</span><span className="detail-value">{bank}</span></div>
          <div className="detail-row"><span className="detail-label">Account Number</span><span className="detail-value">{accountNumber}</span></div>
          <div className="detail-row"><span className="detail-label">Name</span><span className="detail-value">{name}</span></div>
          <div className="detail-row"><span className="detail-label">Amount</span><span className="detail-value">{amount}</span></div>
          <div className="detail-row"><span className="detail-label">Narration</span><span className="detail-value">{narration}</span></div>
        </div>

        <button className="payment-button" onClick={onClose}>
          Make Payment
        </button>
      </div>
    </div>
  );
};


export default DebtRequest;
