import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../layout/PageB.css';

const WithdrawFunds2 =() => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (location.state?.showPopup) {
      setShowPopup(true);
      const timer = setTimeout(() =>setShowPopup(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const [method, setMethod] = useState('bank');
  const [isPopupOpen, setIsPopupOpen] = useState(false); // ✅ Add this to fix the error

  const [formData, setFormData] = useState({
    amount: '',
    bankName: '',
    accountNumber: '',
    reason: '',
    attachDebt: false
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
     setIsPopupOpen(true); // ✅ Show popup on submit
  };
  const closePopup = () => setIsPopupOpen(false);
   useEffect(() => {
     console.log('Popup state updated:', isPopupOpen);
   }, [isPopupOpen]);
  
  const navigate = useNavigate();
  const handleMethodChange = (method: any) => {
    setMethod(method);
    if (method === 'bank') {
      navigate('/withdrawal');
    } else if (method === 'wallet') {
      navigate('/withdrawal/gbesepay-wallet');  // Navigate to the GbesePay Wallet page
    }
  }
  return (
    <div className="min-h-screen bg-[#f5f8ff] p-8" id="page-container">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Withdraw Your Funds</h1>
          <p className="text-gray-600">Cash out sharp sharp. Straight to your bank or wallet, no wahala!.</p>
        </div>

        {/* Wallet Balance Card */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Available Wallet Balance</p>
            <p className="text-3xl font-bold text-black">₦100,000</p>
            <button className="text-blue-600 text-sm mt-1">Fund Wallet</button>
          </div>
          <div>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h.01M12 12h.01M9 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
            </svg>
          </div>
        </div>

        {/* Withdrawal Method */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-1">Withdrawal Methods</h2>
          <p className="text-sm text-gray-500 mb-4">Choose where you want your gbese cash to land.</p>
          <div className="flex space-x-4">
            <button className={`px-4 py-2 w-full rounded border cursor-pointer ${method === 'bank' ? 'bg-blue-100 border-blue-600 text-blue-700 font-bold' : 'border-gray-300 text-black-600'}`} onClick={() => handleMethodChange('bank')}>Bank Account</button>
            <button className={`px-4 py-2 w-full rounded border cursor-pointer ${method === 'bank' ? 'bg-blue-100 border-blue-600 text-blue-700 font-bold' : 'border-gray-300 text-gray-600'}`}>GbesePay Wallet</button>
          </div>
        </div>

        {/* Withdrawal Details */}
        <form onSubmit={handleSubmit} action="">
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold text-lg">Withdrawal Details</h2>

          <div>
            <label className="block font-medium mb-1">Amount (₦)</label>
            <input type="number" name="amount"
            value={formData.amount}  onChange={handleInputChange} placeholder="Enter Amount." required className="w-full px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <label className="block font-medium mb-1">Wallet Address</label>
            <input type="text" name="bankName"
            value={formData.bankName}  onChange={handleInputChange} placeholder="Enter wallet address" required className="w-full px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <label className="block font-medium mb-1">Network (ERC-20)</label>
            <input type="text"  onChange={handleInputChange} placeholder="ERC-20" disabled className="w-full px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <label className="block font-medium mb-1">Reason for withdrawal (Optional)</label>
            <input type="text" name="reason"
            value={formData.reason}  onChange={handleInputChange} placeholder="Enter reason for withdrawal" required className="w-full px-4 py-2 border rounded-lg" />
          </div>

          

          <button type="submit" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg cursor-pointer">Withdraw Now</button>
          
          {showPopup && (
            <div className="popup-overlay">
              <div className="flex popup-box w-60 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 2048 2048">
                  <path fill="#13BE41" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z" />
                </svg>
                <h3 className='font-bold text-center my-2'>Wallet Connected</h3>
                <p className='text-sm'>You're good to go. Withdraw your funds straight to your wallet anytime</p>
              </div>
            </div>
          )}
          <div className={`page-content ${showPopup ? 'blurred' : ''}`}>
            {/* Actual page */}
          </div>
        </div>
        </form>

        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4 text-[#1a1a1a]">Recent Withdrawals</h2>
          <div className="overflow-auto">
            <table className="min-w-full text-left bg-white rounded-xl shadow text-sm">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Method</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4">John Smith</td>
                  <td className="px-6 py-4">14/04/2025</td>
                  <td className="px-6 py-4">₦20,000</td>
                  <td className="px-6 py-4 text-orange-500">Pending</td>
                  <td className="px-6 py-4">Gbesepay</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Jones Deborah</td>
                  <td className="px-6 py-4">19/04/2025</td>
                  <td className="px-6 py-4">₦20,000</td>
                  <td className="px-6 py-4 text-green-600">Successful</td>
                  <td className="px-6 py-4">Transfer</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4">Abby Grace</td>
                  <td className="px-6 py-4">22/04/2025</td>
                  <td className="px-6 py-4">₦20,000</td>
                  <td className="px-6 py-4 text-red-500">Rejected</td>
                  <td className="px-6 py-4">GbesePay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl relative w-full max-w-md">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-400 hover:text-gray-700"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-green-600 text-5xl mb-2">✅</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Withdrawal successful</h2>
              <div className="text-left space-y-2 text-sm">
              <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Amount:</span>
                  <span>₦{Number(formData.amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Wallet Address</span>
                  <span>{formData.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Reason:</span>
                  <span>{formData.reason}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Withdrawals Table */}
      <div className="bg-white p-4 rounded shadow">
        <p className="font-semibold mb-3">Recent Withdrawals</p>
        <table className="w-full text-sm">
          <thead className="text-left border-b">
            <tr>
              <th className="py-2">Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Method</th>
            </tr>
          </thead>
          
        </table>
      </div>
    </div>
  );
};

export default WithdrawFunds2;