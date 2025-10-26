// src/components/sections/AutoLifeSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AutoLifeSection = () => {
  const [article, setArticle] = useState(null);
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
          setArticle(data.articles[63]); // Use the 64th article (index 63)
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
  if (!article) return <p className="text-center py-10">No article found</p>;

  const imageUrl =
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] ||
    "https://via.placeholder.com/800x400";

  // Handle click using React Router
  const handleClick = () => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto mt-6">
      {/* Heading */}
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-2">
        Auto Life <span className="text-gray-400">▸</span>
      </h1>

      {/* Article Grid */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-6 items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-bold leading-snug mb-3 hover:text-blue-600">
            {article.title}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{article.excerpt}</p>
        </div>

        {/* Right Image */}
        <div className="overflow-hidden rounded">
          <img
            src={imageUrl}
            alt={article.title}
            className="w-full h-[20rem] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoLifeSection;
