// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-[1300px] mx-auto px-4 text-center">
        <p className="text-gray-300 font-semibold text-lg mb-2">
          SafeChain
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SafeChain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
