import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section3({ articles }) {
  const navigate = useNavigate();

  if (!articles || articles.length === 0)
    return (
      <p className="text-center text-gray-500 py-10">
        No articles available.
      </p>
    );

  // Just one special article (e.g., index 120)
  const article = articles[126] || articles[0];

  const handleClick = () => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section
      className="relative bg-black text-white py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${article.featuredImage || "https://placehold.co/1200x700"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="inline-block bg-[#00c003] text-black text-xs font-semibold uppercase px-4 py-1 rounded-full mb-5 tracking-wide">
          {article.category || "SafeChain Exclusive"}
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          {article.title}
        </h2>

        {article.excerpt && (
          <p className="max-w-2xl mx-auto text-gray-200 text-base md:text-lg mb-8">
            {article.excerpt}
          </p>
        )}

        <button
          onClick={handleClick}
          className="bg-[#00c003] hover:bg-[#00a802] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Read Full Article →
        </button>

        <div className="mt-8 text-sm text-gray-400">
          📅{" "}
          {article.createdAt
            ? new Date(article.createdAt).toLocaleDateString()
            : "Recently Published"}{" "}
          • ✍️ {article.author?.name || "SafeChain Team"}
        </div>
      </div>

      {/* Decorative Blur Edge */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-transparent to-black/70"></div>
    </section>
  );
}
