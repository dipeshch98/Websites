import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold text-lg">
            S
          </div>
          <span className="text-xl font-semibold text-gray-900 tracking-wide">
            Safe<span className="text-blue-600">Chain</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col space-y-3 px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
