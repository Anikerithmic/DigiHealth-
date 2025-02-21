import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Call to Action */}
        <div className="col-span-1 md:col-span-4 text-center mb-6">
          <h2 className="text-2xl font-bold">
           Empowering Health, Connecting Lives.
          </h2>
          <Link to="/contact">
          <button className="mt-4 px-6 py-2 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
          </Link>
        </div>

        {/* Footer Sections */}
        <div>
          <h3 className="text-lg font-bold">PROGRAMS</h3>
          <p className="text-sm text-gray-300 mt-2">Copyright © 2024 DigiHealth</p>
          <p className="text-sm text-gray-300">All rights reserved</p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-lg font-bold">Menu</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/help" className="hover:text-white">Help</Link></li>
          </ul>
        </div>

        {/* Careers */}
        <div>
          <h3 className="text-lg font-bold">Careers</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Nutrition</li>
            <li>Phlebotomy</li>
            <li>Lab Tech</li>
            <li>Audiology</li>
            <li>Pharmacy Tech</li>
            <li>EKG Tech</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold">Social</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
