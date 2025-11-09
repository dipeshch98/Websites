import React from "react";

// ✅ Category List Inside the Same File
export const categories = [
  "Ethereum (ETH)",
  "Blockchain",
  "Cryptocurrency",
  "Token",
  "Altcoin",
  "Stablecoin",
  "Fiat Currency",
  "Wallet",
  "Private Key",
  "Public Key",
  "Address",
  "Mining",
  "Staking",
  "Node",
  "Block",
  "Hash",
  "Decentralization",
  "Consensus",
  "Proof-of-Work (PoW)",
  "Proof-of-Stake (PoS)",
  "Smart Contract",
  "Gas",
  "Halving",
  "HODL",
  "FOMO",
  "FUD",
  "DYOR",
  "Exchange",
  "Liquidity",
  "Volatility",
  "Market Cap",
  "All-Time High (ATH)",
  "Bear Market",
  "Bull Market",
  "NFT",
  "DeFi",
  "dApp",
];

// ✅ Function to Pick a Random Category (if needed)
export const getRandomCategory = () => {
  return categories[Math.floor(Math.random() * categories.length)];
};

// ✅ CategoryTag Component
export function CategoryTag({ label }) {
  return (
    <span className="px-2 py-1 text-xs bg-blue-200 text-gray-700 rounded cursor-pointer font-bold w-fit">
      {label}
    </span>
  );
}
