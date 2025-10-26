// src/components/FeatureNews.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeatureNews({ articles = [] }) {
    const navigate = useNavigate();

    if (!articles || articles.length === 0) return null;

    // Show first 4 articles only
    const displayArticles = articles.slice(50, 54);

    const handleClick = (article) => {
        const slug = (article.slug || article.title || "article")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
        navigate(`/article/${slug}`, { state: { article } });
    };

    return (
        <div className="w-full bg-white">
            {/* Wrapper with same padding as header */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Center content and restrict to 1400px */}
                <div className="max-w-[1400px] mx-auto mt-8 mb-8">
                    {/* Section Title */}
                    <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">
                        Feature News
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayArticles.map((article, idx) => (
                            <div
                                key={idx}
                                className="relative h-[300px] sm:h-[320px] lg:h-[340px] overflow-hidden rounded-md group cursor-pointer"
                                onClick={() => handleClick(article)}
                            >
                                {/* Image */}
                                <img
                                    src={article.featuredImage || article.image || "https://placehold.co/400x300"}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                                    <p className="text-white text-[12px] sm:text-[14px] font-semibold tracking-wide mb-2">
                                        {article.category || "General"} /{" "}
                                        <span className="text-black">
                                            {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                                        </span>
                                    </p>
                                    <h3 className="text-white text-[15px] sm:text-[16px] font-semibold leading-snug hover:text-blue-400 transition-colors">
                                        {article.title || "Untitled Article"}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
