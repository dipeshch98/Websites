// src/components/sections/WorldSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WorldSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://api.coinsae.com/api/v1/client?uri=https://rollandearn.com&api_key=Test@!3"
        );
        const data = await response.json();
        setArticles(data.articles?.slice(87, 92) || []); // fetch 5 articles for WORLD
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getImageUrl = (article) =>
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] || "https://placehold.co/800x400";

  const handleClick = (article) => {
    if (!article.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!articles.length) return <p className="text-center py-10">No world news found</p>;

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.5rem] lg:px-0 mt-6 space-y-6">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-2">
        WORLD <span className="text-gray-400">▸</span>
      </h1>

      {articles.map((article, idx) => (
        <div
          key={article._id || idx}
          className={`flex flex-col md:flex-row gap-[1rem] ${
            idx % 2 === 0 ? "border-b border-gray-200 pb-[1rem]" : ""
          } cursor-pointer`}
          onClick={() => handleClick(article)}
        >
          <div className="flex-shrink-0">
            <img
              src={getImageUrl(article)}
              alt={article.title}
              className="h-[8.75rem] w-[13.4375rem] object-cover rounded-md transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold leading-snug mb-[0.25rem] hover:text-blue-600 transition-colors">
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

export default WorldSection;
