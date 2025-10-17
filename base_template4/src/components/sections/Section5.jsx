import React from "react";
import { useNavigate } from "react-router-dom";

const Section5 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles.length || articles.length <= 70) {
    return <p className="text-white text-center py-10">No articles available</p>;
  }

  // Indexing starts from 70
  const sectionArticles = articles.slice(70, 74); // 4 articles for the grid

  return (
    <section id="sports" className="px-4 md:px-8 pb-14">
      <div className="mx-auto max-w-[1400px] space-y-8 rounded-2xl border border-[#222222] bg-[#151515]/60 p-8 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-[#ff3333]">Sports Desk</p>
          <h2 className="font-[Lato] text-2xl md:text-3xl font-bold text-white">
            Athletes, leagues, and cultural impact
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sectionArticles.map((article) => (
            <article
              key={article._id}
              className="group flex h-full flex-col rounded-2xl border border-[#222222] bg-[#0f0f0f]/80 transition hover:border-[#ff3333]/40 hover:shadow-lg cursor-pointer"
              onClick={() => navigate(`/article/${article.slug}`, { state: { article } })}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                {article.featuredImage && (
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span className="absolute left-4 top-4 rounded-md bg-[#ff3333] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0a0a0a]">
                  {article.category || "Sports"}
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

export default Section5;
