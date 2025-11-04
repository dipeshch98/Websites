import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-purple-700 text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-[1500px] mx-auto px-4 md:px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide hover:text-purple-200 transition-colors"
        >
          CryptoRadar
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <ul
          className={`absolute lg:static left-0 top-full w-full lg:w-auto bg-purple-700 lg:bg-transparent 
            flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-8 px-6 py-4 lg:p-0 
            transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"
            }`}
        >
          {[
            { name: "Crypto Market", path: "/" },
            { name: "Blockchain News", path: "/" },
            { name: "Altcoins", path: "/" },
            { name: "Crypto Guides", path: "/" },
          ].map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="block text-sm font-semibold tracking-wide px-3 py-2 rounded-md 
                  hover:bg-purple-800 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
