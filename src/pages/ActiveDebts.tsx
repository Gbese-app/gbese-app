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
    <div className="bg-[#f5f9ff] min-h-screen p-4 sm:p-6">
  {/* Active Debts */}
  <section>
    <h2 className="text-lg font-semibold text-gray-700 mb-2">Active Debts</h2>
    <div className="space-y-4">
      {debts.map((debt) => (
        <div
          key={debt.id}
          className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4"
        >
          {/* Left side: Debt info */}
          <div className="flex-1">
            <p className="font-medium">{debt.title}</p>
            <p className="text-xl mt-3 font-bold">₦{debt.amount.toLocaleString()}</p>
            <p className="text-sm mt-3 text-gray-500">Due date: {debt.dueDate}</p>
          </div>
 
          {/* Right side: Actions */}
          <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
           {debt.mpr && (
              <span className={` mb-3 text-xs px-2 py-1 rounded-full ${debt.mprColor}`}>
                {debt.mpr}
              </span>
            )}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="border px-4 py-2 rounded cursor-pointer w-full sm:w-auto">
                Make Payment
              </button>
              <button
                className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
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
