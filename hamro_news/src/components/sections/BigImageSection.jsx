// src/components/sections/BigImageSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BigImageSection = () => {
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

        if (data.articles && data.articles.length > 88) {
          setArticle(data.articles[88]); // pick the 89th article
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!article) return <p className="text-center py-10">No article found</p>;

  const imageUrl =
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] ||
    "https://placehold.co/1000x500";

  const handleClick = () => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-[0.25rem] sm:px-[0.5rem] lg:px-0 border-b border-gray-300 pb-4 mt-4">
      {/* Heading */}
      <h2
        className="text-center font-semibold mb-4 hover:text-blue-600 cursor-pointer"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
          lineHeight: "clamp(2rem, 5vw, 2.95rem)"
        }}
        onClick={handleClick}
      >
        {article.title}
      </h2>

      {/* Large Image */}
      <div className="w-full overflow-hidden rounded cursor-pointer" onClick={handleClick}>
        <img
          src={imageUrl}
          alt={article.title}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default BigImageSection;
