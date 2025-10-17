import React from "react";
import { useNavigate } from "react-router-dom";

const Section7 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length || articles.length <= 90) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  // Indexing starts from 90
  const mainArticle = articles[90];
  const asideArticles = articles.slice(91, 94); // next 3 articles

  return (
    <section id="science" className="px-4 md:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] space-y-10 overflow-hidden">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-[#ff3333]">
            Science & Environment
          </p>
          <h2 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
            Discoveries that reshape our understanding
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Main article */}
          {mainArticle && (
            <article
              className="group rounded-2xl border border-[#222222] bg-[#151515] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition hover:shadow-[0_12px_35px_rgba(255,51,51,0.25)] cursor-pointer"
              onClick={() => navigate(`/article/${mainArticle.slug}`, { state: { article: mainArticle } })}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span className="rounded-full border border-white/20 px-3 py-1 text-gray-400">
                    {mainArticle.category || "Deep Dive"}
                  </span>
                  <span>{mainArticle.createdAt ? new Date(mainArticle.createdAt).toLocaleDateString() : ""}</span>
                </div>
                <h3 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
                  {mainArticle.title}
                </h3>
                {mainArticle.excerpt && <p className="text-base text-gray-400">{mainArticle.excerpt}</p>}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333]">
                  Dive deeper <span aria-hidden="true">&#10148;</span>
                </span>
              </div>
            </article>
          )}

          {/* Aside articles */}
          <div className="space-y-4">
            {asideArticles.map((article, idx) => (
              <article
                key={article._id}
                className="group flex items-start gap-4 rounded-2xl border border-[#222222] bg-[#111111]/70 p-5 transition hover:border-[#ff3333]/50 cursor-pointer"
                onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
              >
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff3333] text-sm font-semibold text-[#0a0a0a]">
                  {idx + 1}
                </span>
                <div className="space-y-2">
                  <h4 className="font-[Lato] text-base font-semibold text-white">
                    {article.title}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
