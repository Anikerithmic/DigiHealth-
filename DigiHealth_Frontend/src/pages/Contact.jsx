import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = formData.firstName ? "" : "First Name is required";
    tempErrors.lastName = formData.lastName ? "" : "Last Name is required";
    tempErrors.message = formData.message ? "" : "Message is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Message sent successfully!", { position: "top-right" });
      setFormData({ firstName: "", lastName: "", country: "India", message: "" });
    } else {
      toast.error("Please fill out all required fields", { position: "top-right" });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-12 px-6">
      
      {/* Header Section */}
      <div className="text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-700 py-16 px-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-300">
          If you have any questions, feel free to reach out to us.
        </p>
      </div>

      {/* Contact Form & Details */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Contact Form */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your first name..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Your last name..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Country</label>
              <select
                name="country"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-2">Write your Query</label>
              <textarea
                name="message"
                placeholder="Write to us..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:bg-blue-600 text-white py-3 rounded-full shadow-lg transform hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Details */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Contact Details</h2>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-center space-x-3">
              <i className="fas fa-envelope text-blue-400 text-2xl"></i>
              <span><strong>Email:</strong> support@digihealth.com</span>
            </li>

            <li className="flex items-center space-x-3">
              <i className="fas fa-phone-alt text-blue-400 text-2xl"></i>
              <span><strong>Phone:</strong> +91-987667870</span>
            </li>

            <li className="flex items-center space-x-3">
              <i className="fas fa-map-marker-alt text-blue-400 text-2xl"></i>
              <span><strong>Address:</strong> DigiHealth HQ, Kolhapur, Maharashtra</span>
            </li>
          </ul>

          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com/digihealth`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
