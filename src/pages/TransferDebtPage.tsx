import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TransferredDebt = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

   // Function to open the popup
  const openPopup = () => {
      setIsPopupOpen(true); // Sets the state to true, opening the popup
  };

   // Function to close the popup
  const closePopup = () => {
      setIsPopupOpen(false); // Sets the state to false, closing the popup
  };

  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const debtId = query.get('debtId');

   // Example static data for the popup
  //  const data = {
  //    receiver: 'John Doe',
  //    date: '21/04/25',
  //    description: 'Payment for services rendered',
  //    debtor: 'Jane Smith',
  //    amount: 50000
  //  };

   // Adding useEffect to log the state change of the popup
  useEffect(() => {
      console.log("Popup state updated:", isPopupOpen); // Logs the state change for debugging
  }, [isPopupOpen]);

  return (
    <div className="bg-[#f5f9ff] min-h-screen p-6">
      <header className="flex justify-between items-center mb-6">
         {/* Header content could go here */}
      </header>

      <div className="p-6">
         {/* Back button to navigate to the previous page */}
        <button onClick={() => navigate(-1)} className="border border-blue-900 px-2 py-1 rounded-2xl mb-4">
          ← 
        </button>
        <h1 className="text-2xl font-bold mb-2">Transfer Debt</h1>
        <p className="text-gray-500">Choose your Helper to settle your debt</p>

         {/* Balance and debt info */}
        <div className="bg-white p-4 rounded shadow mt-4 flex justify-between">
          <div>
            <p className="text-sm text-gray-500">Available Balance</p>
            <h2 className="text-xl font-bold">₦50,000</h2>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Outstanding Debt</p>
            <h2 className="text-xl font-bold">₦300,000</h2>
            <p className="text-sm text-gray-400">Due date: 30th April, 2025</p>
          </div>
        </div>

         {/* Section for capable helpers */}
        <div className="bg-white mt-6 p-4 rounded shadow">
          <p className="font-semibold mb-2">Capable helpers</p>
          <div className="flex space-x-2 overflow-x-auto">
             {/* Example avatars for helpers */}
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`/avatars/avatar${i + 1}.png`}
                alt={`helper-${i}`}
                className="w-12 h-12 rounded-full"
              />
            ))}
            <span className="ml-2 text-sm text-gray-500 self-center">+15</span>
          </div>

           {/* Debt helper selection and form */}
          <div className="mt-6">
            <img src="/image (1).png" alt="" />
            <label className="block mb-1 text-sm font-medium">Selected Debt Helper</label>
            <select className="w-40 border rounded px-3 py-2">
              <option>CocaineAddict</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>

             {/* Input fields for account number and amount */}
            <div className="mt-4 flex gap-4">
              <input
                type="text"
                placeholder="Enter Account number..."
                className="flex-1 border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Enter Amount..."
                className="flex-1 border px-3 py-2 rounded"
              />
            </div>

             {/* Text area for additional notes */}
            <textarea
              placeholder="What's on your mind?"
              className="w-full mt-4 border rounded px-3 py-2"
              rows={3}
            ></textarea>

             {/* Send request button */}
            <button className="bg-blue-700 text-white mt-4 px-4 py-2 rounded cursor-pointer" 
                    onClick={openPopup}>
              Send Request
            </button>
          </div>
        </div>
      </div>

       {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center p-4 z-50">
           {/* Popup container with shadow, rounded corners, and padding */}
          <div className="   p-6 w-full max-w-md text-center relative">
            
             {/* Close button */}
            <button onClick={closePopup} className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-800">
               &times; {/* Close button */}
            </button>

             {/* Success icon */}
            <div className=" flex items-center justify-center  px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-green-500 text-5xl b">
            <img src=".." alt="" />✅
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Debt transfer successful</h2>
        </div>

        <div className="mt-6 text-left space-y-4">
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Debt Receiver:</span>
            <span className="text-gray-900">CocaineAddict</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Date:</span>
            <span className="text-gray-900">21/04/25</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Request Description:</span>
            <span className="text-gray-900">Debt clearance</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Debtor:</span>
            <span className="text-gray-900">Jones Charles</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Outstanding Debt:</span>
            <span className="text-gray-900 font-bold">₦200,000</span>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransferredDebt;