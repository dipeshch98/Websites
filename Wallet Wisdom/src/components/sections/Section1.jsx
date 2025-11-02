import React from "react";
import { useNavigate } from "react-router-dom";

const Section1 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 6) return null; // Ensure enough articles

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const breakingArticle = articles[0]; // Latest article
  const topArticles = articles.slice(1, 3); // Two featured
  const bottomArticles = articles.slice(3, 6); // Three smaller

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white text-white px-4">

      {/* Breaking Section */}
      {breakingArticle && (
        <div className="w-full bg-gray-800 flex flex-col md:flex-row items-center justify-between px-4 py-2 text-sm text-gray-200">
          <div className="flex items-center gap-1">
            <span className="font-semibold uppercase">Breaking</span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-300">{breakingArticle.title}</span>
          </div>

          <div className="flex items-center gap-4 mt-1 md:mt-0 text-gray-400">
            <a href="#" className="hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-red-500"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      )}

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
        {topArticles.map((article, idx) => (
          <div
            key={article._id}
            className="relative h-[250px] md:h-[400px] overflow-hidden group cursor-pointer"
            onClick={() => handleClick(article)}
          >
            <img
              src={article.featuredImage || "https://placehold.co/400x280"}
              alt={article.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-4">
                <h2 className="text-xl md:text-3xl font-bold">{article.title}</h2>
                <p className="text-xs md:text-sm mt-1 text-gray-300">
                  {article.author?.name || "Unknown"} • {article.category || "News"} • {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recent"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
        {bottomArticles.map((article) => (
          <div
            key={article._id}
            className="relative h-[200px] md:h-[250px] overflow-hidden group cursor-pointer"
            onClick={() => handleClick(article)}
          >
            <img
              src={article.featuredImage || "https://placehold.co/400x280"}
              alt={article.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-3">
                <h2 className="text-base md:text-xl font-bold">{article.title}</h2>
                <p className="text-xs text-gray-300 mt-1">
                  {article.author?.name || "Unknown"} • {article.category || "News"} • {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recent"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Section1;
