import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function Section5() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section5-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">Error loading section: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (postsArray.length < 8) return null;

  const sectionArticles = postsArray.slice(0, 8);
  const [left1, left2, left3, middle1, middle2, right1, right2, right3] =
    sectionArticles;

  // Predefined crypto categories
  const categoryList = [
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

  // Utility: pick valid or random category
  const getValidCategory = (category) => {
    const formatted = category?.trim();
    if (formatted && categoryList.includes(formatted)) return formatted;
    return categoryList[Math.floor(Math.random() * categoryList.length)];
  };

  // Reusable Card Component
  const ArticleCard = ({ article, size = "small" }) => {
    if (!article) return null;

    const imageHeight = size === "large" ? "h-90" : "h-48";
    const titleSize = size === "large" ? "text-xl" : "text-base";
    const excerptSize = "text-sm";
    const category = getValidCategory(article.category);

    return (
      <Link
        to={`/article/${article.slug}`}
        className="flex flex-col group transition-all duration-300"
      >
        {/* Image */}
        <div className={`overflow-hidden rounded-lg ${imageHeight} relative mb-3`}>
          <img
            src={
              article.featuredImage ||
              (size === "large"
                ? "https://placehold.co/800x400"
                : "https://placehold.co/400x200")
            }
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <span className="text-xs bg-green-600 text-white px-2.5 py-1 rounded font-semibold uppercase w-fit tracking-wide">
            {category}
          </span>
          <h3
            className={`${titleSize} font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-green-600 line-clamp-2`}
          >
            {article.title}
          </h3>
          <p
            className={`${excerptSize} text-gray-600 leading-relaxed line-clamp-2`}
          >
            {article.excerpt || "No description available."}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ethereum Insights
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <ArticleCard article={left1} />
          <ArticleCard article={left2} />
          <ArticleCard article={left3} />
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <ArticleCard article={middle1} size="large" />
          <ArticleCard article={middle2} size="large" />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <ArticleCard article={right1} />
          <ArticleCard article={right2} />
          <ArticleCard article={right3} />
        </div>
      </div>
    </section>
  );
}
