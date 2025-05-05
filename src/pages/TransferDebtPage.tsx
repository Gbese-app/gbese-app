import { Link } from 'react-router-dom'

export default function TransferDebtPage() {
  return (
    <div className="bg-[#f5f9ff] min-h-screen p-6">
      <header className="flex justify-between items-center mb-6"></header>
      <div className="p-6">
        <button
          onClick={() => history.back()}
          className=" border border-blue-900 px-2 py-1 rounded-2xl mb-4"
        >
          ←
        </button>
        <h1 className="text-2xl font-bold mb-2">Transfer Debt</h1>
        <p className="text-gray-500">Choose your Helper to settle your debt</p>

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

        <div className="bg-white mt-6 p-4 rounded shadow">
          <p className="font-semibold mb-2">Capable helpers</p>
          <div className="flex space-x-2 overflow-x-auto">
            {/* Example avatars */}
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

          <div className="mt-6">
            <label className="block mb-1 text-sm font-medium">Selected Debt Helper</label>
            <select className="w-40 border rounded px-3 py-2">
              <img src="gbese-app/public/image (1).png" alt="" />
              <option>CocaineAddict</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>

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

            <textarea
              placeholder="What's on your mind?"
              className="w-full mt-4 border rounded px-3 py-2"
              rows={3}
            ></textarea>

            <Link to="/transfer-debt">
              <button className="bg-blue-700 text-white mt-4 px-4 py-2 rounded">
                Send Request
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
