import '../PaymentResults.css'

interface PaymentResultModalProps {
  status: 'success' | 'declined'
  onClose?: () => void;
}

const PaymentResult = ({ status, onClose }: PaymentResultModalProps) => {
  const isSuccess = status === 'success';

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close-btnn" onClick={onClose} aria-label="Close">
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
        <div className="modal-content">
          <div className={isSuccess ? 'success-icon' : 'declined-icon'}>
            {isSuccess ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e40af"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            )}
          </div>
          <h2 className="modal-title">
            {isSuccess ? 'Payment Successful' : 'Request Declined'}
          </h2>
          <p className="modal-subtitle">
            {isSuccess
              ? 'Na Boss you be!'
              : 'Sorry, I no fit handle this one now.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentResult;