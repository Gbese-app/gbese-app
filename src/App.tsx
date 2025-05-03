import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Layout from './layout/LayoutMap'
import { Dashboard } from './pages/Dashboard'
import DebtAppTabs from './pages/DebtAppTabs'; 
import MyDebts from './pages/MyDebts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/debtapptabs" element={<DebtAppTabs />} />
          <Route path="/mydebts" element={<MyDebts />} />

          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
