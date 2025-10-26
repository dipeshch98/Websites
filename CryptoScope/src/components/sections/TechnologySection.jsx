// src/components/TechnologySection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TechnologySection({ articles = [] }) {
    const navigate = useNavigate();

    if (!articles || articles.length === 0) return null;

    // Example splitting: first 2 topArticles, next 4 bottomArticles, next 5 mostViewed
    const topArticles = articles.slice(23, 25);
    const bottomArticles = articles.slice(26, 30);
    const mostViewed = articles.slice(91, 95);

    const handleClick = (article) => {
        const slug = (article.slug || article.title || "article")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
        navigate(`/article/${slug}`, { state: { article } });
    };

    return (
        <div className="w-full bg-white ">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 mb-8">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col">
                        <h2 className="text-2xl font-medium mb-6">Technology</h2>

                        {/* Top Articles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
                            {topArticles.map((article, idx) => (
                                <div key={idx} className="group cursor-pointer" onClick={() => handleClick(article)}>
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            src={article.featuredImage || article.image || "https://placehold.co/400x230"}
                                            alt={article.title}
                                            className="w-full h-[230px] object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">
                                        <span className="text-blue-600">{article.category || "TECHNOLOGY"}</span> • <span className="text-black">
                                            {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                                        </span>
                                    </p>
                                    <h3 className="mt-1 text-lg font-semibold transition-colors duration-300 group-hover:text-blue-600">
                                        {article.title || "Untitled Article"}
                                    </h3>
                                    <p className="mt-1 text-[15px] text-gray-500 font-normal line-clamp-2">
                                        {article.excerpt || "No description available."}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Articles */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-dashed border-gray-300 pt-4">
  {bottomArticles.map((article, idx) => (
    <div
      key={idx}
      className="flex gap-3 group cursor-pointer"
      onClick={() => handleClick(article)}
    >
      {/* Image wrapper */}
      <div className="w-[120px] h-[80px] overflow-hidden rounded-md flex-shrink-0 bg-gray-200">
        <img
          src={
            article?.featuredImage?.trim() ||
            article?.image?.trim() ||
            "https://placehold.co/120x80"
          }
          alt={article.title || "News"}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
          onError={(e) => (e.currentTarget.src = "https://placehold.co/120x80")}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-between">
        <p className="text-xs text-gray-500">
          <span>{article.category || "TECHNOLOGY"}</span> •{" "}
          <span className="text-black">
            {article.createdAt
              ? new Date(article.createdAt).toLocaleDateString()
              : "Unknown Date"}
          </span>
        </p>
        <h4 className="mt-1 text-[15px] sm:text-[16px] font-medium line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
          {article.title || "Untitled Article"}
        </h4>
      </div>
    </div>
  ))}
</div>


                    </div>

                    {/* Right Column - Most Viewed */}
                    <div className="w-full lg:w-[340px]">
                        <h2 className="text-2xl font-medium mb-4">Most View</h2>
                        <div className="flex flex-col gap-4">
                            {mostViewed.map((article, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center group overflow-hidden py-3 border-b border-dashed border-gray-200 cursor-pointer"
                                    onClick={() => handleClick(article)}
                                >
                                    <div className="flex gap-4">
                                        {/* Image wrapper with fixed aspect ratio */}
                                        <div className="w-[100px] h-[75px] overflow-hidden rounded-md flex-shrink-0">
                                            <img
                                                src={article.featuredImage || article.image || "https://placehold.co/120x75"}
                                                alt={article.title}
                                                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Text content */}
                                        <div className="flex flex-col justify-between">
                                            <p className="text-[13px] text-gray-500">
                                                <span className="text-blue-600">{article.category || "BUSINESS"}</span> •{" "}
                                                <span className="text-black">
                                                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                                                </span>
                                            </p>
                                            <h4 className="text-[15px] sm:text-[16px] leading-[22px] font-medium transition-colors duration-300 group-hover:text-blue-600">
                                                {article.title || "Untitled Article"}
                                            </h4>
                                        </div>
                                    </div>

                                    {/* Ranking number */}
                                    <span className="text-3xl font-bold text-gray-200">{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
