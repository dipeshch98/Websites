import React from "react";

const NewsCardGrid = ({ newsItems = [], containerClass = "" }) => {
  return (
    <div
      className={`w-full max-w-[58.125rem] mx-auto px-[0.25rem] sm:px-[0.5rem] lg:px-0 mt-6 border-b border-gray-300 pb-4 ${containerClass}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div className="overflow-hidden rounded">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
              />
            </div>
            <p className="mt-3 font-semibold text-base leading-snug hover:text-blue-600 cursor-pointer">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCardGrid;
