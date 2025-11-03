import React from "react";
import { useNavigate } from "react-router-dom";

const Section4 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 8) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const sectionArticles = articles.slice(72, 80); // 8 articles
  const leftArticles = sectionArticles.slice(0, 4); // Right side content moves to left
  const mainArticle = sectionArticles[4]; // Main article moves to right
  const extraArticles = sectionArticles.slice(5); // remaining small cards if needed

  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 space-y-12">

        {/* ===== Section Title ===== */}
        <div className="flex items-center mb-8">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold px-6 text-[#00c003] tracking-wide uppercase">
            Digital Asset Insights

          </h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* ===== Top Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ===== Left Column: 4 small articles ===== */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* First two articles in horizontal row */}
            <div className="flex flex-col sm:flex-row gap-4">
              {leftArticles.slice(0, 2).map((article, idx) => (
                <div
                  key={idx}
                  onClick={() => handleClick(article)}
                  className="cursor-pointer group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex-1 flex items-center gap-4 bg-[#f9f9f9] p-3"
                >
                  <div className="w-1/3 overflow-hidden rounded-md">
                    <img
                      src={article.featuredImage || "https://placehold.co/400x250"}
                      alt={article.title}
                      className="w-full h-[100px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-2/3">
                    <span className="text-xs text-[#00c003] font-semibold uppercase">
                      {article.category || "Update"}
                    </span>
                    <h4 className="font-bold text-base mt-1 text-gray-900 line-clamp-2 group-hover:text-[#00c003] transition-colors duration-300">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {article.excerpt || "No description available."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining articles stacked vertically */}
            {leftArticles.slice(2).map((article, idx) => (
              <div
                key={idx + 2}
                onClick={() => handleClick(article)}
                className="cursor-pointer group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 bg-[#f9f9f9] p-3"
              >
                <div className="w-1/3 overflow-hidden rounded-md">
                  <img
                    src={article.featuredImage || "https://placehold.co/400x250"}
                    alt={article.title}
                    className="w-full h-[100px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-2/3">
                  <span className="text-xs text-[#00c003] font-semibold uppercase">
                    {article.category || "Update"}
                  </span>
                  <h4 className="font-bold text-base mt-1 text-gray-900 line-clamp-2 group-hover:text-[#00c003] transition-colors duration-300">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {article.excerpt || "No description available."}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* ===== Right Column: Main Feature Article ===== */}
          {mainArticle && (
            <div
              onClick={() => handleClick(mainArticle)}
              className="lg:col-span-6 cursor-pointer group relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={mainArticle.featuredImage || "https://placehold.co/800x500"}
                alt={mainArticle.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-6">
                <div>
                  <span className="bg-[#00c003] text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase">
                    {mainArticle.category || "Breaking"}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                    {mainArticle.title}
                  </h2>
                  <p className="text-gray-200 text-sm mt-2 line-clamp-3">
                    {mainArticle.excerpt || "Click to read the full story."}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Section4;
