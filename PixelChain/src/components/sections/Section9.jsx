import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section9({ articles }) {
  const navigate = useNavigate();

  // Take 8 articles for this section
  const trendingArticles = articles?.slice(160, 168) || []; // 2 rows x 4 columns

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (trendingArticles.length === 0) return null;

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#00c003] pl-3 mb-12">
          Trending Articles
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingArticles.map((article) => (
            <div
              key={article._id}
              className="cursor-pointer flex flex-col group"
              onClick={() => handleClick(article)}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden rounded-xl shadow-md">
                <img
                  src={article.featuredImage || "https://placehold.co/600x400"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-4 flex flex-col justify-between">
                {article.category && (
                  <span className="inline-block bg-[#00c003] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase w-fit mb-2">
                    {article.category.toUpperCase()}
                  </span>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-500">
                  👤 {article.author?.name || "SafeChain Team"} • 📅{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
