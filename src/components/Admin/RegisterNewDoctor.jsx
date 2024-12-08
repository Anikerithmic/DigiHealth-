import React, { useState } from 'react';

const RegisterNewDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    email: '',
    specialization: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor registered:', doctor);
    // Perform registration logic (e.g., API call to register doctor)
  };

  return (
    <div className="register-doctor">
      <h2>Register New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={doctor.name}
          onChange={handleChange}
          placeholder="Doctor's Name"
          required
        />
        <input
          type="email"
          name="email"
          value={doctor.email}
          onChange={handleChange}
          placeholder="Doctor's Email"
          required
        />
        <input
          type="text"
          name="specialization"
          value={doctor.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          required
        />
        <button type="submit">Register Doctor</button>
      </form>
    </div>
  );
};

export default RegisterNewDoctor;
