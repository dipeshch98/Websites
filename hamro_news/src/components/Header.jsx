import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#1B065E] fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-[78.125rem] mx-auto flex items-center justify-between px-[1rem] lg:px-0 sm:px-[2rem] py-[0.75rem]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/"> {/* Navigate to home on click */}
            {/* <img
              src="https://images.pexels.com/photos/965879/pexels-photo-965879.jpeg"
              alt="Logo"
              className="h-[2.5rem] w-auto cursor-pointer"
            /> */}
            <h1 className="text-3xl text-white font-extrabold">Hamro News</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-end">
          <ul className="flex gap-[2rem] text-white text-[1rem] font-semibold uppercase tracking-wide">
            {[
              "Home",
              "Society",
              "Health",
              "Business",
              "Sports",
              "World",
              "Diplomacy",
              "Tech",
            ].map((item) => (
              <li key={item}>
                {item === "Home" ? (
                  <Link
                    to="/"
                    className="relative transition duration-300 hover:text-gray-200
                               after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                               after:w-0 after:h-[2px] after:bg-white hover:after:w-full
                               after:transition-all after:duration-300"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="relative transition duration-300 hover:text-gray-200
                               after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                               after:w-0 after:h-[2px] after:bg-white hover:after:w-full
                               after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger (Mobile & Tablet) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-[1.75rem] focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-red-700">
          <ul className="flex flex-col items-center gap-[1rem] py-[1rem] text-white text-[1rem] font-semibold uppercase">
            {[
              "Home",
              "Politics",
              "Society",
              "Health",
              "Business",
              "Sports",
              "World",
              "Diplomacy",
              "Tech",
            ].map((item) => (
              <li key={item}>
                {item === "Home" ? (
                  <Link to="/" className="hover:text-gray-200">
                    {item}
                  </Link>
                ) : (
                  <a href="#" className="hover:text-gray-200">
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
