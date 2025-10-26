// src/components/ArticleCard.jsx
import React from "react";

const ArticleCard = ({ category, title, excerpt, author, date, imageUrl }) => {
  return (
    <div className="w-full max-w-[58.125rem] mx-auto mt-6">
      {/* Heading */}
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-2">
        {category} <span className="text-gray-400">▸</span>
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-6 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm text-blue-600 font-medium mb-2">{category}</p>
          <h2
            className="text-2xl font-bold leading-snug mb-3 hover:text-blue-600 cursor-pointer"
            onClick={() => window.open("#", "_blank")}
          >
            {title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-700 gap-4">
            <span className="font-semibold text-blue-700">{author}</span>
            <span className="border-l pl-3">{date}</span>
          </div>
        </div>

        {/* Right Image */}
        {imageUrl && (
          <div className="overflow-hidden rounded">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[20rem] object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
