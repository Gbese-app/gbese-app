import React, { useState } from "react";
import "../layout/Popup.css"; // Import external CSS file for the popup

const Kene = () => {
  // State to track if the popup is open or not
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-background">
        
        <div className="min-h-screen bg-[#f4f7fe] p-6 text-[#00174B] font-sans">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              My Debts - GBESE
            </h1>
            <div className="flex gap-4">
              <div className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer">+ Add Debt</div>
              <div className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">Shuffle Debt</div>
            </div>
          </div>

          {/* Summary */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="bg-[#d9e1fc] p-4 rounded flex-1 h-40">
              <h2 className="text-sm text-gray-700 py-0.5">Total Outstanding</h2>
              <p className="text-2xl font-bold py-2">₦300,000</p>
              <div className="flex gap-2">
                <div className="bg-blue-900 text-white px-4 py-0.5 rounded cursor-pointer">
                  Make Payment
                </div>
                <div className="bg-white border border-gray-400 px-4 py-2 rounded opacity-50 cursor-pointer">
                  Transfer Debt
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 py-1">Due date: 15th April, 2025</p>
            </div>
            <div className="bg-[#f7eaff] p-2 rounded flex-1 h-40">
              <h3 className="font-semibold py-1">Debt Shuffle Program</h3>
              <p className="text-sm text-gray-700 mb-3 py-2">
                Join our community debt redistribution program for potential debt reduction of 5–15%.
              </p>
              <div className='mx-5'>
                <button className="bg-white border px-4 py-1 rounded text-sm cursor-pointer w-80">→ Learn More</button>
          </div>
            </div>
          </div>

          

          {/* Transferred Debts */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Transferred Debts</h2>
            <div className="bg-white p-4 mb-3 rounded shadow-sm">
              <h3 className="font-medium">Rent Balance - Lekki Apartment</h3>
              <p className="font-bold">₦200,000</p>
              <p className="text-sm text-gray-600">Recipient: johndoe@gmail.com</p>
              <p className="text-sm text-gray-600">Transferred on 6th April, 2025</p>
              <div className="flex justify-between mt-2">
                <span className="bg-gray-200 px-2 py-1 text-sm rounded">Active debt</span>
                <span
                  onClick={openPopup} // When "View details →" is clicked, open the popup
                  className="text-sm text-blue-700 underline cursor-pointer"
                >
                  View details →
                </span>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-medium">Car Loan</h3>
              <p className="font-bold">₦1,000,000</p>
              <p className="text-sm text-gray-600">Recipient: johndoe@gmail.com</p>
              <p className="text-sm text-gray-600">Transferred on 6th April, 2025</p>
              <div className="flex justify-between mt-2">
                <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">Settled</span>
                <span
                  onClick={openPopup} // When "View details →" is clicked, open the popup
                  className="text-sm text-blue-700 underline cursor-pointer"
                >
                  View details →
                </span>
              </div>
            </div>
          </div>

          {/* Debt History */}
          {/* <div>
            <h2 className="text-lg font-semibold mb-2">Debt History</h2>
            <div className="bg-white p-4 rounded shadow-sm mb-2 flex justify-between items-center">
              <div>
                <h3 className="font-medium">Rent Balance - Lekki Apartment</h3>
                <p className="text-sm text-gray-600">Transferred on 10th April, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₦200,000</p>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">Active debt</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-medium">Smart Phone Installment - Tecno</h3>
                <p className="text-sm text-gray-600">Transferred on 10th April, 2025</p>
              </div>
              <div className="text-right">
                <p className="font-bold">₦100,000</p>
                <span className="text-sm bg-gray-200 px-2 py-1 rounded">Active debt</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Debt Details Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h2>Debt Details</h2>
              <button onClick={closePopup} className="close-button">
                &times; {/* Close button */}
              </button>
            </div>
            <div className="detail-row">
              <label className="detail-label">Amount</label>
              <div className="detail-value">₦1,000,000</div>
            </div>
            <div className="detail-row">
              <label className="detail-label">Status</label>
              <div className="detail-value">
                <span className="status-badge">Settled</span>
              </div>
            </div>
            <div className="detail-row">
              <label className="detail-label">Recipient</label>
              <div className="detail-value">johndoe@gmail.com</div>
            </div>
            <div className="detail-row">
              <label className="detail-label">Transfer Date</label>
              <div className="detail-value">6th April, 2025</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kene;
