import { useNavigate } from 'react-router-dom'

interface Debt {
  id: number
  title: string
  amount: number
  dueDate: string
  mpr?: string
  mprColor?: string
}

const debts: Debt[] = [
  {
    id: 1,
    title: 'Smartphone Installment - Tecno',
    amount: 100000,
    dueDate: '15th April, 2025',
    mpr: '4% MPR',
    mprColor: 'bg-green-100 text-green-800',
  },
  {
    id: 2,
    title: 'Rent Balance - Lekki Apartment',
    amount: 200000,
    dueDate: '15th April, 2025',
    mpr: '8% MPR',
    mprColor: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 3,
    title: 'Car Loan',
    amount: 1000000,
    dueDate: '15th April, 2025',
    mpr: '20% MPR',
    mprColor: 'bg-red-100 text-red-800',
  },
]
const ActiveDebts = () => {
  const navigate = useNavigate()
  const handleTransferClick = (debtId: number) => {
    navigate(`/transfer-debt?debtId=${debtId}`)
  }
  return (
    <div className="bg-[#f5f9ff] min-h-screen p-6">
      {/* Active Debts */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Active Debts</h2>
        <div className="space-y-4">
          {debts.map((debt) => (
            <div
              key={debt.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{debt.title}</p>
                <p className="text-xl font-bold">₦{debt.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-500">Due date: {debt.dueDate}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {debt.mpr && (
                  <span className={`text-xs px-2 py-1 rounded-full ${debt.mprColor}`}>
                    {debt.mpr}
                  </span>
                )}
                <div className="flex gap-2">
                  <button className="border px-4 py-2 rounded cursor-pointer">Make Payment</button>
                  <button
                    className="bg-blue-800 text-white px-4 py-2 rounded cursor-pointer"
                    onClick={() => handleTransferClick(debt.id)}
                  >
                    Transfer Debt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ActiveDebts
