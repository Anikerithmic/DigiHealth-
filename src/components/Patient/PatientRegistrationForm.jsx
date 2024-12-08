import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PatientRegistrationForm = () => {

  const showToast = () => {
    toast.success('Registration Successful', {
      autoClose: 2000, 
      closeOnClick: true,  
      pauseOnHover: true,  
    });
  }; 

  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    medicalHistory: '',
    dateOfBirth: '',
    address: '',
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/patient/register', patientData)
      .then((response) => {
        console.log('Patient Data:', response.data);
        // alert('Patient registered successfully!');
        showToast();
        setPatientData({  // Reset the form fields
          firstName: '',
          lastName: '',
          email: '',
          contact: '',
          password: '',
          medicalHistory: '',
          dateOfBirth: '',
          address: '',
        });
      })
      .catch((error) => {
        console.error('There was an error registering the patient!', error);
        alert('There was an error registering the patient!');
      });
  };

  return (
    <div>
      <h2>Register Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={patientData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={patientData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={patientData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={patientData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={patientData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Medical History:</label>
          <textarea
            name="medicalHistory"
            value={patientData.medicalHistory}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={patientData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={patientData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register Patient</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PatientRegistrationForm;
