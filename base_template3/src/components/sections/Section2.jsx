import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles }) => {
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

  // Take first 4 articles for Section2
  const sectionArticles = articles.slice(30, 34);

  return (
    <section className="py-12 sm:py-14 lg:py-20 bg-gradient-to-tr from-[#f3f8ff] via-[#f9fafb] to-[#f1f5f9] text-[#1A1A1A] font-[Karla,sans-serif]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Trending Now
          </h2>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#00C6FF] transition-all duration-300 hover:gap-3"
          >
            View Dashboard
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectionArticles.map((article, idx) => (
            <div
              key={article._id || idx}
              data-animate
              className="group flex items-center gap-5 rounded-[1rem] border border-[#E5E7EB] bg-white/80 p-5 md:p-6 shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-[#f1f5f9]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1px_rgba(148,163,184,0.2),0_12px_30px_rgba(15,23,42,0.14)] cursor-pointer"
              onClick={() => handleClick(article)}
            >
              <span className="text-3xl font-black text-[#D1D5DB] transition-colors duration-300 group-hover:text-[#00C6FF]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold leading-tight transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{article.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
