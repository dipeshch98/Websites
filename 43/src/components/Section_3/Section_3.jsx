import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { Link } from "react-router-dom";

const cryptoCategories = [
  "Ethereum (ETH)", "Blockchain", "Cryptocurrency", "Token", "Altcoin",
  "Stablecoin", "Fiat Currency", "Wallet", "Private Key", "Public Key",
  "Address", "Mining", "Staking", "Node", "Block", "Hash",
  "Decentralization", "Consensus", "Proof-of-Work (PoW)", "Proof-of-Stake (PoS)",
  "Smart Contract", "Halving", "HODL", "FOMO", "FUD", "DYOR",
  "Exchange", "Liquidity", "Volatility", "Market Cap", "All-Time High (ATH)",
  "Bear Market", "Bull Market", "NFT", "DeFi", "dApp"
];

export default function Section_5() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts-section5"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6 text-center text-gray-500 animate-pulse">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">Error loading posts</p>;

  const articles = data?.articles || [];
  const editorPicks = articles.slice(34, 40);

  return (
    <section className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6 py-10">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Editor's Peak
        </h2>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {editorPicks.map((post, index) => {
          const randomCategory = cryptoCategories[Math.floor(Math.random() * cryptoCategories.length)];

          return (
            <Link
              key={post._id || index}
              to={`/article/${post.slug}`}
              className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={
                    post.featuredImage ||
                    `https://picsum.photos/500/300?random=${index + 21}`
                  }
                  className="w-full h-56 sm:h-64 md:h-60 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={post.title}
                />
                <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded bg-purple-600 text-white">
                  {randomCategory}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt || "No description available."}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
