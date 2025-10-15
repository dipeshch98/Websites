import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <footer className="border-t border-white/40 bg-slate-900 py-10 text-gray-200">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-6 px-4">
        <p className="text-sm text-gray-400 m-0">
          &copy; 2025 CryptoDaily. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-gray-200 bg-transparent transition-all duration-300 hover:border-[#00C6FF] hover:text-[#00C6FF]"
        >
          Back to top
          <span aria-hidden="true">&uarr;</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
