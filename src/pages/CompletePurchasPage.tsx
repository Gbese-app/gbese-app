import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CompletePurchasPage() {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()
  const { nftName } = useParams<{ nftName: string }>()

  const isSelected = (method: string) => paymentMethod === method

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 flex justify-center items-center relative">
      <div className="bg-[#f1f5ff] w-full min-h-screen flex justify-center items-start py-16 px-6">
        <div className="w-full max-w-4xl space-y-10">
          <div className="p-6">
            <button
              onClick={() => navigate(`/nft/${nftName}`)}
              className="text-blue-600 text-base mb-2"
            >
              ← Back to NFT Details
            </button>

            <h1 className="text-3xl font-bold">Complete Your Purchase</h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
            <div className="flex items-center border-b border-gray-300 pb-6 mb-6">
              <img
                src="/images/king-ape.png"
                alt="King Ape"
                className="w-32 h-32 rounded-lg mr-6"
              />
              <div>
                <h2 className="font-bold text-2xl">King Ape</h2>
                <p className="text-md text-gray-600">Primate Royalty Collection</p>
              </div>
            </div>
            <div className="text-lg space-y-3">
              <div className="flex justify-between">
                <span>Price</span>
                <span>1.52 ETH</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>0.05 ETH</span>
              </div>
              <div className="flex justify-between font-semibold pt-3 border-gray-300 border-t">
                <span>Total</span>
                <span>1.57 ETH ($4,367.91)</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
            <h3 className="font-semibold text-2xl mb-6">Select Payment Method</h3>

            <div
              className={`flex items-center p-5 mb-4 border rounded-xl cursor-pointer transition ${
                isSelected('Crypto Wallet') ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
              }`}
              onClick={() =>
                isSelected('Crypto Wallet')
                  ? setPaymentMethod(null)
                  : setPaymentMethod('Crypto Wallet')
              }
            >
              <input
                type="radio"
                name="payment"
                checked={isSelected('Crypto Wallet')}
                onChange={() =>
                  isSelected('Crypto Wallet')
                    ? setPaymentMethod(null)
                    : setPaymentMethod('Crypto Wallet')
                }
                className="form-checkbox mr-4 w-5 h-5"
              />
              <div>
                <p className="font-medium text-lg">Crypto Wallet</p>
                <p className="text-md text-gray-500">Pay using your connected crypto wallet</p>
              </div>
            </div>

            <div
              className={`flex items-center p-5 mb-6 border rounded-xl cursor-pointer transition ${
                isSelected('Gbese Token') ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
              }`}
              onClick={() =>
                isSelected('Gbese Token') ? setPaymentMethod(null) : setPaymentMethod('Gbese Token')
              }
            >
              <input
                type="radio"
                name="payment"
                checked={isSelected('Gbese Token')}
                onChange={() =>
                  isSelected('Gbese Token')
                    ? setPaymentMethod(null)
                    : setPaymentMethod('Gbese Token')
                }
                className="form-checkbox mr-4 w-5 h-5"
              />
              <div>
                <p className="font-medium text-lg">Gbese Token</p>
                <p className="text-md text-gray-500">Pay with Gbese tokens from your account</p>
              </div>
            </div>

            <button
              className={`w-full text-white py-4 px-8 text-lg rounded-lg transition ${
                paymentMethod ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!paymentMethod}
              onClick={() => setShowPopup(true)}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-md mx-auto rounded-xl p-8 text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-green-400 rounded-full p-2">
                <svg
                  className="w-15 h-15 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Purchase Successful</h2>
            <p className="text-gray-600 mb-6">
              Congratulations! You have successfully purchased the <strong>King Ape</strong> NFT. It
              has been added to your collection.
            </p>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg mb-6">
              <img src="/images/king-ape.png" alt="King Ape" className="w-21 h-19 rounded mr-4" />
              <div className="text-left">
                <p className="font-semibold text-lg">King Ape</p>
                <p className="text-sm text-gray-500">Transaction ID: 0x8f4e...7a2d</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowPopup(false)
                navigate('/rewards', { state: { activeTab: 'collection' } })
              }}
              className="w-full border border-gray-400 text-black py-3 rounded hover:bg-[#05238C] hover:text-white"
            >
              View My Collection
            </button>

            <button
              onClick={() => {
                setShowPopup(false)
                navigate('/rewards', { state: { activeTab: 'marketplace' } })
              }}
              className="w-full border border-gray-400 text-black py-3 rounded mt-5 hover:bg-[#05238C] hover:text-white"
            >
              Back to Marketplace
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
