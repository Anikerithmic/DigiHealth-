import React, { useState } from 'react';
import './PatientDashboard.css'; 
import PatientNavbar from './PatientNavbar.jsx';

const PatientDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Default section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
   
    <div className="patient-dashboard">
      {/* <h1>Patient Dashboard</h1> */}
      <PatientNavbar />
      
      {/* Navigation for different sections */}
      <div className="dashboard-navigation">
        <button onClick={() => handleSectionChange('profile')}>My Profile</button>
        <button onClick={() => handleSectionChange('appointments')}>Appointment History</button>
        <button onClick={() => handleSectionChange('prescriptions')}>Prescriptions</button>
        <button onClick={() => handleSectionChange('labReports')}>Lab Reports</button>
      </div>

      {/* Main content area */}
      <div className="dashboard-content">
        {activeSection === 'profile' && <Profile />}
        {activeSection === 'appointments' && <AppointmentHistory />}
        {activeSection === 'prescriptions' && <Prescriptions />}
        {activeSection === 'labReports' && <LabReports />}
      </div>
    </div>
  );
};

// My Profile section
const Profile = () => {
  return (
    <div className="profile-section">
      <h2>My Profile</h2>
      <p><strong>Name:</strong> Sameer Desai</p>
      <p><strong>Age:</strong> 22</p>
      <p><strong>Gender:</strong> Male</p>
      <p><strong>Contact:</strong> +123456789</p>
      <p><strong>Email:</strong> sameer@gmail.com</p>
    </div>
  );
};

// Appointment History section
const AppointmentHistory = () => {
  const appointments = [
    { date: '2024-12-01', doctor: 'Dr. Abc', reason: 'Checkup' },
    { date: '2024-11-20', doctor: 'Dr. Xyz', reason: 'Follow-up' },
    // Add more appointment data here
  ];

  return (
    <div className="appointments-section">
      <h2>Appointment History</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Date:</strong> {appointment.date} <br />
            <strong>Doctor:</strong> {appointment.doctor} <br />
            <strong>Reason:</strong> {appointment.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Prescriptions section
const Prescriptions = () => {
  const prescriptions = [
    { date: '2024-12-01', doctor: 'Dr. Abc', prescription: 'Ibuprofen 200mg' },
    { date: '2024-11-20', doctor: 'Dr. mno', prescription: 'Antibiotics' },
    // Add more prescriptions here
  ];

  return (
    <div className="prescriptions-section">
      <h2>Prescriptions</h2>
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index}>
            <strong>Date:</strong> {prescription.date} <br />
            <strong>Doctor:</strong> {prescription.doctor} <br />
            <strong>Prescription:</strong> {prescription.prescription}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Lab Reports section
const LabReports = () => {
  const labReports = [
    { date: '2024-12-01', reportType: 'Blood Test', result: 'Normal' },
    { date: '2024-11-20', reportType: 'X-Ray', result: 'No issues' },
    // Add more lab report data here
  ];

  return (
    <div className="lab-reports-section">
      <h2>Lab Reports</h2>
      <ul>
        {labReports.map((report, index) => (
          <li key={index}>
            <strong>Date:</strong> {report.date} <br />
            <strong>Report Type:</strong> {report.reportType} <br />
            <strong>Result:</strong> {report.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;
