import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TransferredDebt = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
     setIsPopupOpen(true); // ✅ Show popup on submit
  };

  const [formData, setFormData] = useState({
    amount: '',
    details: '',
    reason: '',
    receiver: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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
          <div className="flex sm:w-full space-x-2 ">
             {/* Example avatars for helpers */}
              <img
                
                src="/image (1).png w-50"
                alt=""
               
              />
              <img
                
                src="/image 2.png "
                alt=""
               
              />
              <img
                
                src="/image 3.png"
                alt=""
               
              />
              <img
                
                src="/image 4.png"
                alt=""
               
              />
              <img
                
                src="/image 5.png"
                alt=""
               
              />
              <img
                
                src="/image 7.png"
                alt=""
               
              />
              <img
                
                src="/image 8.png"
                alt=""
               
              />
            <span className="ml-2 text-sm text-gray-500 self-center">+15</span>
          </div>

           {/* Debt helper selection and form */}
          <div className="mt-6">
            
            <label className="block mb-4 text-sm font-medium">Selected Debt Helper</label>
            <div className="flex h-10 w-30">
              <img src="/image 9.png" alt="" />
            <select name="receiver" className="flex-1 border ml-4 sm:ml-4 px-1 py-1 rounded" value={formData.receiver}  onChange={handleInputChange}>
              <option>CocaineAddict</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>
            </div>
            
            
             {/* Input fields for account number and amount */}
            <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row gap-3 w-full">
              <div>
                <p className="mb-2 mt-4">Beneficiary Details</p>
              <input
                type="text"
                name="details"
                placeholder="Enter Account number..."
                required
                className="flex-1 sm:w-full border px-3 py-2 rounded w-full" value={formData.details}  onChange={handleInputChange}
              />
              </div>
              <div>
                <p className="mb-2 mt-4">Amount</p>
              <input
                type="number"
                name="amount"
                placeholder="Enter Amount..."
                required
                className="flex-1 sm:w-full border px-3 py-2 rounded w-full" value={formData.amount}  onChange={handleInputChange}
              />
              </div>
              
              
            </form>

             {/* Text area for additional notes */}
             <p>Request Description</p>
            <textarea
            name="reason"
              placeholder="What's on your mind?"
              required
              className="w-full mt-2 border rounded px-3 py-2" value={formData.reason}  onChange={handleInputChange}
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
            <button onClick={closePopup} className="absolute top-8 right-12 text-2xl font-bold text-gray-500 hover:text-gray-800">
               &times; {/* Close button */}
            </button>

             {/* Success icon */}
            <div className=" flex items-center justify-center  px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <div className="flex flex-col items-center space-y-4">
          <svg className="text-green-600 text-5xl mb-2 ml-5 sm:ml-5" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 2048 2048">
                  <path fill="#13BE41" d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-141 0-272-36t-244-104t-207-160t-161-207t-103-245t-37-272q0-141 36-272t104-244t160-207t207-161T752 37t272-37m603 685l-136-136l-659 659l-275-275l-136 136l411 411z" />
                </svg>
          <h2 className="text-xl font-semibold text-gray-800">Debt transfer successful</h2>
        </div>

        <div className="mt-6 text-left space-y-4">
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Debt Receiver:</span>
            <span>{formData.receiver}</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Date:</span>
            <span className="text-gray-900">21/04/25</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Request Description:</span>
            <span>{formData.reason}</span>
            
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Details:</span>
            <span>{formData.details}</span>
          </div>
          <div className="flex justify-between p-0.5 border-b-2 border-b-gray-100">
            <span className="font-semibold text-gray-600">Outstanding Debt:</span>
            
            <span>₦{Number(formData.amount).toLocaleString()}</span>
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