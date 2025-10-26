// src/components/sections/ProvinceNewsSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProvinceNewsSection = () => {
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
          setArticles(data.articles.slice(73, 77));
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleClick = (article) => {
    if (!article.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!articles.length) return <p className="text-center py-10">No province news found</p>;

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.5rem] lg:px-0 mt-6 border-b border-gray-300 pb-4">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-2">
        Province News <span className="text-gray-400">▸</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
        {articles.map((article, index) => {
          const imageUrl =
            article.content?.match(/<img.*?src="(.*?)"/)?.[1] ||
            "https://placehold.co/150x150";

          const authorName =
            typeof article.author === "object" ? article.author.name : article.author || "Unknown Author";

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 items-start group cursor-pointer"
              onClick={() => handleClick(article)}
            >
              {/* Image */}
              <div className="w-full sm:w-[8rem] flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={imageUrl}
                  alt={article.title}
                  className="w-full h-[8.75rem] sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold leading-snug group-hover:text-blue-600">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 mt-[0.25rem]">{authorName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProvinceNewsSection;
