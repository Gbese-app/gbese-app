import { useState } from 'react'
import '../layout/Popup.css' // Import external CSS file for the popup

const Kene = () => {
  // State to track if the popup is open or not
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <></>
    //   <div className="flex flex-col min-h-screen bg-background">
    //     <div className="min-h-screen bg-[#f4f7fe] p-6 text-[#00174B] font-sans">
    //       {/* Header */}

    //       {/* Transferred Debts */}
    //       <div className="mb-6">
    //         <h2 className="text-lg font-semibold mb-2">Transferred Debts</h2>
    //         <div className="bg-white p-4 mb-3 rounded shadow-sm">
    //           <h3 className="font-medium">Rent Balance - Lekki Apartment</h3>
    //           <p className="font-bold">₦200,000</p>
    //           <p className="text-sm text-gray-600">Recipient: johndoe@gmail.com</p>
    //           <p className="text-sm text-gray-600">Transferred on 6th April, 2025</p>
    //           <div className="flex justify-between mt-2">
    //             <span className="bg-gray-200 px-2 py-1 text-sm rounded">Active debt</span>
    //             <span
    //               onClick={openPopup} // When "View details →" is clicked, open the popup
    //               className="text-sm text-blue-700 underline cursor-pointer"
    //             >
    //               View details →
    //             </span>
    //           </div>
    //         </div>
    //         <div className="bg-white p-4 rounded shadow-sm">
    //           <h3 className="font-medium">Car Loan</h3>
    //           <p className="font-bold">₦1,000,000</p>
    //           <p className="text-sm text-gray-600">Recipient: johndoe@gmail.com</p>
    //           <p className="text-sm text-gray-600">Transferred on 6th April, 2025</p>
    //           <div className="flex justify-between mt-2">
    //             <span className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">
    //               Settled
    //             </span>
    //             <span
    //               onClick={openPopup} // When "View details →" is clicked, open the popup
    //               className="text-sm text-blue-700 underline cursor-pointer"
    //             >
    //               View details →
    //             </span>
    //           </div>
    //         </div>
    //       </div>

      

    //   {/* Debt Details Popup */}
    //   {isPopupOpen && (
    //     <div className="popup-overlay">
    //       <div className="popup-content">
    //         <div className="popup-header">
    //           <h2>Debt Details</h2>
    //           <button onClick={closePopup} className="close-button">
    //             &times; {/* Close button */}
    //           </button>
    //         </div>
    //         <div className="detail-row">
    //           <label className="detail-label">Amount</label>
    //           <div className="detail-value">₦1,000,000</div>
    //         </div>
    //         <div className="detail-row">
    //           <label className="detail-label">Status</label>
    //           <div className="detail-value">
    //             <span className="status-badge">Settled</span>
    //           </div>
    //         </div>
    //         <div className="detail-row">
    //           <label className="detail-label">Recipient</label>
    //           <div className="detail-value">johndoe@gmail.com</div>
    //         </div>
    //         <div className="detail-row">
    //           <label className="detail-label">Transfer Date</label>
    //           <div className="detail-value">6th April, 2025</div>
    //         </div>
    //       </div>
    //     </div>
    //     )}
    //   </div>
    // </div>
    );
  }

export default Kene;
