import React from "react";
import { Link } from "react-router-dom";
import homeImage from "/src/assets/images/homeImage.jpg";

const Home = () => {
  return (
    <div className="relative w-full">
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Next Healthcare Solution
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A centralized healthcare platform for seamless appointment booking, health records, and doctor consultations.
          </p>

          {/* Register Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to="/register-patient">
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-lg font-semibold rounded-lg transition">
                Register as Patient
              </button>
            </Link>
            <Link to="/register-doctor">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-lg font-semibold rounded-lg transition">
                Register as Doctor
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Everything you need, all in one place</h2>
          <p className="text-gray-400 mt-4">Our platform simplifies healthcare services with expert insights and secure record management.</p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { title: "Appointment Booking", desc: "Easily schedule doctor visits online." },
            { title: "Health Records", desc: "Securely store and access medical history." },
            { title: "Doctor Consultation", desc: "Get expert healthcare advice anytime." },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-64 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">Explore Healthcare Services</h2>
          <p className="text-gray-400 mt-4">Learn more about our specialized healthcare services.</p>
        </div>
        <div className="mt-12 text-white flex flex-wrap justify-center gap-8">
          {[
            { title: "Cardiology", desc: "Advanced heart care and treatments." },
            { title: "Dermatology", desc: "Skincare and medical treatments." },
            { title: "Neurology", desc: "Specialized brain and nerve treatments." },
          ].map((service, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg text-center w-64 hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
