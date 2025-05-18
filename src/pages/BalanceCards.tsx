import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import '../DebtRequest.css'

interface BalanceCardsProps {
  availableBalance?: number;
  walletBalance?: number;
}

const BalanceCards = ({
  availableBalance = 500000,
  walletBalance = 50000,
}: BalanceCardsProps) => {
  const [showBalance, setShowBalance] = useState(true);

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
          <>
          <h1 className="page-title">Debt Requests</h1>
      <p className="page-subtitle">
        See debt for your friend hand? Help am throw am away!
      </p>
    <div className="balance-cards">
      <div className="balance-card">
        <div className="balance-card-header">
          Available Balance
          <button onClick={toggleShowBalance}>
            {showBalance ? <Eye className="icon" /> : <EyeOff className="icon" />}
          </button>
        </div>
        <div className="balance-card-amount">
          {showBalance ? `₦${(availableBalance ?? 0).toLocaleString()}` : '••••••••'}
        </div>
      </div>
      <div className="balance-card">
        <div className="balance-card-header">Wallet</div>
        <div className="balance-card-amount">
          {showBalance ? `₦${(walletBalance ?? 0).toLocaleString()}` : '••••••••'}
        </div>
      </div>
    </div>

          </>  );
};

export default BalanceCards;
