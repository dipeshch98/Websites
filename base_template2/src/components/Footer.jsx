import React from "react";

export default function Footer() {
  const categories = ["Bitcoin", "Blockchain", "Altcoins", "Regulation", "Market"];
  const popularArticles = [
    "Bitcoin Halving 2024: What to Expect",
    "Ethereum 2.0 Staking Guide",
    "Top 10 Altcoins to Watch",
    "DeFi vs Traditional Banking",
    "NFTs: A Complete Beginner's Guide"
  ];
  const recentArticles = [
    "Bitcoin Surges Past $30,000 Mark",
    "New SEC Crypto Regulations",
    "Ethereum Gas Fees Hit Record Low",
    "Major Bank Adopts Bitcoin Trading",
    "Crypto Market Analysis: Week Ahead"
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#333] mt-20 pt-10 pb-6 text-[#888] font-inter">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f7931a] to-[#ffb347] rounded-full flex items-center justify-center font-bold text-lg text-black">
              &#x20BF;
            </div>
            <div className="text-2xl font-extrabold text-white">
              Cryptocoin<span className="text-[#f7931a]">Press</span>
            </div>
          </div>
          <p className="text-sm leading-6">
            Your trusted source for cryptocurrency news, blockchain technology insights, and market analysis. Stay informed about Bitcoin, Ethereum, and the latest in digital finance.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-[#f7931a] text-base font-bold mb-4">Categories</h3>
          <ul className="space-y-2.5">
            {categories.map((cat, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-sm text-[#888] hover:text-[#f7931a] transition-colors"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Articles */}
        <div>
          <h3 className="text-[#f7931a] text-base font-bold mb-4">Popular Articles</h3>
          <ul className="space-y-2.5">
            {popularArticles.map((art, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-sm text-[#888] hover:text-[#f7931a] transition-colors"
                >
                  {art}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className="text-[#f7931a] text-base font-bold mb-4">Recent Articles</h3>
          <ul className="space-y-2.5">
            {recentArticles.map((art, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-sm text-[#888] hover:text-[#f7931a] transition-colors"
                >
                  {art}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center pt-5 border-t border-[#333] mt-7 text-xs text-[#666]">
        &copy; 2025 CryptocoinPress - Cryptocurrency News & Updates. All rights reserved.
      </div>
    </footer>
  );
}
