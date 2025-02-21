import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    medicalHistory: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Valid email is required";
    tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters long";
    tempErrors.age = formData.age && formData.age > 0 ? "" : "Valid age is required";
    tempErrors.gender = formData.gender ? "" : "Gender is required";
    tempErrors.phone = /^[0-9]{10}$/.test(formData.phone) ? "" : "Valid 10-digit phone number required";
    tempErrors.address = formData.address ? "" : "Address is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Patient registered successfully!");
      setFormData({ fullName: "", email: "", password: "", age: "", gender: "", phone: "", address: "", medicalHistory: "" });
    } else {
      toast.error("Please fix the errors before submitting");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <Card className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Register Patient</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-white font-semibold">Full Name</label>
            <input type="text" name="fullName" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.fullName} onChange={handleChange} />
            {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Email</label>
            <input type="email" name="email" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Password</label>
            <input type="password" name="password" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Age</label>
            <input type="number" name="age" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.age} onChange={handleChange} />
            {errors.age && <p className="text-red-400 text-sm">{errors.age}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Gender</label>
            <select name="gender" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-red-400 text-sm">{errors.gender}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Phone Number</label>
            <input type="text" name="phone" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-white font-semibold">Address</label>
            <textarea name="address" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.address} onChange={handleChange}></textarea>
            {errors.address && <p className="text-red-400 text-sm">{errors.address}</p>}
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-white font-semibold">Medical History (Optional)</label>
            <textarea name="medicalHistory" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.medicalHistory} onChange={handleChange}></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full md:w-1/2 text-lg font-semibold py-2 rounded-lg">Register</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPatient;
