import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">iSpace</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/courses" className="text-gray-600 hover:text-blue-600 transition">Courses</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}