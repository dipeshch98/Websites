import React from "react";
import { useNavigate } from "react-router-dom";

const Section1 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 60) return null; // Ensure enough articles

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  // Articles start from index 55
  const sectionArticles = articles.slice(55, 63);
  const mainArticle = sectionArticles[0];
  const sideArticles = sectionArticles.slice(1, 4);
  const gridArticles = sectionArticles.slice(4);

  return (
    <section className="bg-white text-gray-200 py-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 space-y-10">

        {/* ========== Top Section ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Main Article (Large Left) */}
          {mainArticle && (
            <div
              onClick={() => handleClick(mainArticle)}
              className="cursor-pointer group relative rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={mainArticle.featuredImage || "https://placehold.co/800x500"}
                  alt={mainArticle.title}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="bg-[#00c003] text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                    {mainArticle.category || "News"}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white group-hover:text-[#00c003] transition-colors duration-300">
                    {mainArticle.title}
                  </h2>
                  <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                    {mainArticle.excerpt || "No description available."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Side Articles (Right Column) */}
          <div className="grid grid-rows-3 gap-5">
            {sideArticles.map((article, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(article)}
                className="cursor-pointer group flex items-center gap-4 bg-[#111] rounded-lg overflow-hidden p-3 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="w-1/3 overflow-hidden rounded-md">
                  <img
                    src={article.featuredImage || "https://placehold.co/400x300"}
                    alt={article.title}
                    className="w-full h-[100px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="w-2/3">
                  <span className="text-xs text-[#00c003] font-semibold uppercase">
                    {article.category || "News"}
                  </span>
                  <h3 className="text-sm md:text-base font-semibold group-hover:text-[#00c003] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {article.excerpt || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== Bottom Grid Section ========== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridArticles.map((article, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(article)}
              className="bg-[#111] rounded-lg overflow-hidden cursor-pointer group hover:shadow-[0_0_10px_#00c00360] transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={article.featuredImage || "https://placehold.co/400x250"}
                  alt={article.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-[#00c003] font-semibold uppercase">
                  {article.category || "News"}
                </span>
                <h4 className="font-bold text-base mt-1 text-white group-hover:text-[#00c003] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                  {article.excerpt || "No description available."}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section1;
