import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section1({ articles = [] }) {
  const navigate = useNavigate();

  // Start showing from index 100
  const visibleArticles = articles.slice(100, 106);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest from <span className="text-blue-600">Safe Chain</span>
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore the latest insights, updates, and stories in blockchain, security, and innovation.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleArticles.map((article) => (
            <div
              key={article._id}
              onClick={() => handleClick(article)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={
                    article.featuredImage ||
                    "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded-sm font-semibold uppercase">
                  {article.category || "News"}
                </span>

                <h3 className="text-gray-900 font-semibold text-lg leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {article.title}
                </h3>

                {article.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between text-gray-500 text-xs mt-2">
                  <span>👤 {article.author?.name || "Safe Chain Team"}</span>
                  <span>
                    📅{" "}
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No articles fallback */}
        {visibleArticles.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No articles available yet.
          </p>
        )}
      </div>
    </section>
  );
}
