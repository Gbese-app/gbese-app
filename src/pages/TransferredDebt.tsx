import { useState } from 'react'
import '../layout/Popup.css' // Import external CSS file for the popup
import { useDebtRequests } from '../services/queries'
import { FileX2Icon, Loader2Icon } from 'lucide-react'

const Kene = () => {
  // State to track if the popup is open or not
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const { debtRequests, isDebtRequestsLoading, debtRequestsError } = useDebtRequests()

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    // <></>
    <div className="flex flex-col min-h-screen bg-background">
      <div className="min-h-screen bg-[#f4f7fe] p-6 text-[#00174B] font-sans">
        {/* Header */}

        {/* Transferred Debts */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Transferred Debts</h2>
          {debtRequestsError && (
            <p className="text-red-500 text-center">{debtRequestsError.message}</p>
          )}
          {isDebtRequestsLoading && (
            <div className="flex flex-col items-center">
              <Loader2Icon className="animate-spin" />
            </div>
          )}
          {debtRequests?.length === 0 && (
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                <FileX2Icon className="text-gray-500 size-20" />
              </div>
              <p className="text-gray-500 text-center">No transferred debts found</p>
            </div>
          )}
          {debtRequests?.map((debtRequest) => (
            <>
              <div className="bg-white p-4 mb-3 rounded shadow-sm">
                <h3 className="font-medium">
                  {debtRequest.description ?? debtRequest.loan.description}
                </h3>
                <p className="font-bold">₦{debtRequest.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">
                  Recipient: {debtRequest.payer?.email ?? 'ANYONE'}
                </p>
                <p className="text-sm text-gray-600">
                  Transferred on {new Date(debtRequest.createdAt).toLocaleString()}
                </p>
                <div className="flex justify-between mt-2">
                  <span className="bg-gray-200 px-2 py-1 text-sm rounded capitalize">
                    {debtRequest.status}
                  </span>
                  <span
                    onClick={openPopup} // When "View details →" is clicked, open the popup
                    className="text-sm text-blue-700 underline cursor-pointer"
                  >
                    View details →
                  </span>
                </div>
              </div>

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
                      <div className="detail-value">₦{debtRequest.amount.toLocaleString()}</div>
                    </div>
                    <div className="detail-row">
                      <label className="detail-label">Status</label>
                      <div className="detail-value">
                        <span className="status-badge">{debtRequest.status}</span>
                      </div>
                    </div>
                    <div className="detail-row">
                      <label className="detail-label">Recipient</label>
                      <div className="detail-value">{debtRequest.payer?.email ?? 'ANYONE'}</div>
                    </div>
                    <div className="detail-row">
                      <label className="detail-label">Transfer Date</label>
                      <div className="detail-value">
                        {new Date(debtRequest.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Debt Details Popup */}
      </div>
    </div>
  )
}

export default Kene
