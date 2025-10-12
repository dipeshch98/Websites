// src/components/Section10.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section10 = ({ articles }) => {
  const navigate = useNavigate();
  const finalArticles = articles?.slice(160, 164) || []; // 4 articles

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (finalArticles.length === 0) return null;

  const [firstArticle, ...restArticles] = finalArticles;

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-[1450px] mx-auto px-[2rem]">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#ff6700] pl-3 mb-10">
          Explore More Articles
        </h2>

        {/* Top Article */}
        {firstArticle && (
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group mb-8"
            onClick={() => handleClick(firstArticle)}
          >
            <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
              <img
                src={firstArticle.featuredImage || "https://placehold.co/600x350"}
                alt={firstArticle.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-5 space-y-2">
              {firstArticle.category && (
                <span className="inline-block bg-[#ff6700] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {firstArticle.category}
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                {firstArticle.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {firstArticle.excerpt || "Read more about this article..."}
              </p>
              <p className="text-xs text-gray-500">
                👤 {firstArticle.author?.name || "SafeChain Team"} • 📅{" "}
                {firstArticle.createdAt
                  ? new Date(firstArticle.createdAt).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
        )}

        {/* Bottom Row: 3 Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restArticles.map((article) => (
            <div
              key={article._id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
              onClick={() => handleClick(article)}
            >
              <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
                <img
                  src={article.featuredImage || "https://placehold.co/400x250"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 space-y-2">
                {article.category && (
                  <span className="inline-block bg-[#ff6700] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {article.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt || "Read more about this article..."}
                </p>
                <p className="text-xs text-gray-500">
                  👤 {article.author?.name || "SafeChain Team"} • 📅{" "}
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
};

export default Section10;
