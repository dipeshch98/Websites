import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const links = [
    { label: "Home", primary: true, href: "/" },
    { label: "Bitcoin", href: "/bitcoin" },
    { label: "Ethereum", href: "/ethereum" },
    { label: "Altcoins", href: "/altcoins" },
    { label: "Market", href: "/market" },
    { label: "Blockchain", href: "/blockchain" },
    { label: "Business", href: "/business" },
    { label: "Guides", href: "/guides" },
    { label: "Contact Us", href: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <nav className="bg-[#1a1a1a] border-b border-[#333] relative z-50">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center py-3 relative flex-wrap">

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-wrap items-center gap-2 sm:gap-4 list-none">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                link.primary
                  ? "bg-[#f7931a] text-black font-semibold"
                  : "hover:bg-[#333] text-white font-medium"
              }`}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-[#333] rounded px-2 py-1 ml-2 sm:ml-4 flex-1 max-w-xs"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white outline-none px-2 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-[#888] ml-2">
            🔍
          </button>
        </form>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 ml-auto z-50 relative"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu + Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu} // Close menu if user clicks overlay
      ></div>

      <div
        className={`absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-[#333] md:hidden transition-all duration-500 overflow-hidden z-50 ${
          mobileMenuOpen ? "max-h-[1000px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`px-3 py-2 rounded-md transition-colors cursor-pointer ${
                link.primary
                  ? "bg-[#f7931a] text-black font-semibold"
                  : "hover:bg-[#333] text-white font-medium"
              }`}
              onClick={() => {
                setTimeout(() => setMobileMenuOpen(false), 50);
              }}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-[#333] rounded px-3 py-2 mx-4 mt-3"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white outline-none flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-[#888] ml-2">
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavLinks;
