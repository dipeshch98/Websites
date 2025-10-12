// src/components/Section7.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section7 = ({ articles }) => {
  const navigate = useNavigate();
  const sectionArticles = articles?.slice(60, 65) || []; // 5 articles

  if (sectionArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gray-100 py-[4rem]">
      <div className="max-w-[1450px] mx-auto px-[2rem]">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#1d4ed8] pl-[1rem] mb-[3rem]">
          FEATURED STORIES
        </h2>

        {/* Top Article */}
        {sectionArticles[0] && (
          <div
            className="cursor-pointer group rounded-xl overflow-hidden shadow-md bg-white mb-[2rem]"
            onClick={() => handleClick(sectionArticles[0])}
          >
            <img
              src={sectionArticles[0].featuredImage || "https://placehold.co/1200x600"}
              alt={sectionArticles[0].title}
              className="w-full h-[28rem] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-[1.5rem]">
              {sectionArticles[0].category && (
                <span className="bg-[#ff6700] text-white text-[0.85rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                  {sectionArticles[0].category.toUpperCase()}
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors mb-[0.5rem]">
                {sectionArticles[0].title}
              </h3>
              <p className="text-gray-700 text-lg mb-6 line-clamp-4">
            {sectionArticles.excerpt || "Read this featured article to learn more..."}
          </p>

              <p className="text-xs text-gray-500">
                👤 {sectionArticles[0].author?.name || "Expert"} • 📅{" "}
                {sectionArticles[0].createdAt
                  ? new Date(sectionArticles[0].createdAt).toLocaleDateString()
                  : "Recently Published"}
              </p>
            </div>
          </div>
        )}

        {/* Second Row: 4 Smaller Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          {sectionArticles.slice(1).map((article) => (
            <div
              key={article._id}
              className="cursor-pointer group rounded-xl overflow-hidden shadow-sm bg-white"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x250"}
                alt={article.title}
                className="w-full h-[16rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[1rem]">
                {article.category && (
                  <span className="bg-[#ff6700] text-white text-[0.75rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                    {article.category.toUpperCase()}
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#1d4ed8] transition-colors mb-[0.25rem]">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500">
                  👤 {article.author?.name || "Expert"} • 📅{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
