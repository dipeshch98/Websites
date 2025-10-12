// src/components/Section2.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles }) => {
  const navigate = useNavigate();
  const sectionArticles = articles?.slice(42, 45) || [];

  if (sectionArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const [leftArticle, rightArticle1, rightArticle2] = sectionArticles;

  return (
    <section className="w-full bg-gray-200 pt-[4rem] pb-[2rem]">
      <div className="max-w-[1450px] mx-auto px-[2rem]">
        <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#ff6700] pl-[1rem] mb-[3rem]">
          Latest Highlights
        </h2>

        <div className="flex flex-col lg:flex-row gap-[2rem]">
          {/* Left Big Article */}
          {leftArticle && (
            <div
              className="cursor-pointer group rounded-xl overflow-hidden shadow-lg flex-1"
              style={{ flexBasis: "48%" }} // decreased width slightly
              onClick={() => handleClick(leftArticle)}
            >
              <img
                src={leftArticle.featuredImage || "https://placehold.co/800x600"}
                alt={leftArticle.title}
                className="w-full h-[15rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[1rem] bg-white flex flex-col justify-between">
                <div>
                  <span className="bg-[#ff6700] text-white text-[0.8rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.5rem]">
                    {leftArticle.category || "News"}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                    {leftArticle.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mt-[0.5rem]">
                  👤 {leftArticle.author?.name || "Expert"} • 📅{" "}
                  {leftArticle.createdAt
                    ? new Date(leftArticle.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}

          {/* Right Small Articles */}
          <div className="flex flex-1 gap-[2rem]" style={{ flexBasis: "52%" }}> 
            {[rightArticle1, rightArticle2].map(
              (article, idx) =>
                article && (
                  <div
                    key={article._id}
                    className="cursor-pointer group rounded-xl overflow-hidden shadow-sm flex-1 flex flex-col bg-white"
                    onClick={() => handleClick(article)}
                  >
                    <img
                      src={article.featuredImage || "https://placehold.co/400x250"}
                      alt={article.title}
                      className="w-full h-[14rem] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-[0.75rem] flex flex-col flex-1 justify-between">
                      <div>
                        <span className="bg-[#ff6700] text-white text-[0.7rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                          {article.category || "News"}
                        </span>
                        <h3 className="font-semibold text-[0.95rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                          {article.title}
                        </h3>
                      </div>
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
      </div>
    </section>
  );
};

export default Section2;
