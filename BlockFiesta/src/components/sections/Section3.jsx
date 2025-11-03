import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 1) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const sectionArticles = articles.slice(75,77); // You can adjust this range

  return (
    <section className="bg-[#323232] text-gray-800 py-16 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 space-y-16">
        {sectionArticles.map((article, idx) => (
          <div
            key={article._id || idx}
            onClick={() => handleClick(article)}
            className={`cursor-pointer flex flex-col bg-white lg:flex-row items-center justify-between gap-8 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* ===== Left Content ===== */}
            <div className="flex-1 space-y-4">
              <span className="bg-[#00c003] text-black text-xs font-bold px-2 py-1 rounded uppercase">
                {article.category || "Technology"}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                {article.title || "No Title"}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                {article.excerpt ||
                  "No description available. Click to read the full article."}
              </p>
              <div className="flex items-center gap-4 pt-2 text-sm text-gray-500">
                <span>👤 {article.author?.name || "BlockFiesta Expert"}</span>
                <span>
                  📅{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </span>
              </div>
              <button className="mt-4 px-4 py-2 border border-[#00c003] text-[#00c003] rounded-md hover:bg-[#00c003] hover:text-black transition-all duration-300">
                Read More →
              </button>
            </div>

            {/* ===== Right Image ===== */}
            <div className="flex-1 overflow-hidden rounded-lg">
              <img
                src={article.featuredImage || "https://placehold.co/600x400"}
                alt={article.title}
                className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
