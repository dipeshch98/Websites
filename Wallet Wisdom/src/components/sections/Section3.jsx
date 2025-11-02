import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  // Split articles for sections
  const rockAndRoll = articles.slice(0, 3); // Main + 2 sub articles
  const rockAndRoll1 = articles.slice(20, 23); // Main + 2 sub articles
  const games = articles.slice(3, 7); // Featured + 3 smaller
  const latestProducts = articles.slice(7, 11);
  const trending = articles.slice(0, 5);

  return (
    <div className="max-w-[1200px] mx-auto bg-white px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Left Section: ROCK & ROLL + GAMES + PRODUCTS */}
      <div className="space-y-6 md:col-span-2">

        {/* ROCK & ROLL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[rockAndRoll, rockAndRoll1].map((section, sIdx) =>
            section[0] && (
              <div
                key={sIdx}
                className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer p-2"
              >
                {/* Main Article */}
                <div onClick={() => handleClick(section[0])}>
                  <div className="text-center mt-4">
                    <h2 className="font-bold text-lg text-white">{section[0].category || "Rock & Roll"}</h2>
                    <p className="text-white text-sm">{section[0].excerpt || "Optional subtitle"}</p>
                    <div className="border-b-4 border-blue-500 mt-2"></div>
                  </div>
                  <div className="overflow-hidden mb-2">
                    <img
                      src={section[0].featuredImage || "https://placehold.co/400x280"}
                      alt={section[0].title}
                      className="w-full h-64 object-cover transform transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-left text-white">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">{section[0].title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm mb-2">
                      <span>👤 {section[0].author?.name || "Unknown"}</span>
                      <span>📂 {section[0].category || "Rock & Roll"}</span>
                      <span>📅 {section[0].createdAt ? new Date(section[0].createdAt).toLocaleDateString() : "Recent"}</span>
                      <span>👁️ {section[0].views || 0}</span>
                    </div>
                    <p className="text-sm">{section[0].excerpt || "Short description..."}</p>
                  </div>
                </div>

                {/* Sub Articles */}
                <div className="space-y-4 py-6">
                  {section.slice(1).map((sub, idx) => (
                    <div
                      key={sub._id || idx}
                      className="flex gap-3 items-center cursor-pointer group"
                      onClick={() => handleClick(sub)}
                    >
                      <div className="relative w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
                        <img
                          src={sub.featuredImage || "https://placehold.co/80x80"}
                          alt={sub.title}
                          className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                        />
                        <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-1">66%</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm hover:text-yellow-400">{sub.title}</h4>
                        <p className="text-xs text-gray-400">
                          📂 {sub.category || "Rock & Roll"} • 📅 {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : "Recent"} • 👁️ {sub.views || 0}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* GAMES */}
        {games.length > 0 && (
          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold tracking-wide">GAMES</h2>
              <p className="text-gray-400 text-sm">Optional subtitle</p>
              <div className="border-b-2 border-yellow-500 mt-2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Featured */}
              <div className="md:col-span-2 cursor-pointer" onClick={() => handleClick(games[0])}>
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={games[0].featuredImage || "https://placehold.co/400x280"}
                    alt={games[0].title}
                    className="w-full h-72 object-cover transform transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold group-hover:text-yellow-400 transition">{games[0].title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-400 my-2">
                    <span>👤 {games[0].author?.name || "Unknown"}</span>
                    <span>📂 {games[0].category || "Games"}</span>
                    <span>📅 {games[0].createdAt ? new Date(games[0].createdAt).toLocaleDateString() : "Recent"}</span>
                    <span>👁️ {games[0].views || 0}</span>
                  </div>
                  <p className="text-sm text-gray-300">{games[0].excerpt || "Short description..."}</p>
                </div>
              </div>

              {/* Smaller Posts */}
              <div className="space-y-4">
                {games.slice(1).map((post, idx) => (
                  <div
                    key={post._id || idx}
                    className="flex gap-3 cursor-pointer group"
                    onClick={() => handleClick(post)}
                  >
                    <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        src={post.featuredImage || "https://placehold.co/80x80"}
                        alt={post.title}
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm hover:text-yellow-400">{post.title}</h4>
                      <p className="text-xs text-gray-400">
                        📂 {post.category || "Games"} • 📅 {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Recent"} • 👁️ {post.views || 0}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LATEST PRODUCTS */}
        {latestProducts.length > 0 && (
          <div className="max-w-full mx-auto pt-10 pb-0 space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-black">LATEST PRODUCTS</h2>
              <p className="text-gray-600 text-sm">Show products in any block</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {latestProducts.map((product, idx) => (
                <div
                  key={product._id || idx}
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleClick(product)}
                >
                  <img
                    src={product.featuredImage || "https://placehold.co/400x280"}
                    alt={product.title}
                    className="w-full h-60 md:h-72 object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h3 className="text-lg font-bold">{product.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Section: TRENDING */}
      <div className="bg-gray-200 p-4 rounded-md shadow-md md:sticky md:top-18  lg:sticky lg:top-18 self-start h-fit">
        <div className="flex border-b mb-6">
          <button className="px-4 py-2 font-semibold text-gray-800 border-b-4 border-orange-500">
            TRENDING
          </button>
        </div>
        <div className="space-y-6">
          {trending.map((article, idx) => (
            <div
              key={article._id || idx}
              className="flex items-start gap-3 cursor-pointer group"
              onClick={() => handleClick(article)}
            >
              <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                <img
                  src={article.featuredImage || "https://placehold.co/80x80"}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1">{idx + 1}</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-[16px] group-hover:text-orange-500 transition">{article.title}</h3>
                <p className="text-[14px] text-gray-500 flex flex-wrap gap-2">
                  {article.category || "News"} <span>📅 {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recent"}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Section3;
