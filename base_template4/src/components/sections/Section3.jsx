import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  const mainArticle = articles[30];
  const subArticles = articles.slice(31, 33);
  const asideArticles = articles.slice(33, 36);

  return (
    <section className="px-4 md:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] rounded-2xl border border-[#222222] bg-[#151515]/60 p-8 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Main content */}
          <div className="flex-1 flex flex-col gap-6">
            <header className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-[#ff3333]">Business Spotlight</p>
              <h2 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
                Markets, Innovation & Strategy
              </h2>
            </header>

            {/* Main featured article */}
            {mainArticle && (
              <article
                className="group grid md:grid-cols-[1.1fr_1fr] gap-6 rounded-2xl border border-[#222222] bg-[#1a1a1a]/40 p-6 cursor-pointer transition hover:border-[#ff3333] hover:shadow-[0_12px_35px_rgba(255,51,51,0.25)]"
                onClick={() => navigate(`/article/${mainArticle.slug}`, { state: { article: mainArticle } })}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                    <span className="rounded-full border border-white/20 px-3 py-1 text-[#b0b0b0]">
                      {mainArticle.category || "Business"}
                    </span>
                    <span>{mainArticle.createdAt ? new Date(mainArticle.createdAt).toLocaleDateString() : ""}</span>
                  </div>
                  <h3 className="font-[Lato] text-xl md:text-2xl font-semibold text-white">
                    {mainArticle.title}
                  </h3>
                  <p className="text-sm text-[#b0b0b0]">{mainArticle.excerpt}</p>
                  <span className="text-[#ff3333] font-semibold">Read analysis →</span>
                </div>
                {mainArticle.featuredImage && (
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={mainArticle.featuredImage}
                      alt={mainArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </article>
            )}

            {/* Sub-feature grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {subArticles.map((article) => (
                <article
                  key={article._id}
                  className="group flex flex-col gap-4 rounded-2xl border border-[#222222] bg-[#1a1a1a]/40 p-6 cursor-pointer transition hover:border-[#ff3333] hover:shadow-[0_12px_35px_rgba(255,51,51,0.25)]"
                  onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
                >
                  <h3 className="font-[Lato] text-lg font-semibold text-white">{article.title}</h3>
                  <p className="text-sm text-[#b0b0b0]">{article.excerpt}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}
                  </span>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full max-w-sm flex flex-col gap-6 rounded-2xl border border-[#222222] bg-[#111111]/80 p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-[#ff3333] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0a0a0a]">
                Boardroom
              </span>
              <p className="text-sm text-gray-400">Executive briefings</p>
            </div>

            <div className="flex flex-col gap-5 text-sm text-[#b0b0b0]">
              {asideArticles.map((article) => (
                <article
                  key={article._id}
                  className="group rounded-2xl border border-[#222222] bg-[#0a0a0a]/60 p-4 cursor-pointer transition hover:border-[#ff3333] hover:bg-[#0a0a0a]/80"
                  onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ff3333]">{article.category || "Business"}</p>
                  <h4 className="mt-2 font-[Lato] text-base font-semibold text-white">{article.title}</h4>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}
                  </p>
                </article>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex w-full justify-center items-center gap-2 rounded-xl bg-[#ff3333] py-3 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#ff5555]"
            >
              See all business analysis →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Section3;
