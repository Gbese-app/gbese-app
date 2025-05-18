import { useState } from 'react'
import TransferredDebt from './TransferredDebt' // Now imports the "Select Debt" content
import DebtHistory from './DebtHistory'
import ActiveDebts from './ActiveDebts' // Now imports the "Shuffle History" content
import '../layout/Popup.css'
import { Link } from 'react-router-dom'
import { useGetMyUserDetails } from '../services/queries'

function Chief() {
  const [tab, setTab] = useState('about')
  const { data: userDetailsData, isSuccess: isUserDetailsSuccess } = useGetMyUserDetails()

  console.log(userDetailsData)

  return (
    <div className="min-h-screen bg-[#F1F5FF]">
      <div className="flex flex-col p-4 sm:p-6 md:p-9">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">My Debts - GBESE</h1>
            <p>Track, manage, and transfer your debt in one place.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="bg-blue-900 text-white px-6 py-2 rounded cursor-pointer text-center">
              + Add Debt
            </div>
            <Link to="/mydebt/debtshuffle">
              <div className="bg-purple-600 text-white px-6 py-2 rounded cursor-pointer text-center flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="#f2f2f2"
                    fill-rule="evenodd"
                    d="M19.47 4.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-1.793c-.844 0-1.424 0-1.88.045c-.44.043-.706.122-.927.247c-.22.125-.426.313-.689.668c-.272.368-.572.865-1.006 1.589l-2.523 4.205c-.41.685-.747 1.245-1.068 1.679c-.335.453-.688.816-1.155 1.08s-.96.38-1.52.435c-.538.052-1.191.052-1.99.052H2a.75.75 0 0 1 0-1.5h3.603c.844 0 1.424 0 1.88-.045c.44-.043.706-.122.927-.247c.22-.125.426-.313.689-.668c.272-.368.571-.865 1.006-1.589l2.523-4.205c.41-.685.747-1.245 1.068-1.679c.335-.453.688-.816 1.155-1.08s.96-.38 1.52-.435c.538-.052 1.191-.052 1.99-.052h1.828l-.72-.72a.75.75 0 0 1 0-1.06M7.73 7.79c-.196-.038-.418-.041-1.063-.041H2a.75.75 0 0 1 0-1.5h4.74c.546 0 .922 0 1.278.07a3.75 3.75 0 0 1 2.071 1.172c.243.27.436.592.717 1.06l.037.062a.75.75 0 1 1-1.286.772c-.332-.554-.45-.742-.583-.89a2.25 2.25 0 0 0-1.243-.705m5.683 6.566a.75.75 0 0 1 1.03.257c.331.554.448.742.582.89c.327.364.763.611 1.243.705c.196.038.418.041 1.063.041h2.857l-.72-.72a.75.75 0 1 1 1.061-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72h-2.931c-.545 0-.92 0-1.277-.07a3.75 3.75 0 0 1-2.071-1.172c-.243-.27-.436-.592-.717-1.06l-.037-.062a.75.75 0 0 1 .257-1.03"
                    clip-rule="evenodd"
                  />
                </svg>
                <h1 className="px-1">Shuffle Debt</h1>
              </div>
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col justify-between md:flex-row gap-4 mb-6">
          {/* Outstanding */}
          <div className="bg-[#d9e1fc] p-4 rounded w-full md:w-3/5">
            <h2 className="text-gray-700 py-0.5 text-md">Total Outstanding</h2>
            <p className="text-2xl font-bold py-2">
              ₦ {userDetailsData?.data.metadata?.totalAmountInDebt}
            </p>

            <div className="flex flex-col sm:flex-row mt-3 justify-between items-start sm:items-center gap-3">
              <p className="text-sm">Due date: 15th April, 2025</p>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Link to="/transfer-debt" className="w-full sm:w-auto">
                  <div className="bg-blue-900 text-white text-md px-2 py-2 rounded cursor-pointer text-center">
                    Make Payment
                  </div>
                </Link>
                <Link to="/transfer-debt" className="w-full sm:w-auto">
                  <div className="bg-white text-[#021346] border text-md border-[#021346] px-2 py-2 rounded cursor-pointer text-center">
                    Transfer Debt
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Shuffle Program */}
          <div className="bg-[#f7eaff] px-4 py-3 rounded w-full md:w-2/5 text-left">
            <h3 className="font-semibold text-md py-1">Debt Shuffle Program</h3>
            <p className="text-xs text-gray-700 mb-3 py-2">
              Join our community debt redistribution program for potential debt reduction of 5–15%.
            </p>
            <div className="w-full">
              <button className="bg-white px-4 py-1 rounded text-sm cursor-pointer w-full">
                → Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="app-navigation flex flex-row sm:flex-row justify-between text-center sm:gap-0 mb-4">
          <button
            className={`nav-item ${tab === 'about' ? 'active' : ''}`}
            onClick={() => setTab('about')}
          >
            Active Debts
          </button>
          <button
            className={`nav-item ${tab === 'select' ? 'active' : ''}`}
            onClick={() => setTab('select')}
          >
            Transferred Debts
          </button>
          <button
            className={`nav-item ${tab === 'history' ? 'active' : ''}`}
            onClick={() => setTab('history')}
          >
            Debt History
          </button>
        </nav>

        {/* Tab Content */}
        <div className="app-content">
          {tab === 'about' && <ActiveDebts />}
          {tab === 'select' && <TransferredDebt />}
          {tab === 'history' && <DebtHistory />}
        </div>
      </div>
    </div>
  )
}

export default Chief
