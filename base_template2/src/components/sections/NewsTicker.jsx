import React, { useEffect, useRef, useState } from "react";

const NewsTicker = () => {
  const tickerRef = useRef(null);
  const [speed, setSpeed] = useState(60);

  // Pause on hover & speed control
  useEffect(() => {
    const tickerText = tickerRef.current;
    if (!tickerText) return;

    const parent = tickerText.parentElement;

    const handleMouseEnter = () => {
      tickerText.style.animationPlayState = "paused";
    };
    const handleMouseLeave = () => {
      tickerText.style.animationPlayState = "running";
    };

    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const adjustSpeed = (delta) => {
    setSpeed((prev) => {
      const newSpeed = Math.max(30, Math.min(90, prev + delta));
      if (tickerRef.current) {
        tickerRef.current.style.animationDuration = `${newSpeed}s`;
      }
      return newSpeed;
    });
  };

  return (
    <div
      className="mx-auto my-[15px] px-[15px] flex items-center rounded-[4px] overflow-hidden border border-[#333]"
      style={{ maxWidth: "1200px", background: "linear-gradient(135deg,#1a1a1a,#2a2a2a)" }}
    >
      {/* Trending Label */}
      <div className="flex-shrink-0 px-[15px] py-[10px] font-bold text-[11px] flex items-center gap-[5px] bg-[#f7931a] text-black rounded-l-md justify-center">
        🔥 TRENDING
      </div>

      {/* Ticker Content */}
      <div className="flex-1 overflow-hidden px-[15px] py-[10px]">
        <div
          ref={tickerRef}
          className="flex items-center whitespace-nowrap text-[12px] text-white"
          style={{
            animation: `scroll-ticker ${speed}s linear infinite`,
          }}
        >
          Bitcoin's Main Rival Ethereum Hits A Fresh Record High: $425.55
          <span className="text-white text-[10px] ml-[5px]">February 7, 2018</span>
          <span className="mx-[15px] text-white">|</span>
          India: Bitcoin Prices Drop As Media Misinterprets Gov's Regulation Speech
          <span className="text-white text-[10px] ml-[5px]">February 8, 2018</span>
          <span className="mx-[15px] text-white">|</span>
          Blockchain Bloat: How Ethereum Is Tackling Storage Issues
          <span className="text-white text-[10px] ml-[5px]">February 5, 2018</span>
          <span className="mx-[15px] text-white">|</span>
          Cryptocurrency Breaches $9,000 For First Time Since November
          <span className="text-white text-[10px] ml-[5px]">February 5, 2018</span>
        </div>
      </div>

      {/* Ticker Arrows */}
      <div className="flex flex-row bg-[#333] border-l border-[#444]">
        <span
          onClick={() => adjustSpeed(-10)}
          className="px-[15px] py-[10px] cursor-pointer text-[12px] text-[#888] flex items-center justify-center border-r border-[#444] hover:bg-[#f7931a] hover:text-black transition-all"
        >
          ◀
        </span>
        <span
          onClick={() => adjustSpeed(10)}
          className="px-[15px] py-[10px] cursor-pointer text-[12px] text-[#888] flex items-center justify-center hover:bg-[#f7931a] hover:text-black transition-all"
        >
          ▶
        </span>
      </div>

      {/* Inline Scroll Animation */}
      <style>
        {`
          @keyframes scroll-ticker {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default NewsTicker;
