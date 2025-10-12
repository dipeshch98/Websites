// src/components/Section5.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section5 = ({ articles }) => {
  const navigate = useNavigate();
  const mainArticles = articles?.slice(80, 90) || []; // 10 articles for left
  const sideArticles = articles?.slice(90, 95) || []; // 5 articles for sticky right

  if (mainArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gray-50 py-[4rem]">
      <div className="max-w-[1450px] mx-auto px-[2rem]">
        {/* Section Heading */}
        <h2 className="relative text-3xl font-extrabold text-gray-900 mb-[3rem] pl-[1rem]">
          CRYPTO TRADING
          {/* Left colored border */}
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-full bg-[#ff6700] rounded"></span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[2rem]">
          {/* Left Column */}
          <div className="flex flex-col gap-[2rem]">
            {mainArticles.map((article, index) => {
              // Every 3rd article: display two articles in one row
              if (index % 3 === 0 && mainArticles[index + 1]) {
                return (
                  <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
                    {[article, mainArticles[index + 1]].map((a) => (
                      <div
                        key={a._id}
                        className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex flex-col bg-white"
                        onClick={() => handleClick(a)}
                      >
                        <img
                          src={a.featuredImage || "https://placehold.co/400x250"}
                          alt={a.title}
                          className="w-full h-[18rem] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-[1rem] flex flex-col justify-between">
                          {a.category && (
                            <span className="bg-[#ff6700] text-white text-[0.8rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                              {a.category.toUpperCase()}
                            </span>
                          )}
                          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                            {a.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-[0.5rem]">
                            👤 {a.author?.name || "Expert"} • 📅{" "}
                            {a.createdAt ? new Date(a.createdAt).toLocaleDateString() : "Recently Published"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
              // Skip the second one as it is rendered above
              if (index % 3 === 1) return null;

              // Regular single article
              return (
                <div
                  key={article._id}
                  className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex flex-col bg-white"
                  onClick={() => handleClick(article)}
                >
                  <img
                    src={article.featuredImage || "https://placehold.co/400x250"}
                    alt={article.title}
                    className="w-full h-[18rem] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-[1rem] flex flex-col justify-between">
                    {article.category && (
                      <span className="bg-[#ff6700] text-white text-[0.8rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                        {article.category.toUpperCase()}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-[0.5rem]">
                      👤 {article.author?.name || "Expert"} • 📅{" "}
                      {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recently Published"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column Sticky */}
          <aside className="flex flex-col gap-[1.5rem] md:sticky lg:sticky lg:top-[6rem] h-fit">
            {sideArticles.map((article, idx) => {
              if (idx === 0) {
                // First article with image
                return (
                  <div
                    key={article._id}
                    className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex flex-col bg-white"
                    onClick={() => handleClick(article)}
                  >
                    <img
                      src={article.featuredImage || "https://placehold.co/400x250"}
                      alt={article.title}
                      className="w-full h-[14rem] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-[0.75rem] flex flex-col justify-between">
                      {article.category && (
                        <span className="bg-[#ff6700] text-white text-[0.7rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                          {article.category.toUpperCase()}
                        </span>
                      )}
                      <h3 className="font-semibold text-[0.95rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-[0.25rem]">
                        👤 {article.author?.name || "Expert"} • 📅{" "}
                        {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recently Published"}
                      </p>
                    </div>
                  </div>
                );
              }

              // Other articles without image
              return (
                <div
                  key={article._id}
                  className="cursor-pointer group rounded-xl bg-white p-[0.5rem] shadow-sm hover:shadow-md transition-all"
                  onClick={() => handleClick(article)}
                >
                  <h3 className="font-semibold text-[0.95rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-[0.25rem]">
                    👤 {article.author?.name || "Expert"} • 📅{" "}
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recently Published"}
                  </p>
                </div>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Section5;
