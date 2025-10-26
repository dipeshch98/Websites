// src/components/sections/Section2.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.coinsae.com/api/v1/client?uri=https://rollandearn.com&api_key=Test@!3"
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles.slice(51, 55)); // pick 4 articles
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getImage = (article) => {
    if (article.image) return article.image;
    if (article.content) {
      const match = article.content.match(/<img.*?src="(.*?)"/);
      if (match && match[1]) return match[1];
    }
    return "https://via.placeholder.com/400x200";
  };

  const handleClick = (article) => {
    if (!article?.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!articles.length) return <p className="text-center py-10">No articles found</p>;

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.25rem] sm:px-[0.5rem] lg:px-0 mt-6 border-b border-gray-300 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div key={article._id || index} className="flex flex-col">
            {/* Image */}
            <div
              className="overflow-hidden rounded cursor-pointer"
              onClick={() => handleClick(article)}
            >
              <img
                src={getImage(article)}
                alt={article.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title */}
            <p
              className="mt-3 font-semibold text-base leading-snug hover:text-blue-600 cursor-pointer"
              onClick={() => handleClick(article)}
            >
              {article.title || article.excerpt}
            </p>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-gray-700 text-base mt-1">{article.excerpt}</p>
            )}

            {/* Author & Date */}
            <p className="text-gray-500 text-sm mt-1">
              {article.author?.name || article.author || "Unknown Author"} &nbsp;|&nbsp;{" "}
              {article.published_date || "Just now"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
