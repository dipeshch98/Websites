// src/components/Section3.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 13) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const leftArticles = articles.slice(60, 72); // 12 articles
  const sidebarArticles = leftArticles.slice(1, 5); // 4 for sidebar

  // Helper to render small article cards
  const SmallArticle = ({ article }) => (
    <div
      className="relative h-[200px] rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => handleClick(article)}
    >
      <img
        src={article.featuredImage || "https://placehold.co/400x200"}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/25 flex items-end p-3 text-white">
        <div>
          <h3 className="font-semibold text-sm md:text-base line-clamp-2">{article.title}</h3>
          <p className="text-xs text-gray-200">{article.author?.name || "Unknown"}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Left Column */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* First Big Article */}
        <div className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer group"
             onClick={() => handleClick(leftArticles[0])}>
          <img
            src={leftArticles[0].featuredImage || "https://placehold.co/800x400"}
            alt={leftArticles[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
            <span className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-semibold mb-2 inline-block w-fit">
              {leftArticles[0].category || "Bitcoin"}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">{leftArticles[0].title}</h2>
            <p className="text-sm mt-1">{leftArticles[0].author?.name || "Unknown"} • {leftArticles[0].createdAt ? new Date(leftArticles[0].createdAt).toLocaleDateString() : "Recent"}</p>
          </div>
        </div>

        {/* First 3 Small Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {leftArticles.slice(1, 4).map((article) => (
            <SmallArticle key={article._id} article={article} />
          ))}
        </div>

        {/* Second Big Article */}
        <div className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer group"
             onClick={() => handleClick(leftArticles[4])}>
          <img
            src={leftArticles[4].featuredImage || "https://placehold.co/800x400"}
            alt={leftArticles[4].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white">
            <span className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-semibold mb-2 inline-block w-fit">
              {leftArticles[4].category || "Bitcoin"}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold">{leftArticles[4].title}</h2>
            <p className="text-sm mt-1">{leftArticles[4].author?.name || "Unknown"} • {leftArticles[4].createdAt ? new Date(leftArticles[4].createdAt).toLocaleDateString() : "Recent"}</p>
          </div>
        </div>

        {/* Next 3 Small Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {leftArticles.slice(5, 8).map((article) => (
            <SmallArticle key={article._id} article={article} />
          ))}
        </div>
      </div>

      {/* Right Sticky Sidebar */}
      <aside className="lg:col-span-4 md:sticky lg:sticky lg:top-20 h-fit flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-bold bg-indigo-500 text-white text-center py-2 rounded shadow-sm">
          Popular Articles
        </h2>

        {sidebarArticles.map((article) => (
          <div
            key={article._id}
            className="flex gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-white transition p-2 rounded"
            onClick={() => handleClick(article)}
          >
            <img
              src={article.featuredImage || "https://placehold.co/100x90"}
              alt={article.title}
              className="w-[100px] h-[80px] object-cover rounded-md flex-shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="text-indigo-500 font-medium text-xs">{article.category || "Bitcoin"}</span>
              <h4 className="text-sm font-semibold line-clamp-2">{article.title}</h4>
              <span className="text-xs text-gray-400">{article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Just now"}</span>
            </div>
          </div>
        ))}
      </aside>

    </section>
  );
};

export default Section3;
