import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function Section_7() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["entertainment-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return <p className="p-6 text-red-500">Error loading section: {error.message}</p>;

  const postsArray = Object.values(data?.articles || []);
  if (postsArray.length < 55) return null;

  const entertainment = postsArray.slice(40, 44);
  const sliderPosts = postsArray.slice(44, 51);

  const categories = [
    "Ethereum (ETH)", "Blockchain", "Cryptocurrency", "Token", "Altcoin",
    "Stablecoin", "Fiat Currency", "Wallet", "Private Key", "Public Key",
    "Address", "Mining", "Staking", "Node", "Block", "Hash", "Decentralization",
    "Consensus", "Proof-of-Work (PoW)", "Proof-of-Stake (PoS)", "Smart Contract",
    "Gas", "Halving", "HODL", "FOMO", "FUD", "DYOR", "Exchange", "Liquidity",
    "Volatility", "Market Cap", "All-Time High (ATH)", "Bear Market", "Bull Market",
    "NFT", "DeFi", "dApp"
  ];

  // Function to assign category from list
  const getCategory = (index) => categories[index % categories.length];

  return (
    <section className="w-full py-10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Entertainment */}
          <div className="lg:col-span-8">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Market Sentiment</h2>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {entertainment.map((article, idx) => (
                <Link
                  key={article._id}
                  to={`/article/${article.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden border border-gray-200 "
                >
                  <div className="overflow-hidden h-56">
                    <img
                      src={article.featuredImage || "https://placehold.co/400x300"}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs mb-3">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-green-600 px-2 text-white py-1 rounded">
                        {getCategory(40 + idx)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                      {article.title || "Untitled Article"}
                    </h3>
                    {article.excerpt && (
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>
                    )}
                    <span className="text-gray-500 text-sm">
                      {article.createdAt
                        ? new Date(article.createdAt).toLocaleDateString()
                        : "Recent"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Trending Posts */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-16">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
              </div>

              <div className="space-y-5">
                {sliderPosts.map((article, idx) => (
                  <Link
                    key={article._id}
                    to={`/article/${article.slug}`}
                    className="flex gap-4 pb-5 border-b border-gray-100 last:border-b-0 last:pb-0 group"
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-full text-white font-bold text-lg shadow-md">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <span className="text-gray-500">
                          {article.createdAt
                            ? new Date(article.createdAt).toLocaleDateString()
                            : "Recent"}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                        {article.title || "Untitled Article"}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
