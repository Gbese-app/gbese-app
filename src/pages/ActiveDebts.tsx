import { Link, useNavigate } from 'react-router-dom'
import { useLoans } from '../services/queries'
import { LoanStatuses } from '../types/debtRequest.type'
import { FileX2Icon, Loader2Icon } from 'lucide-react'

const ActiveDebts = () => {
  const { loans, isLoansLoading, loansError } = useLoans({
    status: [LoanStatuses.ACTIVE, LoanStatuses.PENDING],
  })

  return (
    <div className="bg-[#f5f9ff] min-h-screen p-4 sm:p-6">
      {/* Active Debts */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Active Debts</h2>
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
          {loans?.map((loan) => {
            let dueDate = new Date(loan.disbursedAt)
            dueDate.setDate(dueDate.getDate() + loan.durationInDays)

            let interestRateColor =
              loan.interestRate > 0.5 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'

            return (
              <div
                key={loan._id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4"
              >
                {/* Left side: Debt info */}
                <div className="flex-1">
                  <p className="font-medium">{loan.description}</p>
                  <p className="text-xl mt-3 font-bold">
                    ₦{loan.totalAmountToBePaid.toLocaleString()}
                  </p>
                  <p className="text-sm mt-3 text-gray-500">
                    Due date: {dueDate.toLocaleDateString()}
                  </p>
                </div>

                {/* Right side: Actions */}
                <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
                  {loan.interestRate && (
                    <span className={` mb-3 text-xs px-2 py-1 rounded-full ${interestRateColor}`}>
                      {loan.interestRate}
                    </span>
                  )}
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <button className="border px-4 py-2 rounded cursor-pointer w-full sm:w-auto">
                      Make Payment
                    </button>
                    <Link
                      to={`/transfer-debt?debtId=${loan._id}`}
                      className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer w-full sm:w-auto"
                    >
                      Transfer Debt
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default ActiveDebts
