// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-900 shadow-md">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl md:text-3xl font-bold text-yellow-500 flex items-center gap-2">
          ₿ BITCOIN
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-medium text-white text-sm uppercase tracking-wide">
          <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
          <li><Link to="/market" className="hover:text-yellow-500 transition">Market</Link></li>
          <li><Link to="/crypto" className="hover:text-yellow-500 transition">Crypto</Link></li>
          <li><Link to="/analysis" className="hover:text-yellow-500 transition">Analysis</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-2 flex flex-col space-y-2 text-white font-medium uppercase tracking-wide">
          <Link to="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link to="/market" className="hover:text-yellow-500 transition">Market</Link>
          <Link to="/crypto" className="hover:text-yellow-500 transition">Crypto</Link>
          <Link to="/analysis" className="hover:text-yellow-500 transition">Analysis</Link>
          <Link to="/about" className="hover:text-yellow-500 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
