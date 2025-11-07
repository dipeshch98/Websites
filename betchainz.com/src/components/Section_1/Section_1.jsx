import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function Section6() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section6-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">
        Error loading Section 6 articles: {error.message}
      </p>
    );

  const articles = Object.values(data?.articles || []);
  const sectionArticles = articles.slice(50, 54);

  const categories = [
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

  // Function to assign category (cyclically)
  const getCategory = (index) => categories[index % categories.length];

  return (
    <section className="w-full py-10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionArticles.map((article, index) => (
            <Link
              key={article._id}
              to={`/article/${article.slug}`}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={
                    article.featuredImage ||
                    "https://placehold.co/400x250?text=No+Image"
                  }
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-sm font-semibold uppercase">
                  {getCategory(index)}
                </span>

                <h4 className="text-gray-900 font-bold text-lg mt-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
