import React from "react";

const NewsItemCard = ({ title, description, imageUrl }) => {
  return (
    <div className="border-b pb-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-2 hover:text-blue-600 cursor-pointer">
            {title}
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            {description}
          </p>
        </div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-[7.5rem] h-[5rem] object-cover rounded"
          />
        )}
      </div>
    </div>
  );
};

export default NewsItemCard;
