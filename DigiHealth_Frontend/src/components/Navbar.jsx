import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute bg-gray-900 top-0 left-0 w-full text-white shadow-lg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              DigiHealth
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
            <Link to="/login" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white transition">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <Link to="/" className="block px-4 py-2 text-center hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block px-4 py-2 text-center hover:bg-gray-700">About</Link>
          <Link to="/contact" className="block px-4 py-2 text-center hover:bg-gray-700">Contact</Link>
          <Link to="/login" className="block px-4 py-2 text-center bg-green-500 hover:bg-green-600 text-white">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
