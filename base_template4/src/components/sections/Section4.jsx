import React from "react";
import { useNavigate } from "react-router-dom";

const Section4 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length || articles.length <= 50) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  // Starting from index 50
  const sectionArticles = articles.slice(50);
  const mainArticle = sectionArticles[0];
  const sideArticles = sectionArticles.slice(1, 4);

  return (
    <section id="technology" className="px-4 md:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] space-y-10 overflow-hidden">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#ff3333]">
              Technology & Science
            </p>
            <h2 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
              Innovation shaping the next decade
            </h2>
          </div>
          <a
            href="#technology"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333] transition hover:gap-3 hover:text-[#ff5555]"
          >
            See more <span aria-hidden="true">&#10132;</span>
          </a>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Main article */}
          {mainArticle && (
            <article
              className="group relative overflow-hidden rounded-2xl border border-[#222222] bg-[#151515] shadow-[0_20px_45px_rgba(0,0,0,0.45)] transition hover:shadow-[0_12px_35px_rgba(255,51,51,0.25)] cursor-pointer"
              onClick={() =>
                navigate(`/article/${mainArticle.slug}`, { state: { article: mainArticle } })
              }
            >
              {mainArticle.featuredImage && (
                <img
                  src={mainArticle.featuredImage}
                  alt={mainArticle.title}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="space-y-4 px-6 pb-8 pt-6">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span className="rounded-full border border-white/20 px-3 py-1 text-gray-400">
                    {mainArticle.category || "Technology"}
                  </span>
                  <span>{mainArticle.createdAt ? new Date(mainArticle.createdAt).toLocaleDateString() : ""}</span>
                </div>
                <h3 className="font-[Lato] text-2xl font-bold text-white">
                  {mainArticle.title}
                </h3>
                <p className="text-sm text-gray-400">{mainArticle.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333]">
                  Explore insights <span aria-hidden="true">&#10132;</span>
                </span>
              </div>
            </article>
          )}

          {/* Side small articles */}
          <div className="space-y-4 rounded-2xl border border-[#222222] bg-[#1a1a1a]/70 p-6">
            {sideArticles.map((article) => (
              <article
                key={article._id}
                className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition hover:border-[#ff3333]/50 hover:bg-white/5 cursor-pointer"
                onClick={() =>
                  navigate(`/article/${article.slug}`, { state: { article } })
                }
              >
                {article.featuredImage && (
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    {article.category || "Technology"}
                  </p>
                  <h4 className="font-[Lato] text-base font-semibold text-white">
                    {article.title}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
