const Withdraw = () => {
  return (
    <div className="min-h-screen bg-[#f5f8ff] p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Withdraw Your Funds</h1>
          <p className="text-gray-600">
            Cash out sharp sharp. Straight to your bank or wallet, no wahala!.
          </p>
        </div>

        {/* Wallet Balance Card */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Available Wallet Balance</p>
            <p className="text-3xl font-bold text-black">₦100,000</p>
            <button className="text-blue-600 text-sm mt-1">Fund Wallet</button>
          </div>
          <div>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12h.01M12 12h.01M9 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>

        {/* Withdrawal Method */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-lg mb-1">Withdrawal Methods</h2>
          <p className="text-sm text-gray-500 mb-4">
            Choose where you want your gbese cash to land.
          </p>
          <div className="flex space-x-4">
            <button className="flex-1 border rounded-lg py-2 text-gray-700 font-medium hover:bg-gray-100">
              Bank Account
            </button>
            <button className="flex-1 border rounded-lg py-2 text-white bg-[#1a1a1a] font-medium">
              GbesePay Wallet
            </button>
          </div>
        </div>

        {/* Withdrawal Details */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h2 className="font-semibold text-lg">Withdrawal Details</h2>

          <div>
            <label className="block font-medium mb-1">Amount (₦)</label>
            <input
              type="number"
              placeholder="Enter Amount."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Wallet Address</label>
            <input
              type="text"
              placeholder="Enter wallet address"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Network (ERC-20)</label>
            <input
              type="text"
              placeholder="Enter token standard"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Reason for withdrawal (Optional)</label>
            <input
              type="text"
              placeholder="Enter reason for withdrawal"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="attach-debt" className="w-4 h-4" />
            <label htmlFor="attach-debt" className="text-sm">
              Attach debt obligations
            </label>
          </div>

          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">
            Withdraw Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Withdraw
