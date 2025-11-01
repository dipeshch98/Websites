import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles = [] }) => {
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

  const featured = articles[6] || null;
  const latest = articles.slice(6, 10);
  const trending = articles.slice(10, 14);

  return (
    <div className="w-full bg-white pt-6 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto ">
        <h3 className="text-2xl font-extrabold mb-6">Latest Posts</h3>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Column 1: Featured */}
          {featured && (
            <div
              className="w-full lg:w-[480px] flex-shrink-0 cursor-pointer"
              onClick={() => navigate(`/article/${featured.slug}`)}
            >
              <div className="relative rounded-lg overflow-hidden group">
                <img
                  src={featured.featuredImage}
                  alt={featured.title}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-[525px] object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white text-black text-[11px] px-2 py-1 uppercase tracking-wide rounded">
                  {featured.category || "NEWS"}
                </span>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-4 md:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-sm mt-2 md:mt-3 line-clamp-3">
                    {featured.excerpt?.slice(0, 150)}
                  </p>
                  <div className="flex items-center text-xs mt-3 space-x-4 opacity-80">
                    <span>{new Date(featured.createdAt).toLocaleDateString()}</span>
                    {featured.author?.name && <span>By {featured.author.name}</span>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Column 2: Latest Posts */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            {latest.map((article, index) => (
              <div
                key={article._id || index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 cursor-pointer hover:bg-gray-50 transition rounded-md p-2"
                onClick={() => navigate(`/article/${article.slug}`)}
              >
                <div className="flex-1 pr-0 sm:pr-3 mb-2 sm:mb-0">
                  <span className="w-fit bg-gray-800 text-white text-xs font-normal px-2 py-1 rounded">
                    {article.category || "NEWS"}
                  </span>
                  <h3 className="text-[15px] leading-[24px] font-semibold mt-1 hover:text-blue-600 transition">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="w-full sm:w-[100px] h-[75px] flex-shrink-0 overflow-hidden rounded">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            ))}
            <a
              href="#"
              className="block text-xs font-medium text-blue-600 hover:underline mt-2"
            >
              See All Posts →
            </a>
          </div>

          {/* Column 3: Trending Posts */}
          <div className="w-full lg:flex-1 lg:border-l lg:border-gray-200 lg:pl-6 flex flex-col gap-3">
            <h3 className="font-bold text-lg border-b pb-2 mb-4">Trending Posts</h3>

            {trending.map((article, index) => (
              <div
                key={article._id || index}
                className="flex flex-col sm:flex-row border-b border-gray-200 pb-3 cursor-pointer hover:bg-gray-50 transition rounded-md p-2"
                onClick={() => navigate(`/article/${article.slug}`)}
              >
                <div className="flex items-center justify-center pr-0 sm:pr-3 mb-2 sm:mb-0 border-b sm:border-b-0 sm:border-r border-gray-300 sm:h-[50px] w-full sm:w-[50px] flex-shrink-0">
                  <span className="text-2xl md:text-3xl font-extrabold text-gray-400">
                    {index + 1}
                  </span>
                </div>
                <div className="pl-0 sm:pl-3 flex-1">
                  <span className="w-fit bg-gray-800 text-white text-xs font-normal px-2 py-1 rounded">
                    {article.category || "NEWS"}
                  </span>
                  <p className="font-medium mt-1 leading-snug hover:text-blue-600 transition">
                    {article.title}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="#"
              className="block text-xs font-medium text-blue-600 hover:underline mt-2"
            >
              See All Posts →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section3;
