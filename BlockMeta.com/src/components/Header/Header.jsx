import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-sky-900 shadow-lg border-b border-sky-800 sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-extrabold text-white hover:text-blue-100 transition-all duration-300 transform hover:scale-105"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="8" height="24" rx="1.5" fill="#F59E0B"/>
            <rect x="14" y="4" width="8" height="32" rx="1.5" fill="#3B82F6"/>
            <rect x="24" y="10" width="8" height="20" rx="1.5" fill="#10B981"/>
          </svg>
          BlokMeta
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none p-1 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
          className={`${isOpen ? "flex" : "hidden"
            } flex-col lg:flex-row lg:flex gap-4 sm:gap-6 absolute lg:static top-full left-0 w-full lg:w-auto bg-blue-600 lg:bg-transparent px-4 py-4 lg:p-0 transition-all duration-300 shadow-xl lg:shadow-none`}
        >
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-white font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Crypto Market
            </Link>
          </li>
          <li>
            <Link
              to="/learn"
              className="block py-2 px-4 text-white font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              Learn Crypto
            </Link>
          </li>
          <li>
            <Link
              to="/crypto-news"
              className="block py-2 px-4 text-white font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 text-white font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}