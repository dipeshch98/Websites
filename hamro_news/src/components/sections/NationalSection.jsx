// src/components/sections/NationalSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NationalSection = () => {
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

        if (data.articles && data.articles.length > 97) {
          setArticles(data.articles.slice(97, 102));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!articles.length) return <p className="text-center py-10">No news found</p>;

  const getImageUrl = (article) => {
    if (article.image) return article.image;
    if (article.content) {
      const match = article.content.match(/<img.*?src="(.*?)"/);
      if (match && match[1]) return match[1];
    }
    return "https://placehold.co/800x400";
  };

  const handleClick = (article) => {
    if (!article.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-2 lg:px-0 mt-6 space-y-6">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-2">
        National <span className="text-gray-400">▸</span>
      </h1>

      {articles.map((article, idx) => (
        <div
          key={article._id || idx}
          className={`flex flex-col md:flex-row gap-[1rem] ${
            idx % 2 === 0 ? "border-b border-gray-200 pb-[1rem]" : ""
          }`}
        >
          <div className="flex-shrink-0">
            <img
              src={getImageUrl(article)}
              alt={article.title}
              className="h-[8.75rem] w-[13.4375rem] object-cover rounded-md cursor-pointer"
              onClick={() => handleClick(article)}
            />
          </div>
          <div>
            <h2
              className="text-lg font-semibold leading-snug mb-[0.25rem] hover:text-blue-600 cursor-pointer"
              onClick={() => handleClick(article)}
            >
              {article.title}
            </h2>
            <p className="text-sm text-gray-500 mb-[0.5rem]">
              {article.author?.name || article.author || "Unknown Author"}
            </p>
            <p className="text-base text-gray-700 leading-relaxed">{article.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NationalSection;
