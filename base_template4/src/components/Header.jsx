import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#111111]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <a
          href="/"
          className="font-[Lato] text-2xl font-black tracking-wide text-white hover:text-[#ff3333] transition-colors"
        >
          NewsHub
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex flex-row items-center gap-6 font-semibold tracking-wide">
            {["World", "Business", "Technology", "Sports", "Entertainment"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="rounded-md px-3 py-2 text-sm uppercase tracking-[0.1em] text-gray-400 transition hover:bg-white/5 hover:text-[#ff3333]"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-gray-400 transition hover:border-[#ff3333] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3333] md:hidden"
          aria-label="Toggle mobile menu"
        >
          <span className="sr-only">Open main menu</span>
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute block h-0.5 w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-2"
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 font-semibold tracking-wide">
          {["World", "Business", "Technology", "Sports", "Entertainment", "Science"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-md px-3 py-2 text-sm uppercase tracking-[0.1em] text-gray-400 transition hover:bg-white/5 hover:text-[#ff3333]"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
