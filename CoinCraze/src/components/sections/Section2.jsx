import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length) {
    return (
      <div className="max-w-[1400px] mx-auto py-10 text-center text-gray-500">
        No articles available
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-200 py-8">
        {articles.slice(3, 6).map((article, index) => (
          <div key={article._id || index} className="flex flex-col gap-3">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {article.tags?.length
                ? article.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))
                : (
                    <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                      NEWS
                    </span>
                  )}
            </div>

            {/* Title */}
            <h2
              className="text-xl font-bold cursor-pointer hover:text-blue-600 transition"
              onClick={() => navigate(`/article/${article.slug}`)}
            >
              {article.title}
            </h2>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <i className="ri-calendar-line"></i>
                {new Date(article.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded aspect-[4/3]">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 cursor-pointer hover:scale-105"
                onClick={() => navigate(`/article/${article.slug}`)}
              />
              {article.type === "video" && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-12 h-12 bg-black bg-opacity-60 text-white rounded-full flex justify-center items-center">
                    ▶
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
