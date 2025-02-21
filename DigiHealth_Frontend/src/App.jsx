import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';
import PatientDashboard from './components/PatientDashboard';
import SuccessPage from "./components/SuccessPage";
import DoctorDashboard from "./components/DoctorDashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    </Routes>
  </Router>
  )
}

export default App
