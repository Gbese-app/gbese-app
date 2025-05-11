

import React, { useEffect } from 'react';
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
  const navigate = useNavigate();
  const handleMethodChange = (method) => {
    setMethod(method);
    if (method === 'bank') {
      navigate('/withdrawal');
    } else if (method === 'wallet') {
      navigate('/gbesepay-wallet');  // Navigate to the GbesePay Wallet page
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
            <button className={`px-4 py-2 w-100 rounded border cursor-pointer ${method === 'bank' ? 'bg-blue-100 border-blue-600 text-blue-700 font-bold' : 'border-gray-300 text-black-600'}`} onClick={() => handleMethodChange('bank')}>Bank Account</button>
            <button className={`px-4 py-2 w-100 rounded border cursor-pointer ${method === 'bank' ? 'bg-blue-100 border-blue-600 text-blue-700 font-bold' : 'border-gray-300 text-gray-600'}`}>GbesePay Wallet</button>
          </div>
        </div>

        {/* Withdrawal Details */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold text-lg">Withdrawal Details</h2>

          <div>
            <label className="block font-medium mb-1">Amount (₦)</label>
            <input type="number" placeholder="Enter Amount." className="w-full px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <label className="block font-medium mb-1">Wallet Address</label>
            <input type="text" placeholder="Enter wallet address" className="w-full px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <label className="block font-medium mb-1">Network (ERC-20)</label>
            <input type="text" placeholder="ERC-20" disabled className="w-full px-4 py-2 border rounded-lg" />
          </div>

          <div>
            <label className="block font-medium mb-1">Reason for withdrawal (Optional)</label>
            <input type="text" placeholder="Enter reason for withdrawal" className="w-full px-4 py-2 border rounded-lg" />
          </div>

          

          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg cursor-pointer">Withdraw Now</button>
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-box w-90">
                <img src="/public/images/Vector (1).png" alt="" />
                <h3>Wallet Connected</h3>
                <p>You're good to go. Withdraw your funds straight to your wallet anytime</p>
              </div>
            </div>
          )}
          <div className={`page-content ${showPopup ? 'blurred' : ''}`}>
            {/* Actual page */}
          </div>
        </div>

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
    </div>
  );
};

export default WithdrawFunds2;