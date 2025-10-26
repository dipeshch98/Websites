// src/components/Section1.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section1({ articles = [] }) {
  const navigate = useNavigate();

  if (!articles || articles.length === 0) return null;

  // Show first 6 articles (you can adjust this number)
  const displayArticles = articles.slice(0, 3);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((article, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 cursor-pointer"
                onClick={() => handleClick(article)}
              >
                {/* Thumbnail */}
                <img
                  src={article.featuredImage || article.image || "https://placehold.co/80x70"}
                  alt={article.title}
                  className="w-[80px] h-[70px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />
                {/* Title + Desc */}
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight transition-colors duration-300 hover:text-blue-600">
                    {article.title || "Untitled Article"}
                  </h3>
                  <p className="text-gray-500 text-xs leading-tight">
                    {article.excerpt || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
