import React from "react";

export default function Section5({ articles }) {
  if (!articles || articles.length === 0) return null;

  const displayedArticles = articles.slice(0, 6); // Keep only first 6 articles

  return (
    <section className="max-w-[1200px] mx-auto my-[60px] px-5 grid grid-cols-3 gap-5 max-sm:grid-cols-1 max-sm:gap-4 max-md:grid-cols-2 max-md:gap-[18px]">
      {displayedArticles.map((article, idx) => (
        <div
          key={idx}
          className="bg-bg-card rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
          onClick={() => window.location.href = `/article/${article.slug}`}
        >
          <div
            className="w-full h-[200px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${article.featuredImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-5 max-sm:p-4 bg-neutral-900">
            <span className="inline-block bg-[#f7931a] text-black px-3 py-1 rounded-sm text-xs font-bold mb-2.5 uppercase">
              {article.category}
            </span>
            <h3 className="text-lg mb-2.5 leading-normal font-semibold text-white">
              {article.title}
            </h3>
            <p className="text-[13px] text-gray-400 text-text-secondary leading-relaxed">
              {article.excerpt || article.description || ""}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
