import { useState } from 'react'
import { Link } from 'react-router-dom'
import BalanceCards from './BalanceCards'
import '../DebtRequest.css'

interface DebtRequest {
  name: string;
  description: string;
  dueDate: string;
  amount: number;
}

const DebtRequests = () => {
  const [debtRequests, setDebtRequests] = useState<DebtRequest[]>([
    {
      name: 'Chukwuma Eric',
      description: 'Rent Balance - Shop Boutique',
      dueDate: '30th April, 2025',
      amount: 100000,
    },
    {
      name: 'Ewulu Kenechukwu',
      description: 'Decoder Installment - DSTV',
      dueDate: '30th April, 2025',
      amount: 100000,
    },
    {
      name: 'Okafor Ifeanyi',
      description: 'Mechanic Balance',
      dueDate: '30th April, 2025',
      amount: 100000,
    },
    {
      name: 'Francis Edwin',
      description: 'Medical Bills',
      dueDate: '30th April, 2025',
      amount: 150000,
    },
  ]);

  const handleDeclineRequest = (index: number) => {
    console.log('Decline request', index);
    setDebtRequests(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="page-container">
      <BalanceCards />
      {/* Debt Requests */}
      <div>
        <h2 className="section-title">Debt Requests</h2>
        <div className="space-y-6">
          {debtRequests.map((request, index) => (
            <div key={index} className="debt-contents"><hr/>
              <div className="debt-header">
                <div>
                  <h3 className="debt-name">{request.name}</h3>
                  <p className="debt-description">{request.description}</p>
                  <div className="debt-amount">₦{request.amount.toLocaleString()}</div>
                </div>
                <p className="debt-due">Due date: {request.dueDate}</p>
              </div>

              <div className="debt-btn">
                <Link to="/payment-form" state={{ debt: request }}>
                  <button className="accept-btn">
                    Accept Request
                  </button>
                </Link>
                <button
                  className="decline-btn"
                  onClick={() => handleDeclineRequest(index)}
                >
                  Decline Request
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DebtRequests;
