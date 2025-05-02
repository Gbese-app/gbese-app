import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Layout from './layout/LayoutMap'
import { Dashboard } from './pages/Dashboard'
import  MyDebt  from './pages/MyDebt'
import  TransferDebtPage  from './pages/TransferDebtPage'
import DebtTransferSuccess from './pages/DebtTransferSuccess';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/MyDebt" element={<MyDebt />} />
          <Route path="/transfer-debt" element={<TransferDebtPage />} />
          <Route path="/debt-transfer-success" element={<DebtTransferSuccess />} />

          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
