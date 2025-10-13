import React from "react";
import { Link } from "react-router-dom";

const Section1 = ({ articles }) => {
  if (!articles || articles.length === 0)
    return (
      <p className="text-center py-10 text-gray-500">No articles available.</p>
    );

  const featuredArticle = articles[0];
  const smallArticles = articles.slice(1, 6); // next 5 articles

  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured Article */}
          {featuredArticle && (
            <article className="relative flex h-64 overflow-hidden rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:h-[28rem]">
              <img
                src={featuredArticle.featuredImage}
                alt={featuredArticle.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              {featuredArticle.category && (
                <div className="absolute left-5 top-5 inline-flex items-center rounded-full bg-blue-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {featuredArticle.category.toUpperCase()}
                </div>
              )}
              <div className="relative mt-auto space-y-3 p-6 text-white">
                <h2 className="text-2xl font-semibold leading-snug">
                  {featuredArticle.title}
                </h2>
                {featuredArticle.excerpt && (
                  <p className="hidden text-sm text-slate-200 sm:block">
                    {featuredArticle.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <span>
                    {featuredArticle.updatedAt
                      ? new Date(featuredArticle.updatedAt).toLocaleDateString()
                      : "Recently Published"}
                  </span>
                </div>
              </div>
              <Link
                to={`/article/${featuredArticle.slug}`}
                state={{ article: featuredArticle }}
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read more</span>
              </Link>
            </article>
          )}

          {/* Small Articles */}
          {smallArticles.map((article) => (
            <article
              key={article._id}
              className="relative flex h-60 flex-col overflow-hidden rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)] justify-end"
            >
              <img
                src={article.featuredImage}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              {article.category && (
                <div className="absolute left-4 top-4 inline-flex items-center rounded bg-blue-500/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-white">
                  {article.category}
                </div>
              )}
              <div className="relative z-10 space-y-3 p-5 pt-16 text-white">
                <h3 className="text-lg font-semibold leading-tight">
                  {article.title}
                </h3>
                <div className="text-xs text-slate-200">
                  {article.updatedAt
                    ? new Date(article.updatedAt).toLocaleDateString()
                    : "Recently Published"}
                </div>
              </div>
              {/* Make the entire article clickable */}
              <Link
                to={`/article/${article.slug}`}
                state={{ article }}
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read more</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
