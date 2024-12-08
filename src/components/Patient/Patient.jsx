import React from 'react';
import PatientNavbar from './PatientNavbar';
import './Patient.css';

const Patient = () => {
  return (
    <div className="patient-container">
      <PatientNavbar />
      <h1>Patient Dashboard</h1>
      <p>Manage your medical records here.</p>
    </div>
  );
};

export default Patient;
