// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#323232]  text-white py-4 border-t border-gray-700">
      <p className="text-center text-[1rem]">
        BYTECOIN &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
