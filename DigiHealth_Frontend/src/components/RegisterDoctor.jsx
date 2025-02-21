import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    specialty: "",
    experience: "",
    phone: "",
    clinicAddress: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = formData.fullName ? "" : "Full Name is required";
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Valid email is required";
    tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters long";
    tempErrors.specialty = formData.specialty ? "" : "Specialty is required";
    tempErrors.experience = formData.experience ? "" : "Experience is required";
    tempErrors.phone = /^[0-9]{10}$/.test(formData.phone) ? "" : "Valid 10-digit phone number required";
    tempErrors.clinicAddress = formData.clinicAddress ? "" : "Clinic Address is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Doctor registered successfully!");
      setFormData({ fullName: "", email: "", password: "", specialty: "", experience: "", phone: "", clinicAddress: "" });
    } else {
      toast.error("Please fix the errors before submitting");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <Card className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Register Doctor</h1>
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
            <label className="text-white font-semibold">Specialty</label>
            <input type="text" name="specialty" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.specialty} onChange={handleChange} />
            {errors.specialty && <p className="text-red-400 text-sm">{errors.specialty}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Years of Experience</label>
            <input type="number" name="experience" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.experience} onChange={handleChange} />
            {errors.experience && <p className="text-red-400 text-sm">{errors.experience}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-white font-semibold">Phone Number</label>
            <input type="text" name="phone" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
          </div>
          <div className="flex flex-col md:col-span-2">
            <label className="text-white font-semibold">Clinic Address</label>
            <textarea name="clinicAddress" className="input-field px-3 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500" value={formData.clinicAddress} onChange={handleChange}></textarea>
            {errors.clinicAddress && <p className="text-red-400 text-sm">{errors.clinicAddress}</p>}
          </div>
          <div className="md:col-span-2 flex justify-center">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full md:w-1/2 text-lg font-semibold py-2 rounded-lg">Register</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterDoctor;