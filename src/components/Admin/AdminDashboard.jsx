// import React from 'react';
// import AdminNavbar from './AdminNavbar';
// import './Admin.css';

// const Admin = () => {
//   return (
//     <div className="admin-container">
//       <AdminNavbar />
//       <h1>Admin Dashboard</h1>
//       <p>Manage the application and its users here.</p>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from 'react';
import ManageDoctors from './ManageDoctors';
import ManagePatients from './ManagePatients';
import RegisterNewDoctor from './RegisterNewDoctor';
import RegisterNewPatient from './RegisterNewPatient';
import PatientNavbar from './AdminNavbar';
import './AdminDashboard.css';  

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('manageDoctors'); // Default section

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="admin-dashboard">
      <PatientNavbar />

      <h1>Admin Dashboard</h1>
      <div className="dashboard-navigation">
        <button onClick={() => handleSectionChange('manageDoctors')}>Manage Doctors</button>
        <button onClick={() => handleSectionChange('managePatients')}>Manage Patients</button>
        <button onClick={() => handleSectionChange('registerDoctor')}>Register New Doctor</button>
        <button onClick={() => handleSectionChange('registerPatient')}>Register New Patient</button>
      </div>

      <div className="dashboard-content">
        {activeSection === 'manageDoctors' && <ManageDoctors />}
        {activeSection === 'managePatients' && <ManagePatients />}
        {activeSection === 'registerDoctor' && <RegisterNewDoctor />}
        {activeSection === 'registerPatient' && <RegisterNewPatient />}
      </div>
    </div>
  );
};

export default AdminDashboard;
