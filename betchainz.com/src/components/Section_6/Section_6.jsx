import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function Section_6() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section6-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">
        Error loading section: {error.message}
      </p>
    );

  const categories = [
    "Ethereum (ETH)", "Blockchain", "Cryptocurrency", "Token", "Altcoin",
    "Stablecoin", "Fiat Currency", "Wallet", "Private Key", "Public Key",
    "Address", "Mining", "Staking", "Node", "Block", "Hash", "Decentralization",
    "Consensus", "Proof-of-Work (PoW)", "Proof-of-Stake (PoS)", "Smart Contract",
    "Gas", "Halving", "HODL", "FOMO", "FUD", "DYOR", "Exchange", "Liquidity",
    "Volatility", "Market Cap", "All-Time High (ATH)", "Bear Market", "Bull Market",
    "NFT", "DeFi", "dApp"
  ];

  const articles = Object.values(data?.articles || []);
  if (articles.length < 25) return null;

  const mainArticle = articles[10];
  const sideArticles = articles.slice(11, 13);
  const gridArticles = articles.slice(13, 21);

  // Helper function to assign category from list
  const getCategory = (article, index) => {
    return categories[index % categories.length];
  };

  return (
    <section className="w-full py-10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Whale Activity</h2>
        </div>

        {/* Top Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left: Main Featured Article */}
          <Link to={`/article/${mainArticle.slug}`} className="lg:col-span-2 group block">
            <div className="relative h-[400px] lg:h-[520px] rounded-xl overflow-hidden">
              <img
                src={mainArticle.featuredImage || "https://placehold.co/800x500"}
                alt={mainArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                <div className="mb-3">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-green-600 px-3 py-1.5 rounded">
                    {getCategory(mainArticle, 0)}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {mainArticle.title}
                </h1>
                {mainArticle.excerpt && (
                  <p className="text-sm lg:text-base text-gray-200 leading-relaxed line-clamp-2 mb-3 max-w-3xl">
                    {mainArticle.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span>{new Date(mainArticle.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Right: Two Sidebar Articles */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article, idx) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="group block h-full"
              >
                <div className="relative h-[250px] rounded-xl overflow-hidden">
                  <img
                    src={article.featuredImage || "https://placehold.co/400x250"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-green-600 px-2.5 py-1 rounded mb-2">
                      {getCategory(article, 11 + idx)}
                    </span>
                    <h2 className="text-lg font-bold leading-snug group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridArticles.map((article, idx) => (
            <Link
              key={article._id}
              to={`/article/${article.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-200 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.featuredImage || "https://placehold.co/400x250"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-green-600 text-white px-2 py-1 rounded mb-2">
                  {getCategory(article, 13 + idx)}
                </span>
                <h3 className="text-base font-bold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
