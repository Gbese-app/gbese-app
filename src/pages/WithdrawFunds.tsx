import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWithdrawalMutation } from '../services/mutation';
import { IWithdrawFunds } from '../types/general';

const WithdrawFunds =() => {
  const recentWithdrawals = [
    { name: 'John Smith', date: '14/04/2025', amount: '₦20,000', status: 'Pending', method: 'Gbesepay' },
    { name: 'Jones Deborah', date: '19/04/2025', amount: '₦20,000', status: 'Successful', method: 'Transfer' },
    { name: 'Abby Grace', date: '22/04/2025', amount: '₦20,000', status: 'Rejected', method: 'GbesePay' }
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [method, setMethod] = useState('bank');
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
    
    const info: IWithdrawFunds = {
      amount: parseInt(formData.amount),
      bankCode: formData.bankName,
      accountNumber: formData.accountNumber
    }
    withdrawalData(info)
    // setIsPopupOpen(true); // ✅ Show popup on submit
  };

  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    console.log('Popup state updated:', isPopupOpen);
  }, [isPopupOpen]);
  
  const { mutate: withdrawalData } = useWithdrawalMutation()

  const handleMethodChange = (method: any) => {
    setMethod(method);
    if (method === 'bank') {
      navigate('/withdrawal');  // Navigate to the Bank Account page
    } else if (method === 'wallet') {
      navigate('/withdrawal/gbesepay-wallet');  // Navigate to the GbesePay Wallet page
    }
  };

  return (
    <div className="p-9 bg-blue-50 min-h-screen text-gray-800">
      <h1 className="text-2xl font-bold text-blue-900 mb-1">Withdraw Your Funds</h1>
      <p className="mb-6">Grab your cash; straight to your bank, no wahala.</p>

      <div className="bg-white p-4 rounded-lg shadow mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Available Wallet Balance</p>
          <p className="text-2xl font-bold">₦100,000</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">👁</button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <p className="font-semibold mb-4">Withdrawal Methods</p>
        <p className="text-sm text-gray-600 mb-3">Choose where you want your gbese cash to land.</p>
        <div className="flex space-x-4">
        <button
        className={`px-4 py-2 w-full rounded border cursor-pointer ${method === 'bank' ? 'bg-blue-100 border-blue-600 text-blue-700 font-bold' : 'border-gray-300 text-gray-600'}`}
        onClick={() => handleMethodChange('bank')}
      >
        Bank Account
      </button>
      <button
        className={`px-4 py-2 w-full rounded border cursor-pointer ${method === 'wallet' ? 'bg-blue-100 border-blue-600 text-blue-700 font-bold' : 'border-gray-300 text-blue-600 hover:bg-blue-100 text-blue-700'}`}
        onClick={() => handleMethodChange('wallet')}
      >
        GbesePay Wallet
      </button>

        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-4">
        <h2 className="font-semibold text-lg">Withdrawal Details</h2>

        <div>
          <label className="block text-sm font-medium">Amount (₦)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter Amount"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter your bank name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter account number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Reason for withdrawal (Optional)</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter reason for withdrawal"
          />
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-[#021346] text-white px-6 py-2 rounded bg-[#021346] transition"
          >
            Withdraw Now
          </button>
        </div>
      </form>

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
                  <span className="font-medium text-gray-600">Account Number:</span>
                  <span>{formData.accountNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Bank Name:</span>
                  <span>{formData.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Amount:</span>
                  <span>₦{Number(formData.amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Reason:</span>
                  <span>{formData.reason || 'N/A'}</span>
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
          <tbody>
            {recentWithdrawals.map((r, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-2">{r.name}</td>
                <td>{r.date}</td>
                <td>{r.amount}</td>
                <td className={
                  r.status === 'Successful' ? 'text-green-600 font-semibold' :
                  r.status === 'Rejected' ? 'text-red-600 font-semibold' :
                  'text-yellow-600 font-semibold'
                }>
                  {r.status}
                </td>
                <td>{r.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default WithdrawFunds