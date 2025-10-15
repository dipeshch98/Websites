import React from "react";
import { Link } from "react-router-dom";

const Section7 = ({ articles }) => {
  if (!articles || articles.length <= 100) return null;

  // Slice the articles for this section
  const slicedArticles = articles.slice(150, 156); // total 6 articles
  const mainArticles = slicedArticles.slice(0, 2); // first 2 for left
  const sideArticles = slicedArticles.slice(2); // remaining 4 for right

  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-slate-800">Ethereum & NFTs</h2>
          <p className="text-sm text-gray-500">
            Guides and market outlooks to keep your strategy sharp.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr]">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {mainArticles.map((article, idx) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="flex flex-col rounded-2xl border border-white/60 bg-white/90 overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,198,255,0.2),0_12px_30px_rgba(15,23,42,0.14)]"
              >
                <div className="relative">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className={`w-full object-cover ${idx === 0 ? "h-72" : "h-56"}`}
                  />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <span
                    className={`inline-flex w-max items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
                  >
                    {article.category}
                  </span>
                  <h3
                    className={`font-semibold text-slate-800 leading-snug ${
                      idx === 0 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
                  )}
                  {article.createdAt && (
                    <div className="flex gap-2 text-[12px] font-semibold uppercase tracking-wider text-gray-400">
                      <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="flex flex-row rounded-2xl border border-white/60 bg-white/90 overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,198,255,0.15)]"
              >
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-32 h-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <span
                    className={`inline-flex w-max items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#8B5CF6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
                  >
                    {article.category}
                  </span>
                  <h4 className="text-base font-semibold text-slate-800 leading-snug">
                    {article.title}
                  </h4>
                  {article.excerpt && (
                    <p className="text-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
