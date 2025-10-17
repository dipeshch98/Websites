import React from "react";
import { useNavigate } from "react-router-dom";

const Section8 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length || articles.length <= 100) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  // Indexing starts from 100
  const sectionArticles = articles.slice(103, 105); // next 5 articles

  return (
    <section id="analysis-opinion" className="px-4 md:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] space-y-12">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-[#ff3333]">Analysis & Opinion</p>
          <h2 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
            Editor perspectives on the stories that matter
          </h2>
        </header>

        <div className="news-grid grid gap-6 md:grid-cols-2">
          {sectionArticles.map((article, idx) => (
            <article
              key={article._id || idx}
              className="news-card group flex h-full flex-col overflow-hidden rounded-2xl border border-[#222222] bg-[#151515] transition hover:border-[#ff3333]/50 hover:shadow-glow cursor-pointer"
              onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
            >
              <div className="news-link flex h-full flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.featuredImage || "https://via.placeholder.com/400x200"}
                    alt={article.title || "Article Image"}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="category-tag absolute left-4 top-4 rounded-md bg-[#ff3333] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#111]">
                    {article.category || "Opinion"}
                  </span>
                </div>
                <div className="news-content flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-[Lato] text-xl font-semibold text-white">{article.title}</h3>
                  {article.excerpt && <p className="text-sm text-gray-400">{article.excerpt}</p>}
                  <div className="news-meta mt-auto text-xs uppercase tracking-[0.3em] text-gray-400">
                    <span>{article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8;
