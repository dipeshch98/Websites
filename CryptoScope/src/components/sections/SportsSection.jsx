// src/components/SportsSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SportsSection({ articles = [] }) {
  const navigate = useNavigate();

  const news = articles.slice(0, 5); // first 5 for news
  const matches = articles.slice(125, 129); // next ones for matches

  const mainNews = news[0] || {};
  const smallNews = news.slice(1, 5);

  // helper to get valid slug path
  const goToArticle = (item) => {
    if (!item) return;
    if (item.slug) {
      navigate(`/article/${item.slug}`);
    } else if (item.id) {
      navigate(`/article/${item.id}`);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Crypto News</h2>
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Big news */}
                {mainNews && (
                  <div
                    className="flex flex-col gap-4 flex-shrink-0 md:w-[365px] cursor-pointer"
                    onClick={() => goToArticle(mainNews)}
                  >
                    <img
                      src={
                        mainNews.featuredImage ||
                        mainNews.image ||
                        "https://placehold.co/365x235"
                      }
                      alt={mainNews.title || "Untitled News"}
                      className="w-full md:w-[365px] h-[235px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                    <div className="flex flex-col justify-between md:max-w-[365px]">
                      <div>
                        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition">
                          {mainNews.title || "Untitled News"}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {mainNews.excerpt ||
                            mainNews.description ||
                            "No description available."}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="text-blue-600 font-medium">
                          {mainNews.category || "SPORTS"}
                        </span>
                        <span className="text-black">
                          {mainNews.createdAt
                            ? new Date(mainNews.createdAt).toLocaleDateString()
                            : "Unknown Date"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Small News */}
                <div className="flex-1 space-y-8">
                  {smallNews.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 cursor-pointer"
                      onClick={() => goToArticle(item)}
                    >
                      <img
                        src={
                          item.featuredImage ||
                          item.image ||
                          "https://placehold.co/100x65"
                        }
                        alt={item.title || "Untitled News"}
                        className="w-[120px] h-[90px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                      />
                      <div>
                        <h4 className="font-semibold hover:text-blue-600 transition">
                          {item.title || "Untitled News"}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="text-blue-600 font-medium">
                            {item.category || "SPORTS"}
                          </span>
                          <span className="text-black">
                            {item.createdAt
                              ? new Date(item.createdAt).toLocaleDateString()
                              : "Unknown Date"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Right Column: Upcoming Matches */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Upcoming News</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  SEE ALL
                </a>
              </div>

              <div className="space-y-2">
                {matches.map((match, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-gray-200 pb-3 cursor-pointer"
                    onClick={() => goToArticle(match)}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          match.image ||
                          match.featuredImage ||
                          "https://placehold.co/80x80"
                        }
                        alt={match.title || "Match"}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-[18px] font-bold hover:text-blue-600 transition">
                          {match.title || "Match Title"}
                        </h3>
                        <p className="text-[15px] text-gray-500">
                          {match.date
                            ? new Date(match.date).toLocaleDateString()
                            : "Tomorrow"}{" "}
                          |{" "}
                          <span className="text-blue-600">
                            {match.time || "22:30 (CST)"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
