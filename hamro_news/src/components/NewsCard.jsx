// src/components/common/NewsCard.jsx
import React from "react";

const NewsCard = ({ imageUrl, title, author, description, withBorder }) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-[1rem] ${
        withBorder ? "border-b border-gray-200 pb-[1rem]" : ""
      }`}
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl || "https://via.placeholder.com/215x140"}
          alt={title}
          className="h-[8.75rem] w-[13.4375rem] object-cover rounded-md"
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-lg font-semibold leading-snug mb-[0.25rem] hover:text-blue-600 cursor-pointer">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mb-[0.5rem]">{author}</p>
        <p className="text-base text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
