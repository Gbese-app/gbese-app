import { useState } from 'react'
import TransferredDebt from './TransferredDebt' // Now imports the "Select Debt" content
import DebtHistory from './DebtHistory'
import ActiveDebts from './ActiveDebts' // Now imports the "Shuffle History" content
import '../layout/Popup.css'
import { Link } from 'react-router-dom'

function Chief() {
  const [tab, setTab] = useState('about')

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
          <div className="bg-blue-900 text-white px-4 py-2 rounded cursor-pointer text-center">
            + Add Debt
          </div>
          <Link to="/mydebt/debtshuffle">
            <div className="bg-purple-600 text-white px-4 py-2 rounded cursor-pointer text-center">
              Shuffle Debt
            </div>
          </Link>
        </div>
      </div>

      {/* Summary */}
      <div className="flex flex-col justify-between md:flex-row gap-4 mb-6">
        {/* Outstanding */}
        <div className="bg-[#d9e1fc] p-4 rounded w-full md:w-[28rem]">
          <h2 className="text-gray-700 py-0.5 text-md">Total Outstanding</h2>
          <p className="text-2xl font-bold py-2">₦300,000</p>

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
        <div className="bg-[#f7eaff] px-4 py-3 rounded w-full md:w-60 text-left">
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
