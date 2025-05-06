import { ArrowUpRight, ArrowDownRight, CalendarDays } from 'lucide-react'
import '../DebtShuffle.css'

const DebtShuffle = () => {
  return (
    <div className="table-container">
      <section className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Shuffle History</h3>
        <table className="min-w-full table-auto">
          <thead className="table-header">
            <tr>
              <th className="table-header">Shuffle date</th>
              <th className="table-header">Amount Shuffled</th>
              <th className="table-header">Net Impact</th>
              <th className="table-header">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-cell">March 25th, 2025</td>
              <td className="table-cell amount">₦50,000</td>
              <td className="table-cell negative">
                <ArrowDownRight className="inline-block w-4 h-4 mr-1" />
                ₦5,000
              </td>
              <td className="table-cell negative">Debt deducted</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">March 20th, 2025</td>
              <td className="table-cell amount">₦30,000</td>
              <td className="table-cell positive">
                <ArrowUpRight className="inline-block w-4 h-4 mr-1" />
                ₦3,500
              </td>
              <td className="table-cell positive">Debt Increased</td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Jan 20th, 2025</td>
              <td className="table-cell amount">₦30,000</td>
              <td className="table-cell positive">
                <ArrowUpRight className="inline-block w-4 h-4 mr-1" />
                ₦6,700
              </td>
              <td className="table-cell positive">Debt increased</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Next Scheduled Shuffle</h3>
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-700">
            <CalendarDays className="inline-block w-5 h-5 mr-2 text-gray-600" />
            April 30th, 2025
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Make sure to select your debts before the next shuffle date to participate.
          </p>
        </div>
      </section>
    </div>
  )
}

export default DebtShuffle
