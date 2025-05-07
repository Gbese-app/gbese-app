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
import ReviewInfo from './pages/ReviewInfo'
import PersonalForm from './pages/PersonalForm'
import KYCStepper from './pages/KYCStepper'
import IdentityForm from './pages/IdentityForm'
import FundWallet from './pages/FundWallet'


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* KYC routes (no Layout wrapper) */}
        <Route path="/kycstepper" element={<KYCStepper />} />
        <Route path="/personalform" element={<PersonalForm />} />
        <Route path="/identityform" element={<IdentityForm />} />
        <Route path="/reviewinfo" element={<ReviewInfo />} />

        {/* Main app layout routes */}
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/mydebt/debtshuffle" element={<DebtAppTabs />} />
          <Route path='fundwallet' element={<FundWallet />} />

          <Route path="/mydebt" element={<MyDebt />} />
          <Route path="/transfer-debt" element={<TransferDebtPage />} />
          <Route path="/debt-transfer-success" element={<DebtTransferSuccess />} />

          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/rewards/points-details" element={<PointsDetailsPage />} />

          <Route path="/transaction" element={<Transaction />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
