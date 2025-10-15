import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section1 = ({ articles }) => {
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

  // Take the first 5 articles for this section
  const sectionArticles = articles.slice(0, 5);

  return (
    <section className="py-12 sm:py-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {sectionArticles.map((article, idx) => (
            <article
              key={article._id}
              data-animate
              className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl text-white opacity-0 translate-y-4 transition duration-500
                ${idx === 0 ? "min-h-[560px] lg:row-span-2 shadow-[0_0_1px_rgba(148,163,184,0.2),0_12px_30px_rgba(15,23,42,0.14)]" : "min-h-[260px] shadow-[0_8px_24px_rgba(15,23,42,0.08)]"}
                bg-[#0f172a] hover:-translate-y-1 hover:shadow-2xl
              `}
              onClick={() => handleClick(article)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.featuredImage || "https://placehold.co/600x400"})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#02061799] to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-3 p-6 sm:p-8">
                <span className="inline-flex w-max items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {article.category || "News"}
                </span>
                <h3 className={`${idx === 0 ? "text-3xl sm:text-4xl font-bold" : "text-xl font-bold"} leading-tight`}>
                  {article.title}
                </h3>
                <div className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                  {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recently Published"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
