import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-green-400 sticky top-0 z-50">
      <nav className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-80 transition duration-300"
        >
          <img src="/betchainz-logo.svg" alt="Betchainz" className="h-10" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row lg:flex gap-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent px-4 py-4 lg:p-0 transition-all duration-300 shadow-lg lg:shadow-none`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-green-50 hover:text-green-600 transition duration-300"
            >
              Crypto Market
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-green-50 hover:text-green-600 transition duration-300"
            >
              Learn Crypto
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-green-50 hover:text-green-600 transition duration-300"
            >
              Ethereum
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-green-50 hover:text-green-600 transition duration-300"
            >
              Altcoins
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}