import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const today = new Date().toLocaleDateString("en-US", options);
    setDate(today);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md animate-slideDown">
      {/* --- Top Bar --- */}
      <div className="bg-[#1e40af]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 text-sm">
          <div className="font-medium text-slate-200">{date}</div>

          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg text-blue-300 transition hover:text-white"
          >
            <span className="text-lg">&#x20BF;</span>
            <span>Crypto News</span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-accent">
              Home
            </a>
            <a href="#contact" className="transition hover:text-accent">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* --- Navigation --- */}
      <nav className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
          {/* Desktop Menu */}
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {[
              "AI",
              "Bitcoin & Altcoins",
              "Blockchain & DeFi",
              "Business",
              "Ethereum & NFTs",
              "FinTech",
              "Gaming",
              "Partner Content",
              "Policy",
            ].map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(/ &| /g, "-")}`}
                  className="flex items-center gap-1 transition hover:text-blue-300"
                >
                  {item} <span className="text-xs opacity-70">&#x25BC;</span>
                </a>

                {/* Bitcoin dropdown */}
                {item === "Bitcoin & Altcoins" && (
                  <div className="invisible absolute left-1/2 top-full z-40 mt-3 w-[min(1024px)] -translate-x-1/2 rounded-xl border border-border bg-white opacity-0 shadow-2xl transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        {
                          title:
                            "Trump moves to expand 40% access to digital assets",
                          img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=200&fit=crop",
                          date: "March 15, 2025",
                        },
                        {
                          title:
                            "Bitcoin remains rangebound as regulatory clarity emerges",
                          img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=300&h=200&fit=crop",
                          date: "March 14, 2025",
                        },
                        {
                          title: "Bitcoin hits record high ahead of US election",
                          img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=200&fit=crop",
                          date: "March 12, 2025",
                        },
                        {
                          title:
                            "US House clears crypto bills after record-breaking session",
                          img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=300&h=200&fit=crop",
                          date: "March 13, 2025",
                        },
                      ].map((news, i) => (
                        <article
                          key={i}
                          className="flex flex-col overflow-hidden rounded-lg border border-border bg-slate-50 transition hover:-translate-y-1 hover:border-primary hover:shadow-card"
                        >
                          <a
                            href="#"
                            className="flex flex-1 flex-col"
                            aria-label={news.title}
                          >
                            <img
                              src={news.img}
                              alt={news.title}
                              className="h-32 w-full object-cover"
                            />
                            <div className="flex flex-1 flex-col gap-2 p-3">
                              <h4 className="line-clamp-3 text-sm font-semibold text-slate-900">
                                {news.title}
                              </h4>
                              <span className="text-xs font-medium text-slate-500">
                                {news.date}
                              </span>
                            </div>
                          </a>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <div className="flex gap-4 text-sm font-medium">
              <a href="#home" className="transition hover:text-blue-300">
                Home
              </a>
              <a href="#contact" className="transition hover:text-blue-300">
                Contact
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md border border-white/20 p-2 text-xl transition hover:bg-white/10"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <ul
          id="mobile-menu"
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } flex-col gap-3 border-t border-white/10 bg-white/95 px-4 pb-4 pt-3 text-sm font-semibold text-slate-900 shadow-lg md:hidden`}
        >
          {[
            "AI",
            "Bitcoin & Altcoins",
            "Blockchain & DeFi",
            "Business",
            "Ethereum & NFTs",
            "FinTech",
            "Gaming",
            "Partner Content",
            "Policy",
          ].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase().replace(/ &| /g, "-")}`}
                className="flex items-center justify-between rounded-md px-3 py-2 transition hover:bg-blue-100"
              >
                {item} <span className="text-xs text-slate-500">&#x25BC;</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
