import { useState, useCallback, useEffect } from 'react'
import '../Enter.css'

interface EnterPinProps {
  onClose?: () => void;
  onPaymentSuccess?: (status: 'success' | 'declined') => void;
  name: string;
  amount: string;
  narration: string;
  bank: string;
  accountNumber: string;
  modalId: string;
}

const EnterPin = ({ onClose, onPaymentSuccess, name, amount, narration, bank, accountNumber, modalId }: EnterPinProps) => {
  const [pin, setPin] = useState(['', '', '', '']);

  useEffect(() => {
    console.log(`EnterPin[${modalId}] rendered:`, { name, amount, narration, bank, accountNumber });
    setPin(['', '', '', '']);
    return () => console.log(`EnterPin[${modalId}] unmounted`);
  }, [name, amount, narration, bank, accountNumber, modalId]);

  const handlePinChange = useCallback((index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < 3) {
        const nextInput = document.getElementById(`pin-input-${index + 1}-${modalId}`);
        nextInput?.focus();
      }
    }
  }, [pin, modalId]);

  const handlePayment = useCallback(() => {
    console.log(`EnterPin[${modalId}] handlePayment called`);
    const pinValue = pin.join('');
    if (pinValue.length === 4) {
      console.log(`EnterPin[${modalId}] Payment initiated with PIN:`, pinValue);
      if (onPaymentSuccess) onPaymentSuccess('success');
    } else {
      alert('Please enter a 4-digit PIN');
    }
  }, [pin, onPaymentSuccess, modalId]);

  const handleClose = useCallback(() => {
    console.log(`EnterPin[${modalId}] handleClose called`);
    setPin(['', '', '', '']);
    if (onClose) onClose();
  }, [onClose, modalId]);

  return (
    <div className="pin-container">
      <div className="pin-card">
        <div className="pin-header">
          <h2 className="pin-title">Enter PIN</h2>
          <button className="close-btn" onClick={handleClose} aria-label="Close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              />
            </svg>
          </button>
        </div>

        <div className="pin-input-section">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-input-${index}-${modalId}`}
              type="password"
              maxLength={1}
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value)}
              className="pin-box"
              autoFocus={index === 0}
              aria-label={`PIN digit ${index + 1}`}
            />
          ))}
        </div>

        <div className="details-section">
          <div className="detail-row"><span className="detail-label">Bank</span><span className="detail-value">{bank}</span></div>
          <div className="detail-row"><span className="detail-label">Account Number</span><span className="detail-value">{accountNumber}</span></div>
          <div className="detail-row"><span className="detail-label">Name</span><span className="detail-value">{name}</span></div>
          <div className="detail-row"><span className="detail-label">Amount</span><span className="detail-value">{amount}</span></div>
          <div className="detail-row"><span className="detail-label">Narration</span><span className="detail-value">{narration}</span></div>
        </div>

        <button className="payment-button" onClick={handlePayment}>
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default EnterPin;