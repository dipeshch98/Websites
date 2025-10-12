// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Technology", path: "/technology" },
    { name: "Business", path: "/business" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-[#0f172a] text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1450px] mx-auto px-[2rem] py-[1rem] flex items-center justify-between">
        {/* Logo / Site Name */}
        <Link to="/" className="text-[1.75rem] font-extrabold tracking-wide hover:text-[#ff6700] transition-colors">
          Mews & Media
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-[2rem] text-[1rem] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-[#ff6700] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[2rem] w-[2rem]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[2rem] w-[2rem]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] text-white px-[2rem] py-[1rem] shadow-inner">
          <nav className="flex flex-col gap-[1rem] text-[1rem] font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-[#ff6700] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
