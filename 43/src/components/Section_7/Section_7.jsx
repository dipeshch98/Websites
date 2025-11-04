import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function Section_7() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section6-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">Error loading section: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (postsArray.length < 5) return null; // ensure enough articles

  const featuredArticle = postsArray[0];
  const smallCards = postsArray.slice(1, 5);

  // Predefined blockchain categories
  const blockchainCategories = [
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
    "dApp"
  ];

  // Helper function to pick a category based on index
  const getCategory = (index) =>
    blockchainCategories[index % blockchainCategories.length];

  return (
    <section className="w-full py-10 ">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 text-center">
            On-Chain Metrics
          </h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Left Big Card */}
          {featuredArticle && (
            <Link
              to={`/article/${featuredArticle.slug}`}
              className="lg:col-span-2 relative rounded-xl overflow-hidden group h-80 sm:h-[400px] lg:h-[600px]"
            >
              <img
                src={
                  featuredArticle.featuredImage ||
                  "https://placehold.co/600x600"
                }
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white w-fit">
                  {getCategory(0)}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 cursor-pointer transition-colors duration-300 group-hover:text-purple-600">
                  {featuredArticle.title}
                </h3>
                {featuredArticle.excerpt && (
                  <p className="text-gray-200 text-sm mb-4">
                    {featuredArticle.excerpt}
                  </p>
                )}
                <div className="flex items-center text-gray-300 text-xs">
                  <span>
                    {featuredArticle.createdAt
                      ? new Date(featuredArticle.createdAt).toLocaleDateString()
                      : "Recent"}
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Right Small Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {smallCards.map((article, idx) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className={`border rounded-xl p-5 shadow-sm hover:shadow-md transition group ${
                  idx >= 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white w-fit">
                  {getCategory(idx + 1)}
                </span>
                <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-purple-600 mt-4">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                )}
                <div className="flex items-center text-xs text-gray-500">
                  <span>
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recent"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
