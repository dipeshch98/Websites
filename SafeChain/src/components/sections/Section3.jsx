import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section3({ articles = [] }) {
  const navigate = useNavigate();

  // First 2 featured and next 4 smaller ones
  const featuredArticles = articles.slice(128, 130);
  const gridArticles = articles.slice(130, 134);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest <span className="text-blue-600">Insights</span>
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Stay ahead with recent updates, in-depth analyses, and blockchain trends from Safe Chain experts.
          </p>
        </div>

        {/* Row 1 - Two Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <div
              key={article._id}
              onClick={() => handleClick(article)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={
                  article.featuredImage ||
                  "https://placehold.co/600x400?text=No+Image"
                }
                alt={article.title}
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-xs bg-blue-600 px-2 py-1 rounded-sm font-semibold uppercase">
                  {article.category || "Insight"}
                </span>
                <h3 className="text-2xl font-semibold mt-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs mt-3 opacity-80">
                  👤 {article.author?.name || "Safe Chain Team"} •{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - Four smaller articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {gridArticles.map((article) => (
            <div
              key={article._id}
              onClick={() => handleClick(article)}
              className="group bg-white cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={
                    article.featuredImage ||
                    "https://placehold.co/400x250?text=No+Image"
                  }
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-sm font-semibold uppercase">
                  {article.category || "Article"}
                </span>
                <h4 className="text-gray-900 font-bold text-base leading-snug mt-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {article.excerpt || "Click to read more..."}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  👤 {article.author?.name || "Safe Chain"} •{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
