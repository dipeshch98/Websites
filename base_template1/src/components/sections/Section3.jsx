// src/components/Section3.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles }) => {
  const navigate = useNavigate();

  // Take 6 articles starting from index 30
  const sectionArticles = articles?.slice(30, 36) || [];

  if (sectionArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-[4rem] bg-white">
      <div className="mx-auto max-w-[1200px] px-[1.5rem]">
        {/* Heading */}
        <h2 className="relative mb-[2rem] pl-[1rem] text-[1.75rem] font-semibold text-slate-900">
          <span className="absolute left-0 top-1/2 h-full w-[0.25rem] -translate-y-1/2 bg-gradient-to-b from-[#2563eb] to-[#3b82f6] rounded-full"></span>
          Latest News
        </h2>

        {/* Articles Grid */}
        <div className="grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3">
          {sectionArticles.map((article) => (
            <article
              key={article._id}
              onClick={() => handleClick(article)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#2563eb] cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={article.featuredImage || "https://placehold.co/400x250"}
                  alt={article.title}
                  className="h-[13rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-[0.75rem] p-[1.5rem]">
                {article.category && (
                  <span className="bg-[#2563eb]/10 text-[#2563eb] text-[0.75rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit">
                    {article.category.toUpperCase()}
                  </span>
                )}
                <h3 className="text-[1.1rem] font-semibold text-slate-900 line-clamp-2 group-hover:text-[#2563eb] transition-colors">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="text-sm text-slate-600 line-clamp-3">{article.excerpt}</p>
                )}
                <p className="text-xs text-gray-500">
                  👤 {article.author?.name || "Expert"} • 📅{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
                <span className="inline-flex items-center gap-[0.25rem] text-sm font-semibold text-[#2563eb] transition-all duration-300 group-hover:gap-[0.5rem]">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
