import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/SignUp'
import Layout from './layout/LayoutMap'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
