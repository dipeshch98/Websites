// src/components/sections/Section1.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          "https://api.coinsae.com/api/v1/client?uri=https://rollandearn.com&api_key=Test@!3"
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.articles && data.articles.length > 50) {
          setArticle(data.articles[50]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, []);

  const getImage = (article) => {
    if (article.image) return article.image;
    if (article.content) {
      const match = article.content.match(/<img.*?src="(.*?)"/);
      if (match && match[1]) return match[1];
    }
    return "https://via.placeholder.com/800x400";
  };

  const handleClick = () => {
    if (!article?.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!article) return <p className="text-center py-10">No articles found</p>;

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.25rem] sm:px-[0.5rem] lg:px-0 border-b border-gray-300 pb-4">
      {/* Heading */}
      <h2
        className="text-center font-semibold mb-4 hover:text-blue-600 cursor-pointer"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.36rem)",
          lineHeight: "clamp(2.8rem, 5vw, 4.704rem)",
        }}
        onClick={handleClick}
      >
        {article.title}
      </h2>

      {/* Large Image */}
      {article.content && (
        <div className="w-full overflow-hidden rounded cursor-pointer" onClick={handleClick}>
          <img
            src={getImage(article)}
            alt={article.title}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* Excerpt */}
      <p className="text-gray-700 text-base mt-3">{article.excerpt}</p>

      {/* Author & Date */}
      <p className="text-gray-500 text-sm mt-1">
        {article.author?.name || article.author || "Unknown Author"} &nbsp;|&nbsp;{" "}
        {article.published_date || "Just now"}
      </p>
    </div>
  );
};

export default Section1;
