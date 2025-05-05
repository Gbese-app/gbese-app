interface DebtHistoryItem {
  id: number
  title: string
  amount: number
  date: string
  status: 'Active debt' | 'Settled'
}

const debtHistory: DebtHistoryItem[] = [
  {
    id: 1,
    title: 'Rent Balance - Lekki Apartment',
    amount: 200000,
    date: '10th April, 2025',
    status: 'Active debt',
  },
  {
    id: 2,
    title: 'Smart Phone Installment - Tecno',
    amount: 100000,
    date: '10th April, 2025',
    status: 'Active debt',
  },
]

export const DebtHistory = () => {
  return (
    <div className="bg-[#f5f9ff] min-h-screen p-6">

      {/* Debt History */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Debt History</h2>
        <div className="space-y-4">
          {debtHistory.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">Transferred on {item.date}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">₦{item.amount.toLocaleString()}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DebtHistory
