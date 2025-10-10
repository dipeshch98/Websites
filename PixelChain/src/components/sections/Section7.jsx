import React from "react";
import { useNavigate } from "react-router-dom";

const Section7 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length === 0) return null;

  const mainArticle = articles[0];
  const secondArticle = articles[1];
  const sideArticles = articles.slice(4, 6);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full py-10 sm:py-12 lg:py-16">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-6">
        {/* GRID - align all columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[300px_1fr] lg:grid-cols-[605px_1fr_1fr] gap-6 items-stretch">

          {/* First Column (Main Big) */}
          {mainArticle && (
            <div
              className="relative w-full cursor-pointer flex flex-col h-full group"
              onClick={() => handleClick(mainArticle)}
            >
              <div className="relative overflow-hidden rounded-lg h-full shadow-lg">
                <img
                  src={mainArticle.featuredImage || "https://placehold.co/600x400"}
                  alt={mainArticle.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent text-white p-4 flex flex-col justify-end rounded-lg">
                  {mainArticle.category && (
                    <div className="bg-[#00c003] text-white text-xs px-2 py-1 rounded w-fit mb-2">
                      {mainArticle.category}
                    </div>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1 leading-[32px] group-hover:text-[#00a802] transition-colors">
                    {mainArticle.title}
                  </h2>
                  {mainArticle.excerpt && (
                    <p className="text-white text-sm opacity-90 mt-2 line-clamp-3">
                      {mainArticle.excerpt}
                    </p>
                  )}
                  <div className="flex items-center text-xs text-white opacity-75 mt-3">
                    <span>{mainArticle.author?.name || "SafeChain Team"}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <span>
                      {mainArticle.createdAt
                        ? new Date(mainArticle.createdAt).toLocaleDateString()
                        : "Recently Published"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Second Column (Highlighted - Middle) */}
          {secondArticle && (
            <div
              className="relative w-full cursor-pointer group flex flex-col h-full"
              onClick={() => handleClick(secondArticle)}
            >
              <div className="relative overflow-hidden rounded-lg h-full shadow-md">
                <img
                  src={secondArticle.featuredImage || "https://placehold.co/600x400"}
                  alt={secondArticle.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/40 to-transparent text-white flex flex-col justify-end rounded-b-lg">
                  {secondArticle.category && (
                    <div className="bg-[#00c003] text-white text-xs px-2 py-1 rounded w-fit mb-2">
                      {secondArticle.category}
                    </div>
                  )}
                  <h2 className="text-xl sm:text-2xl font-semibold leading-snug mt-1 group-hover:text-[#00a802] transition-colors">
                    {secondArticle.title}
                  </h2>
                  <div className="flex items-center text-xs text-white opacity-75 mt-3">
                    <span>{secondArticle.author?.name || "SafeChain Team"}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <span>
                      {secondArticle.createdAt
                        ? new Date(secondArticle.createdAt).toLocaleDateString()
                        : "Recently Published"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Third Column (Two Cards - Right side) */}
          <div className="flex flex-col justify-between h-full space-y-4 sm:space-y-6">
            {sideArticles.map((article) => (
              <div
                key={article._id}
                className="relative group overflow-hidden rounded-lg cursor-pointer flex-1 shadow-md"
                onClick={() => handleClick(article)}
              >
                <img
                  src={article.featuredImage || "https://placehold.co/400x250"}
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent text-white p-3 sm:p-4 flex flex-col justify-end">
                  {article.category && (
                    <div className="bg-[#00c003] text-white text-[10px] sm:text-xs px-2 py-1 rounded w-fit mb-2">
                      {article.category}
                    </div>
                  )}
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug group-hover:text-[#00a802] transition-colors">
                    {article.title.length > 60
                      ? article.title.slice(0, 60) + "…"
                      : article.title}
                  </h2>
                  <div className="flex items-center text-[10px] sm:text-xs text-white opacity-75 mt-2 sm:mt-3">
                    <span>{article.author?.name || "SafeChain Team"}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <span>
                      {article.createdAt
                        ? new Date(article.createdAt).toLocaleDateString()
                        : "Recently Published"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section7;
