import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "News", path: "/news" },
    { label: "Markets", path: "/markets" },
    { label: "Blockchain", path: "/blockchain" },
    { label: "Technology", path: "/technology" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-[#323232] text-[#f1f1f1] shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-[#00c003] tracking-wide transition-colors duration-300"
        >
          Block<span className="text-white">Fiesta</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-sm font-medium uppercase tracking-wide text-gray-300 hover:text-[#00c003] transition-all duration-300 group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#00c003] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00c003] text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-gray-700">
          <nav className="flex flex-col items-center py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium uppercase tracking-wide text-gray-300 hover:text-[#00c003] transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
