// src/components/Section3.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles }) => {
  const navigate = useNavigate();
  const sectionArticles = articles?.slice(50, 53) || []; // new indices

  if (sectionArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const [smallArticle1, smallArticle2, bigArticle] = sectionArticles;

  return (
    <section className="w-full bg-gray-200 pb-[4rem]">
      <div className="max-w-[1450px] mx-auto px-[2rem]">

        <div className="flex flex-col lg:flex-row gap-[2rem]">
          {/* Small Article 1 */}
          {smallArticle1 && (
            <div
              className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex flex-col bg-white"
              style={{ flexBasis: "25%" }}
              onClick={() => handleClick(smallArticle1)}
            >
              <img
                src={smallArticle1.featuredImage || "https://placehold.co/400x250"}
                alt={smallArticle1.title}
                className="w-full h-[16rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[0.75rem] flex flex-col justify-between">
                <div>
                  <span className="bg-[#ff6700] text-white text-[0.7rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                    {smallArticle1.category || "News"}
                  </span>
                  <h3 className="font-semibold text-[0.95rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                    {smallArticle1.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-[0.25rem]">
                  👤 {smallArticle1.author?.name || "Expert"} • 📅{" "}
                  {smallArticle1.createdAt
                    ? new Date(smallArticle1.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}

          {/* Small Article 2 */}
          {smallArticle2 && (
            <div
              className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex flex-col bg-white"
              style={{ flexBasis: "25%" }}
              onClick={() => handleClick(smallArticle2)}
            >
              <img
                src={smallArticle2.featuredImage || "https://placehold.co/400x250"}
                alt={smallArticle2.title}
                className="w-full h-[16rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[0.75rem] flex flex-col justify-between">
                <div>
                  <span className="bg-[#ff6700] text-white text-[0.7rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                    {smallArticle2.category || "News"}
                  </span>
                  <h3 className="font-semibold text-[0.95rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                    {smallArticle2.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-[0.25rem]">
                  👤 {smallArticle2.author?.name || "Expert"} • 📅{" "}
                  {smallArticle2.createdAt
                    ? new Date(smallArticle2.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}

          {/* Big Article */}
          {bigArticle && (
            <div
              className="cursor-pointer group rounded-xl overflow-hidden shadow-lg flex flex-col bg-white"
              style={{ flexBasis: "50%" }}
              onClick={() => handleClick(bigArticle)}
            >
              <img
                src={bigArticle.featuredImage || "https://placehold.co/800x600"}
                alt={bigArticle.title}
                className="w-full h-[15rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[1rem] flex flex-col justify-between">
                <div>
                  <span className="bg-[#ff6700] text-white text-[0.8rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                    {bigArticle.category || "News"}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                    {bigArticle.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-[0.5rem]">
                  👤 {bigArticle.author?.name || "Expert"} • 📅{" "}
                  {bigArticle.createdAt
                    ? new Date(bigArticle.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section3;
