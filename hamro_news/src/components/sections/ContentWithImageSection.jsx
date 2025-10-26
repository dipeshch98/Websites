// src/components/sections/ContentWithImageSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentWithImageSection = () => {
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
          setArticles(data.articles.slice(78, 84)); // pick first 6 for this section
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
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!articles.length) return <p className="text-center py-10">No articles found</p>;

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.5rem] lg:px-0 mt-6 border-b border-gray-300 pb-4">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-4">
        Latest News <span className="text-gray-400">▸</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {articles.map((article, index) => {
          const imageUrl =
            article.content?.match(/<img.*?src="(.*?)"/)?.[1] ||
            "https://placehold.co/600x400";

          return (
            <div
              key={article._id || index}
              className="flex flex-col cursor-pointer group"
              onClick={() => handleClick(article)}
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={imageUrl}
                  alt={article.title}
                  className="w-full h-[12.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-2 text-base font-semibold leading-snug hover:text-blue-600">
                {article.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentWithImageSection;
