// src/components/Header.jsx
import React from "react";

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = "/"; // Navigate to homepage
  };

  const handleSubscribe = () => {
    alert("Subscribe button clicked!"); // Replace with real subscribe action
  };

  const handleMarketClick = (coin) => {
    alert(`${coin} clicked!`); // Replace with navigation or modal
  };

  return (
    <header
      role="banner"
      className="bg-[#111] border-b-[2px] border-[#222] sticky top-0 z-50"
    >
      <div className="max-w-[1200px] mx-auto px-[15px] py-[15px] flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-[10px] cursor-pointer"
          onClick={handleLogoClick}
        >
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[22px]"
            style={{
              background: "linear-gradient(to bottom right, #f7931a, #ffb347)",
            }}
          >
            &#x20BF;
          </div>
          <div className="text-[22px] text-white font-extrabold">
            Cryptocoin<span className="text-[#f7931a]">Press</span>
          </div>
        </div>

        {/* Market Info & Subscribe */}
        <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:gap-[15px] max-sm:items-center">
          <div className="flex items-center gap-[20px] text-[14px] max-sm:text-[12px] max-sm:gap-[10px] text-white">
            <span
              className="cursor-pointer hover:text-[#f7931a] transition-colors"
              onClick={() => handleMarketClick("BTC")}
            >
              BTC: $28,690
            </span>
            <span className="text-[#888] max-sm:hidden">|</span>
            <span
              className="cursor-pointer hover:text-[#f7931a] transition-colors"
              onClick={() => handleMarketClick("ETH")}
            >
              ETH: $1,850
            </span>
          </div>
          <button
            onClick={handleSubscribe}
            className="px-[20px] py-[8px] rounded-[4px] font-bold cursor-pointer transition-colors"
            style={{ backgroundColor: "#f7931a", color: "#000" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffb347")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f7931a")}
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
