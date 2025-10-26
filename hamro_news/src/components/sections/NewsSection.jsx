// src/components/sections/NewsSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
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
          setArticles(data.articles.slice(63, 66)); // pick a few for now
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

  const getImageUrl = (article) =>
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] || "https://placehold.co/600x400";

  const handleClick = (article) => {
    if (!article.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto mt-6 space-y-10">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-2">
        News <span className="text-gray-400">▸</span>
      </h1>

      {articles.map((article, index) => {
        const imageUrl = getImageUrl(article);

        return (
          <div
            key={article._id || index}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-6 items-center"
          >
            {/* Left image */}
            <div className="overflow-hidden rounded cursor-pointer">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-[15rem] object-cover transition-transform duration-500 hover:scale-105"
                onClick={() => handleClick(article)}
              />
            </div>

            {/* Right content */}
            <div>
              <p className="text-sm text-blue-600 font-medium mb-2">
                {article.category || "News"}
              </p>
              <h2
                className="text-2xl font-bold leading-snug mb-3 hover:text-blue-600 cursor-pointer"
                onClick={() => handleClick(article)}
              >
                {article.title}
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center text-sm text-gray-700 gap-4">
                <span className="font-semibold text-blue-700">
                  {typeof article.author === "object"
                    ? article.author.name
                    : article.author || "Unknown Author"}
                </span>
                <span className="border-l pl-3">{article.published_date}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsSection;
