// src/components/Section2.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles }) => {
  const navigate = useNavigate();

  // Pick 12 articles from index 10 to 22
  const sectionArticles = articles?.slice(10, 22) || [];

  // Column division
  const col1 = sectionArticles.slice(0, 4); // 1 main + 3 small
  const col2 = sectionArticles.slice(4, 7); // 1 big + 2 small
  const col3 = sectionArticles.slice(7, 12); // 5 short

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (sectionArticles.length === 0) return null;

  return (
    <section className="py-[4rem] bg-white">
      <div className="mx-auto max-w-[1200px] px-[1.5rem]">
        <div className="grid gap-[2rem] lg:grid-cols-3">
          {/* ------------ COLUMN 1 ------------ */}
          <div className="flex h-full flex-col space-y-[1rem]">
            <h2 className="inline-block border-b-2 border-[#2563eb] pb-[0.5rem] text-[1.25rem] font-semibold text-slate-900">
              Bitcoin &amp; Altcoins
            </h2>

            {col1[0] && (
              <article
                onClick={() => handleClick(col1[0])}
                className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:shadow-md transition duration-300 hover:-translate-y-[2px]"
              >
                <img
                  src={col1[0].featuredImage || "https://placehold.co/400x250"}
                  alt={col1[0].title}
                  className="h-[10rem] w-full object-cover"
                />
                <div className="p-[1rem] space-y-[0.5rem]">
                  <h3 className="text-[1rem] font-semibold text-slate-900 line-clamp-2 hover:text-[#2563eb]">
                    {col1[0].title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {new Date(col1[0].createdAt).toLocaleDateString()}
                  </p>
                </div>
              </article>
            )}

            <div className="space-y-[1rem] flex-1 flex flex-col">
              {col1.slice(1).map((a) => (
                <SmallArticle
                  key={a._id}
                  img={a.featuredImage}
                  title={a.title}
                  date={new Date(a.createdAt).toLocaleDateString()}
                  onClick={() => handleClick(a)}
                />
              ))}
            </div>
          </div>

          {/* ------------ COLUMN 2 ------------ */}
          <div className="flex h-full flex-col space-y-[1.5rem]">
            {col2[0] && (
              <article
                onClick={() => handleClick(col2[0])}
                className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-[3px]"
              >
                <img
                  src={col2[0].featuredImage || "https://placehold.co/600x350"}
                  alt={col2[0].title}
                  className="h-[14rem] w-full object-cover"
                />
                <div className="p-[1.25rem] space-y-[0.5rem]">
                  <h2 className="text-[1.25rem] font-bold text-slate-900 line-clamp-2 hover:text-[#2563eb]">
                    {col2[0].title}
                  </h2>
                  {col2[0].excerpt && (
                    <p className="text-sm text-slate-600 line-clamp-3">
                      {col2[0].excerpt}
                    </p>
                  )}
                  <span className="text-xs font-medium text-slate-500">
                    {new Date(col2[0].createdAt).toLocaleDateString()}
                  </span>
                </div>
              </article>
            )}

            <div className="space-y-[1rem] flex-1 flex flex-col">
              {col2.slice(1).map((a) => (
                <SmallArticle
                  key={a._id}
                  img={a.featuredImage}
                  title={a.title}
                  date={new Date(a.createdAt).toLocaleDateString()}
                  onClick={() => handleClick(a)}
                />
              ))}
            </div>
          </div>

          {/* ------------ COLUMN 3 ------------ */}
          <div className="flex h-full flex-col space-y-[1rem]">
            <h2 className="inline-block border-b-2 border-[#2563eb] pb-[0.5rem] text-[1.25rem] font-semibold text-slate-900">
              Blockchain &amp; DeFi
            </h2>

            <div className="space-y-[1rem] flex-1 flex flex-col">
              {col3.map((a) => (
                <article
                  key={a._id}
                  onClick={() => handleClick(a)}
                  className="group flex items-start gap-[0.75rem] border-b border-slate-200 pb-[1rem] last:border-b-0 last:pb-0 cursor-pointer"
                >
                  <img
                    src={a.featuredImage || "https://placehold.co/80x60"}
                    alt={a.title}
                    className="h-[4rem] w-[5rem] rounded-md object-cover"
                  />
                  <div>
                    <h4 className="line-clamp-2 text-sm font-semibold text-slate-900 transition duration-300 group-hover:text-[#2563eb]">
                      {a.title}
                    </h4>
                    <span className="text-xs font-medium text-slate-500">
                      {new Date(a.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ------------- SMALL ARTICLE COMPONENT -------------
const SmallArticle = ({ img, title, date, onClick }) => (
  <article
    onClick={onClick}
    className="group flex items-start gap-[0.75rem] border-b border-slate-200 pb-[1rem] last:border-b-0 last:pb-0 cursor-pointer"
  >
    <img
      src={img || "https://placehold.co/80x60"}
      alt={title}
      className="h-[4rem] w-[5rem] rounded-md object-cover"
    />
    <div>
      <h4 className="line-clamp-2 text-sm font-semibold text-slate-900 transition duration-300 group-hover:text-[#2563eb]">
        {title}
      </h4>
      <span className="text-xs font-medium text-slate-500">{date}</span>
    </div>
  </article>
);

export default Section2;
