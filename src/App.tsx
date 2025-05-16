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
import FundWallet from './pages/FundWallet'
import IdentityForm from './pages/IdentityForm'
import { KYCStepper } from './pages/KYCStepper'
import { DebtRequest } from './pages/DebtRequest'
import WithdrawFunds from './pages/WithdrawFunds'
import WithdrawFunds2 from './pages/WithdrawFunds2'
import GbesePayWallet from './pages/GbesePayWallet'
import CreditOptions from './pages/CreditOptions'
import LoanForm from './pages/LoanForm'
import LandingPage from './pages/LandingPage'


function App() {
  return (
    <Router>
      <Routes>
                <Route path="/" element={<LandingPage />} />

        {/* Public routes */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* KYC routes (no Layout wrapper) */}
        <Route
          path="/kycstepper"
          element={
            <KYCStepper
              onComplete={() => {
                console.log('KYC process completed')
              }}
            />
          }
        />

        <Route
          path="/personalform"
          element={
            <PersonalForm
              onNext={function (): void {
                throw new Error('Function not implemented.')
              }}
              onUpdate={function (): void {
                throw new Error('Function not implemented.')
              }}
              data={undefined}
            />
          }
        />

        <Route
          path="/identityform"
          element={
            <IdentityForm
              onNext={function (): void {
                throw new Error('Function not implemented.')
              }}
              onBack={function (): void {
                throw new Error('Function not implemented.')
              }}
              onUpdate={function (): void {
                throw new Error('Function not implemented.')
              }}
              data={undefined}
            />
          }
        />

        <Route
          path="/reviewinfo"
          element={
            <ReviewInfo
              onBack={function (): void {
                throw new Error('Function not implemented.')
              }}
              onSubmit={function (): void {
                throw new Error('Function not implemented.')
              }}
              data={undefined}
            />
          }
        />

        {/* Main app layout routes */}
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mydebt/debtshuffle" element={<DebtAppTabs />} />
          <Route path='fundwallet' element={<FundWallet />} />

          <Route path="/mydebt" element={<MyDebt />} />
          <Route path="/transfer-debt" element={<TransferDebtPage />} />
          <Route path="/debt-transfer-success" element={<DebtTransferSuccess />} />
          <Route path="/debt-request" element={<DebtRequest />} />

          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/rewards/points-details" element={<PointsDetailsPage />} />

          <Route path="/transaction" element={<Transaction />} />
          
          <Route path="/withdrawal" element={<WithdrawFunds />} />
          <Route path="/withdrawal2" element={<WithdrawFunds2 />} />
          <Route path="/withdrawal/gbesepay-wallet" element={<GbesePayWallet />} />
          

          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
