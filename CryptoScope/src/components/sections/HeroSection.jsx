// src/components/HeroSection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroSection({ articles = [] }) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("latest");

    if (!articles || articles.length === 0) return null;

    // Featured = first article
    const featured = articles[9];

    // Side list = next 5
    const sideArticles = articles.slice(7, 12);

    const handleClick = (article) => {
        const slug = (article.slug || article.title || "article")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
        navigate(`/article/${slug}`, { state: { article } });
    };

    return (
        <div className="w-full bg-white">
            {/* Wrapper same as Section1 */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Center content with max width */}
                <div className="max-w-[1400px] mx-auto mt-8 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6">

                        {/* LEFT COLUMN (Featured) */}
                        <div
                            className="relative w-full lg:flex-1 h-[400px] sm:h-[450px] lg:h-[470px] overflow-hidden rounded-md group cursor-pointer"
                            onClick={() => handleClick(featured)}
                        >
                            <img
                                src={featured.featuredImage || featured.image || "https://placehold.co/800x470"}
                                alt={featured.title}
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 lg:p-10">
                                <p className="text-white text-[12px] sm:text-[14px] font-semibold uppercase tracking-wide mb-2">
                                    {featured.category || "General"} /{" "}
                                    <span className="text-black">
                                        {featured.createdAt ? new Date(featured.createdAt).toLocaleDateString() : "Unknown Date"}
                                    </span>
                                </p>
                                <h2 className="text-white text-[22px] sm:text-[28px] lg:text-[36px] leading-tight font-bold mb-2 hover:text-blue-400 transition-colors duration-300">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-200 text-sm sm:text-base line-clamp-3">
                                    {featured.excerpt || "No description available."}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN (Tabs + Side List) */}
                        <div className="flex flex-col gap-4 w-full lg:w-[360px] mt-6 lg:mt-0">
                            {/* Tabs */}
                            <div className="flex gap-3">
                                {["latest", "popular", "trending"].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-2 font-medium rounded ${activeTab === tab
                                            ? "bg-blue-500 text-white"
                                            : "border bg-gray-200 text-black"
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Side Articles */}
                            {sideArticles.map((article, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-3 items-start overflow-hidden group cursor-pointer"
                                    onClick={() => handleClick(article)}
                                >
                                    <div className="w-[100px] h-[70px] overflow-hidden rounded-md flex-shrink-0">
                                        <img
                                            src={article.featuredImage || article.image || "https://placehold.co/100x70"}
                                            alt={article.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-blue-500 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wide pb-1">
                                            {article.category || "General"} /{" "}
                                            <span className="text-black">
                                                {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                                            </span>
                                        </p>
                                        <h3 className="text-gray-800 text-[14px] sm:text-[16px] leading-[21px] font-medium hover:text-blue-500 transition-colors duration-300">
                                            {article.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
