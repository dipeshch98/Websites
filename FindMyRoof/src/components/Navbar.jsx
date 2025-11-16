import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-primary to-blue-900 text-white shadow-2xl border-b-2 border-white border-opacity-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center group">
            <img 
              src="/favicon.svg" 
              alt="RentWise Australia" 
              width={45} 
              height={45} 
              className="mr-3 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110" 
            />
            <span className="text-xl font-bold tracking-wide group-hover:text-orange-400 transition-colors">
              FindMyRoof
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-orange-400 font-medium transition-all duration-200 hover:translate-y-[-2px] px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-white hover:text-orange-400 font-medium transition-all duration-200 hover:translate-y-[-2px] px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-orange-400 font-medium transition-all duration-200 hover:translate-y-[-2px] px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-orange-400 font-medium transition-all duration-200 hover:translate-y-[-2px] px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu with Animation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
