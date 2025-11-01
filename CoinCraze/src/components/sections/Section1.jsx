import React from "react";
import { useNavigate } from "react-router-dom";

const Section1 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto py-10 text-center text-gray-500">
          No articles available
        </div>
      </div>
    );
  }

  // Take only first 2 articles for this section
  const topArticles = articles.slice(0, 2);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
          {topArticles.map((article, index) => (
            <div
              key={article._id}
              className={`py-6 ${
                index === 0
                  ? "md:pl-0 md:pr-6 md:border-r border-gray-200"
                  : "md:pr-0 md:pl-6"
              }`}
            >
              {/* Category */}
              <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {article.category || "NEWS"}
              </span>

              {/* Title */}
              <h2
                className="text-2xl font-bold mt-3 mb-2 cursor-pointer hover:text-blue-600 transition"
                onClick={() => navigate(`/article/${article.slug}`)}
              >
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4">
                {article.excerpt?.slice(0, 150) || ""}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <i className="ri-calendar-line"></i>
                  {new Date(article.createdAt).toLocaleDateString()}
                </span>
                {article.author?.name && (
                  <span className="flex items-center gap-1">
                    <i className="ri-user-3-line"></i>
                    By {article.author.name}
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-[300px] md:h-[370px] object-cover transition-transform duration-300 cursor-pointer hover:scale-105"
                  onClick={() => navigate(`/article/${article.slug}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
