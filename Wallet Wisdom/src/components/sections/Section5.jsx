import React from "react";
import { useNavigate } from "react-router-dom";

const Section5 = ({ articles = [] }) => {
  const navigate = useNavigate();

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
  };

  // Split articles into sections
  const mainArticles = articles.slice(30, 36); // main left section
  const trendingArticles = articles.slice(36, 42); // right trending section
  const paginationArticles = articles.slice(24, 26); // for "Block with Pagination"
  const extraFeatureArticles = articles.slice(36, 38); // for extra feature articles without image
  const paginationArticles1 = articles.slice(42,44)

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 bg-white text-gray-900 dark:text-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* LEFT SECTION */}
        <div className="space-y-8 md:col-span-2">
          {/* Header + Hero */}
          <div className="text-center bg-gray-100 dark:bg-[#1a1a1a] py-4 pb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
              ROCK & ROLL
            </h1>
            <p className="text-gray-500 mt-1">This is an optional subtitle</p>

            {mainArticles[0] && (
              <div
                className="relative w-full mt-4 border-t-4 border-sky-400 overflow-hidden group cursor-pointer"
                onClick={() => handleClick(mainArticles[0])}
              >
                <img
                  src={mainArticles[0].featuredImage || "/placeholder.jpg"}
                  alt={mainArticles[0].title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
                  <h2 className="text-sm font-semibold px-2 text-center">
                    {mainArticles[0].title.length > 60
                      ? mainArticles[0].title.slice(0, 60) + "…"
                      : mainArticles[0].title}
                  </h2>
                </div>
              </div>
            )}
          </div>

          {/* BLOCK WITH PAGINATION */}
          <div className="bg-gray-200 text-center py-6 border-b-2 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800 uppercase">
              BLOCK WITH PAGINATION
            </h2>
            <p className="text-gray-500 mt-1">This is an optional subtitle</p>
          </div>

          <div className="max-w-full mx-auto space-y-4">
            {paginationArticles.map((item) => (
              <div
                key={item._id}
                className="grid md:grid-cols-2 gap-6 items-center bg-gray-200 p-4 rounded-md cursor-pointer group"
                onClick={() => handleClick(item)}
              >
                <div className="overflow-hidden group">
                  <img
                    src={item.featuredImage || "https://placehold.co/600x400"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 cursor-pointer group-hover:text-amber-500">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                    <span>👤 {item.author?.name || "Unknown"}</span>
                    <span>📂 {item.category}</span>
                    <span>📅 {new Date(item.createdAt).toLocaleDateString()}</span>
                    <span>👁️ {item.views || 0}</span>
                  </div>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.excerpt || "Click to read more about this article."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* COLUMN 1 - LATEST POSTS */}
            <div className="bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-md">
              <div className="text-center mb-4">
                <h2 className="font-bold text-lg">LATEST POSTS</h2>
                <div className="border-b-4 border-blue-500 mt-2 w-20 mx-auto"></div>
              </div>

              {mainArticles.slice(1, 4).map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleClick(item)}
                  className="pb-4 mb-4 border-b border-gray-300 last:border-none cursor-pointer"
                >
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-500 transition">
                    {item.title.length > 80
                      ? item.title.slice(0, 80) + "…"
                      : item.title}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-wrap gap-2">
                    <span>👤 {item.author?.name || "Unknown"}</span>
                    <span>📂 {item.category}</span>
                    <span>📅 {new Date(item.createdAt).toLocaleDateString()}</span>
                    <span>👁️ {item.views || 0}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">
                    {item.excerpt || "Click to read more about this article."}
                  </p>
                </div>
              ))}
            </div>

            {/* COLUMN 2 - FEATURED + EXTRA ARTICLES */}
            <div className="bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-md">
              <div className="text-center mb-4">
                <h2 className="font-bold text-lg">FEATURED</h2>
                <div className="border-b-4 border-yellow-400 mt-2 w-20 mx-auto"></div>
              </div>

              {mainArticles[4] && (
                <div
                  className="overflow-hidden mb-3 rounded-md cursor-pointer"
                  onClick={() => handleClick(mainArticles[4])}
                >
                  <img
                    src={mainArticles[4].featuredImage || "/placeholder.jpg"}
                    alt={mainArticles[4].title}
                    className="w-full h-56 object-cover transform transition duration-500 hover:scale-110"
                  />
                  <h3 className="text-lg font-semibold mt-2 hover:text-yellow-400 transition">
                    {mainArticles[4].title.length > 80
                      ? mainArticles[4].title.slice(0, 80) + "…"
                      : mainArticles[4].title}
                  </h3>
                  <p className="text-sm text-gray-400  mt-1">
                    {mainArticles[4].excerpt || "Click to read more about this article."}
                  </p>
                </div>
              )}

              {/* Extra feature articles without image */}
              {extraFeatureArticles.map((item) => (
                <div
                  key={item._id}
                  className="mb-3 p-2 border-b border-gray-300 cursor-pointer "
                  onClick={() => handleClick(item)}
                >
                  <h3 className="text-md font-semibold hover:text-yellow-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {item.excerpt || "Click to read more."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BIG BLOG BLOCK */}
          {mainArticles[6] && (
            <div
              className="bg-gray-200 shadow-md rounded-md overflow-hidden group cursor-pointer"
              onClick={() => handleClick(mainArticles[6])}
            >
              <img
                src={mainArticles[6].featuredImage || "/placeholder.jpg"}
                alt={mainArticles[6].title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl text-black font-semibold hover:text-blue-400 transition">
                  {mainArticles[6].title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-600 mt-2">
                  <span>👤 {mainArticles[6].author?.name || "Unknown"}</span>
                  <span>📂 {mainArticles[6].category}</span>
                  <span>📅 {new Date(mainArticles[15].createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-600 mt-3 leading-relaxed">
                  {mainArticles[6].excerpt || "Click to read full article."}
                </p>
              </div>
            </div>
          )}




          <div className="bg-gray-200 text-center py-6 border-b-2 border-blue-500">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800 uppercase">
              PAGINATION BLOCK
            </h2>
            <p className="text-gray-500 mt-1">This is an optional subtitle</p>
          </div>

          <div className="max-w-full mx-auto space-y-4">
            {paginationArticles1.map((item) => (
              <div
                key={item._id}
                className="grid md:grid-cols-2 gap-6 items-center bg-gray-200 p-4 rounded-md cursor-pointer group"
                onClick={() => handleClick(item)}
              >
                <div className="overflow-hidden group">
                  <img
                    src={item.featuredImage || "https://placehold.co/600x400"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 cursor-pointer group-hover:text-amber-500">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
                    <span>👤 {item.author?.name || "Unknown"}</span>
                    <span>📂 {item.category}</span>
                    <span>📅 {new Date(item.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.excerpt || "Click to read more about this article."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-gray-200 dark:bg-[#1a1a1a] p-4 rounded-md shadow-md md:sticky md:top-18 lg:sticky lg:top-18 self-start h-fit">
          <div className="flex border-b mb-6">
            <button className="px-4 py-2 font-semibold text-gray-800 dark:text-gray-100 border-b-4 border-orange-500">
              TRENDING
            </button>
          </div>

          <div className="space-y-6">
            {trendingArticles.map((item, i) => (
              <div
                key={item._id}
                onClick={() => handleClick(item)}
                className="flex items-start gap-3 cursor-pointer"
              >
                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={item.featuredImage || "/placeholder.jpg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1">
                    {i + 1}
                  </span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[15px] hover:text-orange-500 transition">
                    {item.title.length > 60 ? item.title.slice(0, 60) + "…" : item.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 flex flex-wrap gap-2">
                    📅 {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
