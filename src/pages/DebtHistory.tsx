import { FileX2Icon, Loader2Icon } from 'lucide-react'
import { useLoans } from '../services/queries'

// interface DebtHistoryItem {
//   id: number
//   title: string
//   amount: number
//   date: string
//   status: 'Active debt' | 'Settled'
// }

// const debtHistory: DebtHistoryItem[] = [
//   {
//     id: 1,
//     title: 'Rent Balance - Lekki Apartment',
//     amount: 200000,
//     date: '10th April, 2025',
//     status: 'Active debt',
//   },
//   {
//     id: 2,
//     title: 'Smart Phone Installment - Tecno',
//     amount: 100000,
//     date: '10th April, 2025',
//     status: 'Active debt',
//   },
// ]

export const DebtHistory = () => {
  const { loans, isLoansLoading, loansError } = useLoans()

  return (
    <div className="bg-[#f5f9ff] min-h-screen p-6">
      {/* Debt History */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Debt History</h2>
        <div className="space-y-4">
          {loansError && <p className="text-red-500 text-center">{loansError.message}</p>}
          {isLoansLoading && (
            <div className="flex flex-col items-center">
              <Loader2Icon className="animate-spin" />
            </div>
          )}
          {loans?.length === 0 && (
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center">
                <FileX2Icon className="text-gray-500 size-20" />
              </div>
              <p className="text-gray-500 text-center">No active debts found</p>
            </div>
          )}
          {loans?.map((loan) => (
            <div
              key={loan._id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="pb-3 font-medium">{loan.description}</p>
                <p className="text-sm text-gray-500">
                  Disbursed on {new Date(loan.disbursedAt).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {loan.status}
                </span>
                <p className="text-lg font-bold">
                  Total Amount: ₦{loan.totalAmountToBePaid.toLocaleString()}
                </p>
                <p className="text-sm">Amount Paid: ₦{loan.totalAmountToBePaid.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DebtHistory
