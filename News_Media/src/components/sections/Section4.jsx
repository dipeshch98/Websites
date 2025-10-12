// src/components/Section4.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section4 = ({ articles }) => {
  const navigate = useNavigate();
  const sectionArticles = articles?.slice(70, 78) || []; // 8 articles

  if (sectionArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const [bigTop, smallTop1, smallTop2, ...bottomArticles] = sectionArticles;

  return (
    <section className="w-full bg-gray-50 py-[4rem]">
      <div className="max-w-[1450px] mx-auto px-[2rem]">
        <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#ff6700] pl-[1rem] mb-[3rem]">
          Featured & Trending
        </h2>

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-[2rem] mb-[2rem]">
          {/* Big Article */}
          {bigTop && (
            <div
              className="cursor-pointer group rounded-xl overflow-hidden shadow-lg flex-1 flex flex-col bg-white"
              onClick={() => handleClick(bigTop)}
            >
              <img
                src={bigTop.featuredImage || "https://placehold.co/800x600"}
                alt={bigTop.title}
                className="w-full h-[32rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[1rem] flex flex-col justify-between">
                {bigTop.category && (
                  <span className="bg-[#ff6700] text-white text-[0.8rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                    {bigTop.category.toUpperCase()}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                  {bigTop.title}
                </h3>
                <p className="text-gray-700 text-lg line-clamp-4">
            {bigTop.excerpt || "Read this featured article to learn more..."}
          </p>
                <p className="text-xs text-gray-500 mt-[0.5rem]">
                  👤 {bigTop.author?.name || "Expert"} • 📅{" "}
                  {bigTop.createdAt
                    ? new Date(bigTop.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}

          {/* Small Top Articles */}
          <div className="flex flex-col gap-[2rem] lg:w-[40%]">
            {[smallTop1, smallTop2].map(
              (article, index) =>
                article && (
                  <div
                    key={article._id}
                    className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex flex-col bg-white"
                    onClick={() => handleClick(article)}
                  >
                    <img
                      src={article.featuredImage || "https://placehold.co/400x250"}
                      alt={article.title}
                      className="w-full h-[16rem] object-cover group-hover:scale-105 transition-transform duration-500"
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
                        {article.createdAt
                          ? new Date(article.createdAt).toLocaleDateString()
                          : "Recently Published"}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2rem]">
          {bottomArticles.map(
            (article) =>
              article && (
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
                    <h3 className="font-semibold text-[0.9rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-[0.25rem]">
                      👤 {article.author?.name || "Expert"} • 📅{" "}
                      {article.createdAt
                        ? new Date(article.createdAt).toLocaleDateString()
                        : "Recently Published"}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Section4;
