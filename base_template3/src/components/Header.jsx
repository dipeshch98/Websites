import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="bg-gradient-to-r from-[#00C6FF] to-[#0072FF] bg-clip-text text-2xl font-black uppercase tracking-tight text-transparent sm:text-3xl"
        >
          CryptoDaily
        </a>

        {/* Navigation */}
        <nav className="relative flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navMenu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#1A1A1A] shadow-sm transition hover:border-[#00C6FF] hover:text-[#00C6FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00C6FF] md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>

          {/* Menu Items */}
          <div
            id="navMenu"
            className={`absolute right-0 top-full z-40 w-64 flex-col gap-2 rounded-3xl border border-white/60 p-4 text-sm font-semibold text-[#1A1A1A] shadow-[0_0_1px_rgba(148,163,184,0.2),0_12px_30px_rgba(15,23,42,0.14)] backdrop-blur-[18px] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(255,255,255,0.68))] transition-all duration-300 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${
              menuOpen ? "flex animate-[fadeIn_0.8s_ease-out_forwards]" : "hidden md:flex"
            }`}
          >
            {[
              { name: "Home", link: "#home" },
              { name: "Markets", link: "#markets" },
              { name: "DeFi", link: "#defi" },
              { name: "NFTs", link: "#nft" },
              { name: "Analysis", link: "#analysis" },
              { name: "Learn", link: "#learn" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="rounded-xl px-3 py-2 text-[#1A1A1A] transition hover:text-[#00C6FF] md:px-0 md:py-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
