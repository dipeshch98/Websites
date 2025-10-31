// src/components/Section2.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 6) return null; // Ensure enough articles

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const sectionArticles = articles.slice(54, 59); // 6 articles

  const leftArticle = sectionArticles[0]; // Featured on left
  const rightArticles = sectionArticles.slice(1); // 5 smaller on right

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Featured Article */}
      {leftArticle && (
        <div
          className="lg:col-span-7 relative h-[450px] rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => handleClick(leftArticle)}
        >
          <img
            src={leftArticle.featuredImage || "https://placehold.co/800x450"}
            alt={leftArticle.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end p-6 text-white">
            <div>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold mb-2 inline-block">
                {leftArticle.category || "Bitcoin"}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">{leftArticle.title}</h2>
              <p className="text-sm mt-1">
                {leftArticle.author?.name || "Unknown"} • {leftArticle.createdAt ? new Date(leftArticle.createdAt).toLocaleDateString() : "Recent"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Right Articles Grid */}
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rightArticles.map((article) => (
          <div
            key={article._id}
            className="relative h-[200px] md:h-[220px] rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => handleClick(article)}
          >
            <img
              src={article.featuredImage || "https://placehold.co/400x220"}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-3 text-white">
              <div>
                <h3 className="font-semibold text-sm md:text-base line-clamp-2">{article.title}</h3>
                <p className="text-xs text-gray-200">{article.author?.name || "Unknown"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Section2;
