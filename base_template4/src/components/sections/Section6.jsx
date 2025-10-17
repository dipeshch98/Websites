import React from "react";
import { useNavigate } from "react-router-dom";

const Section6 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length || articles.length <= 80) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  // Indexing starts from 80
  const sectionArticles = articles.slice(80, 83); // 3 articles for the grid

  return (
    <section id="entertainment" className="px-4 md:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] space-y-10 overflow-hidden">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-[#ff3333]">Entertainment</p>
          <h2 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
            Stories shaping culture & creativity
          </h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {sectionArticles.map((article) => (
            <article
              key={article._id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#222222] bg-[#151515] transition hover:border-[#ff3333]/50 hover:shadow-[0_12px_35px_rgba(255,51,51,0.25)] cursor-pointer"
              onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
            >
              <div className="relative h-52">
                {article.featuredImage && (
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute left-4 top-4 rounded-md bg-[#ff3333] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0a0a0a]">
                  {article.category || "Entertainment"}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="font-[Lato] text-lg font-semibold text-white">
                  {article.title}
                </h3>
                {article.excerpt && <p className="text-sm text-gray-400">{article.excerpt}</p>}
                <span className="mt-auto text-xs uppercase tracking-[0.3em] text-gray-400">
                  {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : ""}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
