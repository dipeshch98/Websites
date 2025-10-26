// src/components/sections/PhotoFeaturesSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotoFeaturesSection = () => {
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

        if (data.articles && data.articles.length > 84) {
          setArticles(data.articles.slice(84, 88)); // Main + 3 bottom
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
  if (!articles.length) return <p className="text-center py-10">No photo features found</p>;

  const mainArticle = articles[0];
  const bottomArticles = articles.slice(1);

  const getImage = (article) =>
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] || "https://placehold.co/800x500";

  const handleClick = (article) => {
    if (!article.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.5rem] lg:px-0 mt-6 border-b border-gray-300 pb-4">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-4">
        Photo Features <span className="text-gray-400">▸</span>
      </h1>

      {/* Main Large Image */}
      {mainArticle && (
        <div
          className="w-full relative group overflow-hidden rounded-md mb-4 cursor-pointer"
          onClick={() => handleClick(mainArticle)}
        >
          <img
            src={getImage(mainArticle)}
            alt={mainArticle.title}
            className="w-full h-[30rem] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg md:text-xl font-semibold p-3">
            {mainArticle.title}
          </div>
        </div>
      )}

      {/* Bottom 3 Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {bottomArticles.map((article, index) => (
          <div
            key={article._id || index}
            className="relative group overflow-hidden rounded-md cursor-pointer"
            onClick={() => handleClick(article)}
          >
            <img
              src={getImage(article)}
              alt={article.title}
              className="w-full h-[12.5rem] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm font-medium p-2">
              {article.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoFeaturesSection;
