import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './components/AdminDashboard';
import PatientDashboard from './components/PatientDashboard';
import SuccessPage from "./components/SuccessPage";
import DoctorDashboard from "./components/DoctorDashboard";
import RegisterPatient from './components/RegisterPatient';
import RegisterDoctor from './components/RegisterDoctor';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />

      <div className="mt-16 min-h-screen">
    <Routes>
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/register-patient" element={<RegisterPatient />} />
      <Route path="/register-doctor" element={<RegisterDoctor />} />
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
    </div>
    
    <Footer /> 
  </Router>
  )
}

export default App
