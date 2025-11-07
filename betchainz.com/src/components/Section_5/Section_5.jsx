import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

// List of categories
const categories = [
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

// Function to get random category
const getRandomCategory = () => categories[Math.floor(Math.random() * categories.length)];

export default function Section4() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section4-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">Error loading section: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (postsArray.length < 8) return null;

  const featuredArticle = postsArray[0];
  const leftArticles = postsArray.slice(1, 3);
  const rightArticles = postsArray.slice(3, 7);

  return (
    <section className="w-full py-10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            On-Chain Metrics
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            {leftArticles.map((article) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="group block">
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={article.featuredImage || "https://placehold.co/400x300"}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs bg-green-600 text-white px-2.5 py-1 rounded font-semibold uppercase w-fit tracking-wide">
                    {getRandomCategory()}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 mt-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recent"}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Middle Column - Featured Article */}
          <div className="lg:col-span-6">
            {featuredArticle && (
              <Link
                to={`/article/${featuredArticle.slug}`}
                className="group block h-full">
                <div className="relative overflow-hidden rounded-lg h-full min-h-[400px] lg:min-h-[600px]">
                  <img
                    src={featuredArticle.featuredImage || "https://placehold.co/600x400"}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <div className="mb-3">
                      <span className="text-xs bg-green-600 text-white px-2.5 py-1 rounded font-semibold uppercase w-fit tracking-wide">
                        {getRandomCategory()}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {featuredArticle.title}
                    </h2>
                    {featuredArticle.excerpt && (
                      <p className="text-sm lg:text-base text-gray-200 leading-relaxed line-clamp-2 max-w-2xl">
                        {featuredArticle.excerpt}
                      </p>
                    )}
                    <p className="text-sm text-gray-300 mt-3">
                      {featuredArticle.createdAt
                        ? new Date(featuredArticle.createdAt).toLocaleDateString()
                        : "Recent"}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            {rightArticles.map((article) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="group flex gap-4 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={article.featuredImage || "https://placehold.co/100x100"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-xs bg-green-600 text-white px-2.5 py-1 rounded font-semibold uppercase w-fit tracking-wide">
                    {getRandomCategory()}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 mb-2 mt-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recent"}
                  </p>
                </div>
              </Link>
            ))}

            {/* More Button */}
            <div className="pt-4">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-green-600 font-bold uppercase text-sm hover:text-green-700 transition-colors duration-300 group"
              >

                <span>More News</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
