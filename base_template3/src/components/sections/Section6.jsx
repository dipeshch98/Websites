import React from "react";
import { Link } from "react-router-dom";

const Section6 = ({ articles }) => {
  if (!articles || articles.length <= 100) return null;

  // Get only 4 articles starting from index 100
  const slicedArticles = articles.slice(100, 104);

  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-1">Blockchain & DeFi</h2>
            <p className="text-sm text-gray-500">
              Long-form explainers and deep dives from our research desk.
            </p>
          </div>
          <Link
            to="/related-news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C6FF] transition-all duration-200 hover:gap-3"
          >
            More Related News <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {slicedArticles.map((article) => (
            <Link
              key={article._id}
              to={`/article/${article.slug}`} // Navigate to dynamic article page
              className="flex flex-col h-full rounded-2xl border border-white/70 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,198,255,0.2),0_12px_30px_rgba(15,23,42,0.14)]"
            >
              <div
                className="mb-5 h-48 w-full rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${article.featuredImage})` }}
              ></div>

              <div className="flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-3">
                  <span
                    className={`inline-flex w-max items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
                  >
                    {article.category}
                  </span>

                  <h3 className="text-xl font-semibold text-slate-800 leading-snug transition-colors duration-200 hover:text-[#00C6FF]">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {article.excerpt || article.content.substring(0, 120) + "..."}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-gray-400">
                  <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
