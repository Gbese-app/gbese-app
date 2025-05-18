import  { useState } from 'react'
import '../Enter.css'

const EnterPin = ({ onClose }: { onClose?: () => void }) => {
  const [pin, setPin] = useState(['', '', '', '']);

  const handlePinChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < 3) {
        const nextInput = document.getElementById(`pin-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handlePayment = () => {
    const pinValue = pin.join('');
    if (pinValue.length === 4) {
      console.log('Payment initiated with PIN:', pinValue);
      if (onClose) onClose();
    } else {
      alert('Please enter a 4-digit PIN');
    }
  };

  return (
    <div className="pin-container">
      <div className="pin-card">
        <div className="pin-header">
          <h2 className="pin-title">Enter PIN</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
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
              id={`pin-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handlePinChange(index, e.target.value)}
              className="pin-box"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="details-section">
          <div className="detail-row">
            <span className="detail-label">Bank</span>
            <span className="detail-value">GTBank</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Account Number</span>
            <span className="detail-value">22839632637</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span className="detail-value">Francis Edwin</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Amount</span>
            <span className="detail-value">100,000</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Narration</span>
            <span className="detail-value">Rent</span>
          </div>
        </div>

        <button className="payment-button" onClick={handlePayment}>
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default EnterPin;