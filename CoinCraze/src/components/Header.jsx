import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#40798C] text-white shadow-md fixed w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold tracking-wide uppercase">
            CoinCraze
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:underline underline-offset-2">Home</Link>
            <Link to="/" className="hover:underline underline-offset-2">About</Link>
            <Link to="/" className="hover:underline underline-offset-2">Services</Link>
            <Link to="/" className="hover:underline underline-offset-2">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                // X (Close) icon
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger (Menu) icon
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#40798C] w-full px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:underline underline-offset-2">Home</Link>
          <Link to="/about" className="block hover:underline underline-offset-2">About</Link>
          <Link to="/services" className="block hover:underline underline-offset-2">Services</Link>
          <Link to="/contact" className="block hover:underline underline-offset-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
