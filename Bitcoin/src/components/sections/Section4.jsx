// src/components/Section4.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section4 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 6) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  // Articles index 40-45
  const sectionArticles = articles.slice(40, 46);
  const [a1, a2, a3, a4, a5, a6] = sectionArticles;

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 py-12 space-y-12">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
        BITCOIN HIGHLIGHTS
      </h2>

      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Big article */}
        {a1 && (
          <div
            className="cursor-pointer group flex flex-col justify-start"
            onClick={() => handleClick(a1)}
          >
            <div className="overflow-hidden rounded-lg h-[220px] md:h-[260px]">
              <img
                src={a1.featuredImage || "https://placehold.co/700x400"}
                alt={a1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-yellow-600">
                {a1.category || "Bitcoin"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mt-1">{a1.title}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {a1.excerpt || "No description available."}
              </p>
            </div>
          </div>
        )}

        {/* Right: Two horizontal articles same height as left */}
        <div className="grid grid-cols-2 gap-6 h-full">
          {[a2, a3].map((article, idx) =>
            article ? (
              <div
                key={article._id || idx}
                className="cursor-pointer group flex flex-col justify-start"
                onClick={() => handleClick(article)}
              >
                <div className="overflow-hidden rounded-lg h-[220px] md:h-[260px]">
                  <img
                    src={article.featuredImage || "https://placehold.co/400x400"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-yellow-600">
                    {article.category || "Bitcoin"}
                  </span>
                  <h4 className="text-lg font-bold mt-1">{article.title}</h4>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {article.excerpt || "No description available."}
                  </p>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Second Row - same as first row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Right: Two horizontal articles same height as left */}
        <div className="grid grid-cols-2 gap-6 h-full">
          {[a4, a5].map((article, idx) =>
            article ? (
              <div
                key={article._id || idx}
                className="cursor-pointer group flex flex-col justify-start"
                onClick={() => handleClick(article)}
              >
                <div className="overflow-hidden rounded-lg h-[220px] md:h-[260px]">
                  <img
                    src={article.featuredImage || "https://placehold.co/400x400"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-yellow-600">
                    {article.category || "Bitcoin"}
                  </span>
                  <h4 className="text-lg font-bold mt-1">{article.title}</h4>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {article.excerpt || "No description available."}
                  </p>
                </div>
              </div>
            ) : null
          )}
        </div>
        {/* Left: Big article */}
        {a6 && (
          <div
            className="cursor-pointer group flex flex-col justify-start"
            onClick={() => handleClick(a6)}
          >
            <div className="overflow-hidden rounded-lg h-[220px] md:h-[260px]">
              <img
                src={a6.featuredImage || "https://placehold.co/700x400"}
                alt={a6.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold text-yellow-600">
                {a6.category || "Bitcoin"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mt-1">{a6.title}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {a6.excerpt || "No description available."}
              </p>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default Section4;
