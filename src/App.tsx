import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Layout from './layout/LayoutMap'
import { Dashboard } from './pages/Dashboard'
import DebtAppTabs from './pages/DebtAppTabs'
import MyDebt from './pages/MyDebt'
import TransferDebtPage from './pages/TransferDebtPage'
import DebtTransferSuccess from './pages/DebtTransferSuccess'
import RewardsPage from './pages/RewardsPage'
import { Transaction } from './pages/Transaction'
import PointsDetailsPage from './pages/PointsDetailsPage'
import WithdrawFunds from './pages/WithdrawFunds'
import WithdrawFunds2 from './pages/WithdrawFunds2'
import GbesePayWallet from './pages/GbesePayWallet'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/mydebt/debtshuffle" element={<DebtAppTabs />} />

          <Route path="/mydebt" element={<MyDebt />} />
          <Route path="/transfer-debt" element={<TransferDebtPage />} />
          <Route path="/debt-transfer-success" element={<DebtTransferSuccess />} />

          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/rewards/points-details" element={<PointsDetailsPage />} />

          <Route path="/transaction" element={<Transaction />} />
          <Route path="/withdrawal" element={<WithdrawFunds />} />
          <Route path="/withdrawal2" element={<WithdrawFunds2 />} />
          <Route path="/gbesepay-wallet" element={<GbesePayWallet />} />
          

          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
