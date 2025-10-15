import React from "react";
import { useNavigate } from "react-router-dom";

const Section4 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length === 0) return null;

  // Take first 5 articles for this section
  const sectionArticles = articles.slice(10, 15);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section id="nft" className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,transparent_55%)]" />

      {/* Container */}
      <div className="relative mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              Spotlight
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Stories
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C6FF] transition-all hover:gap-3"
          >
            Explore Series
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {sectionArticles.map((article, index) => (
            <article
              key={article._id || index}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0f172a]/40 text-white shadow-[0_25px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.45)] ${
                index === 0 ? "lg:row-span-2 lg:min-h-[520px]" : ""
              }`}
              onClick={() => handleClick(article)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.featuredImage || "https://placehold.co/600x400"})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent" />
              <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-8">
                <span
                  className={`inline-flex w-max items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white`}
                >
                  {article.category || "News"}
                </span>
                <h3 className="text-xl font-bold leading-tight sm:text-xl">
                  {article.title}
                </h3>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  <span>
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
