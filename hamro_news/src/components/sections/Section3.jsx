// src/components/sections/Section3.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
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
          setArticles(data.articles.slice(56, 61)); // Pick 5 articles
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
    return "https://via.placeholder.com/300x200";
  };

  const handleClick = (article) => {
    if (!article?.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!articles.length) return <p className="text-center py-10">No articles found</p>;

  const leftColumn = articles.slice(0, 2);
  const rightColumn = articles.slice(2);

  const renderArticle = (article) => {
    const imageUrl = getImage(article);
    return (
      <div
        key={article._id || article.slug}
        className="border-b pb-4 cursor-pointer"
        onClick={() => handleClick(article)}
      >
        <div className={`flex gap-4 ${imageUrl ? "flex-row" : "flex-col"}`}>
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2 hover:text-blue-600">
              {article.title}
            </h2>
            {article.excerpt && (
              <p className="text-gray-700 mb-2 leading-relaxed">{article.excerpt}</p>
            )}
            <p className="text-gray-500 text-sm">
              {article.author?.name || article.author || "Unknown Author"} &nbsp;|&nbsp;{" "}
              {article.published_date || "Just now"}
            </p>
          </div>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={article.title}
              className="w-[7.5rem] h-[5rem] object-cover rounded"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.5rem] lg:px-0 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_31.625rem] gap-8">
        {/* Left Column */}
        <div className="flex flex-col space-y-6">{leftColumn.map(renderArticle)}</div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6">{rightColumn.map(renderArticle)}</div>
      </div>
    </div>
  );
};

export default Section3;
