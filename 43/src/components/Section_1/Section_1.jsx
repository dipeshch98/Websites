import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function Section3() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section3-posts"],
    queryFn: () => getPosts(3),
  });

  if (isLoading)
    return (
      <p className="p-6 text-center text-gray-500 animate-pulse">
        Loading...
      </p>
    );

  if (isError)
    return (
      <p className="p-6 text-center text-red-500">
        Error loading section: {error.message}
      </p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (!postsArray.length) return null;

  const featured = postsArray[6] || null;
  const latest = postsArray.slice(6, 10);
  const trending = postsArray.slice(10, 14);


  // Array of categories
  const categories = [
    "Ethereum (ETH)", "Blockchain", "Cryptocurrency", "Token", "Altcoin", "Stablecoin",
    "Fiat Currency", "Wallet", "Private Key", "Public Key", "Address", "Mining", "Staking",
    "Node", "Block", "Hash", "Decentralization", "Consensus", "Proof-of-Work (PoW)",
    "Proof-of-Stake (PoS)", "Smart Contract", "Gas", "Halving", "HODL", "FOMO", "FUD",
    "DYOR", "Exchange", "Liquidity", "Volatility", "Market Cap", "All-Time High (ATH)",
    "Bear Market", "Bull Market", "NFT", "DeFi", "dApp"
  ];

  // Function to pick a random category
  const getRandomCategory = () =>
    categories[Math.floor(Math.random() * categories.length)];

  return (
    <div className="w-full bg-white pb-10 mt-8">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-6">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Latest Posts
          </h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Column 1: Featured */}
          {featured && (
            <div className="w-full lg:w-[480px] flex-shrink-0 group transition hover:shadow-lg rounded-lg overflow-hidden">
              <Link
                to={`/article/${featured.slug}`}
                className="relative block bg-gray-800 rounded-lg overflow-hidden group"
              >
                <img
                  src={featured.featuredImage}
                  alt={featured.title}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-[525px] object-cover brightness-80 transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className="w-fit text-white text-xs font-normal px-2 py-1 rounded bg-purple-600"
                >
                  {getRandomCategory()}
                </span>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4 md:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug line-clamp-2 group-hover:text-purple-600">
                    {featured.title}
                  </h2>
                  <p className="text-gray-300 text-sm mt-2 md:mt-3 line-clamp-3">
                    {featured.excerpt?.slice(0, 150)}
                  </p>
                  <div className="flex items-center text-xs mt-3 space-x-4 text-gray-400">
                    <span>
                      {new Date(featured.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Column 2: Latest Posts */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            {latest.map((article, index) => (
              <Link
                key={article._id || index}
                to={`/article/${article.slug}`}
                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 transition rounded-md p-2 bg-gray-50 hover:bg-purple-50"
              >
                <div className="flex-1 pr-0 sm:pr-3 mb-2 sm:mb-0">
                  <span
                    className="w-fit text-white text-xs font-normal px-2 py-1 rounded bg-purple-600"
                  >
                    {getRandomCategory()}
                  </span>
                  <h3 className="text-[15px] leading-[24px] font-semibold mt-1 transition line-clamp-2 group-hover:text-purple-700">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="w-full sm:w-[100px] h-[75px] flex-shrink-0 overflow-hidden rounded">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover brightness-75 transition-transform duration-300 transform group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Column 3: Trending Posts */}
          <div className="w-full lg:flex-1 lg:border-l lg:border-gray-200 lg:pl-6 flex flex-col gap-3">
            <h3 className="font-bold text-lg border-b pb-2 mb-4 text-gray-800">
              Trending Posts
            </h3>

            {trending.map((article, index) => (
              <Link
                key={article._id || index}
                to={`/article/${article.slug}`}
                className="group flex flex-col sm:flex-row border-b border-gray-200 pb-3 transition rounded-md p-2 bg-gray-50 hover:bg-purple-50"
              >
                <div className="flex items-center justify-center pr-0 sm:pr-3 mb-2 sm:mb-0 border-b sm:border-b-0 sm:border-r border-gray-300 sm:h-[50px] w-full sm:w-[50px] flex-shrink-0">
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-400">
                    {index + 1}
                  </span>
                </div>
                <div className="pl-0 sm:pl-3 flex-1">
                  <span
                    className="w-fit text-white text-xs font-normal px-2 py-1 rounded bg-purple-600"
                  >
                    {getRandomCategory()}
                  </span>
                  <p className="font-medium mt-1 leading-snug transition line-clamp-2 group-hover:text-purple-700">
                    {article.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
