import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles }) => {
  const navigate = useNavigate();

  // IntersectionObserver for animation
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!articles || articles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  // Take first 4 articles for this section
  const sectionArticles = articles.slice(21, 25);

  return (
    <section id="defi" className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
              Business News
            </h2>
            <p className="text-sm text-[#6b7280] sm:text-base">
              Daily coverage from institutional moves to market structure.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C6FF] transition hover:gap-3"
          >
            View All
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sectionArticles.map((article, idx) => (
            <article
              key={article._id || idx}
              data-animate
              onClick={() => handleClick(article)}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-[#f1f5f9]/70 transition hover:-translate-y-1 hover:shadow-[0_0_1px_rgba(148,163,184,0.2),0_12px_30px_rgba(15,23,42,0.14)] cursor-pointer opacity-0 translate-y-4"
            >
              <div
                className="mb-5 h-48 w-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${article.featuredImage || "https://placehold.co/400x300"})`,
                }}
              ></div>
              <div className="flex flex-1 flex-col justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex w-max items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {article.category || "News"}
                  </span>
                  <h3 className="text-xl font-semibold leading-snug text-[#0f172a] transition group-hover:text-[#00C6FF]">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b7280]">
                    {article.excerpt || "No description available."}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
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

export default Section3;
