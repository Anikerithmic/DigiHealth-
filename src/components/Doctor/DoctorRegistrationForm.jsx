import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorRegistrationForm = () => {

  const showToast = () => {
    toast.success('Registration Successful', {
      autoClose: 2000, 
      closeOnClick: true,  
      pauseOnHover: true,  
    });
  }; 

  const [doctorData, setDoctorData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    specialty: '',
    qualification: '',
    yearsOfExperience: '',
  });

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/api/doctor/register', doctorData)
      .then((response) => {
        console.log('Doctor Data:', response.data);
        // alert('Doctor registered successfully!');
        showToast();
        setDoctorData({
          firstName: '',
          lastName: '',
          email: '',
          contact: '',
          password: '',
          specialty: '',
          qualification: '',
          yearsOfExperience: '',
        });
      })
      .catch((error) => {
        console.error('There was an error registering the doctor!', error);
        alert('There was an error registering the doctor!');
      });
  };

  return (
    <div>
      <h2>Register Doctor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={doctorData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={doctorData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={doctorData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={doctorData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={doctorData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={doctorData.specialty}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={doctorData.qualification}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Years of Experience:</label>
          <input
            type="number"
            name="yearsOfExperience"
            value={doctorData.yearsOfExperience}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register Doctor</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default DoctorRegistrationForm;
