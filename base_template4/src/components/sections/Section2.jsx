import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  // Divide articles into columns
  const leftArticles = articles.slice(0, 4);
  const middleArticles = articles.slice(4, 8);
  const rightArticles = articles.slice(8, 11);

  // Render individual articles with optional image & excerpt
  const renderArticles = (articles, showImages = [], showExcerpt = false) =>
    articles.map((article, index) => (
      <article
        key={article._id}
        className="group space-y-3 rounded-xl border border-transparent bg-[#1a1a1a]/40 p-4 transition hover:border-[#ff3333] cursor-pointer"
        onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
      >
        <h5 className=" text-base font-semibold text-white transition group-hover:text-[#ff3333]">
          {article.title}
        </h5>
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
          <span className="text-[#ff3333]">{article.category || "General"}</span>
          <span>{article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}</span>
        </div>

        {showImages[index] && article.featuredImage && (
          <div className="overflow-hidden rounded-xl mt-2">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="h-40 w-full object-cover"
            />
          </div>
        )}

        {showExcerpt && article.excerpt && (
          <p className="text-sm text-gray-400 mt-2">{article.excerpt}</p>
        )}
      </article>
    ));

  const renderColumn = (articles, title, showImages, showExcerpt = false) => (
    <div className="flex min-w-0 flex-col gap-6 rounded-2xl border border-gray-700 bg-[#0f0f0f]/60 p-6">
      <div className="flex items-center gap-4 text-gray-400">
        <span className="h-px flex-1 bg-white/10"></span>
        <h4 className="font-[Lato] text-lg font-semibold uppercase tracking-[0.3em] text-white">
          {title}
        </h4>
        <span className="h-px flex-1 bg-white/10"></span>
      </div>
      <div className="space-y-5 text-sm">{renderArticles(articles, showImages, showExcerpt)}</div>
    </div>
  );

  return (
    <section id="world" className="px-4 md:px-8 lg:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] space-y-10 overflow-hidden rounded-2xl border border-gray-700 bg-[#151515] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <header className="text-center">
          <div className="mx-auto flex max-w-md items-center gap-4 text-gray-400">
            <span className="h-px flex-1 bg-white/10"></span>
            <h3 className="font-[Lato] text-xl font-semibold uppercase tracking-[0.4em] text-white">
              Regional Coverage
            </h3>
            <span className="h-px flex-1 bg-white/10"></span>
          </div>
        </header>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)]">
          {/* Left: no excerpt */}
          {renderColumn(leftArticles, "Africa", [false, false, false, false], false)}
          {/* Middle: show excerpt for all */}
          {renderColumn(middleArticles, "Europe", [true, false, false, false], true)}
          {/* Right: no excerpt */}
          {renderColumn(rightArticles, "Asia", [false, false, false], false)}
        </div>
      </div>
    </section>
  );
};

export default Section2;
