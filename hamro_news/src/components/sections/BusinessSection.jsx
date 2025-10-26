// src/components/sections/BusinessSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessSection = () => {
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

        if (data.articles && data.articles.length > 91) {
          setArticles(data.articles.slice(90, 97));
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

  const mainArticle = articles[0];
  const secondLeftArticle = articles[1];
  const sidebarArticles = articles.slice(2);

  const getImageUrl = (article) =>
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] || "https://placehold.co/800x400";

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-2 lg:px-0 mt-6 border-b border-gray-300 pb-4">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-4">
        Business <span className="text-gray-400">▸</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Main + Second Article */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {[mainArticle, secondLeftArticle].map((article, idx) => (
            <div key={article._id || idx} className="w-full cursor-pointer">
              <div className="overflow-hidden rounded-md group" onClick={() => handleClick(article)}>
                <img
                  src={getImageUrl(article)}
                  alt={article.title}
                  className="w-full h-[260px] md:h-[340px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-3">
                <h2
                  className="text-xl md:text-2xl font-semibold hover:text-blue-600"
                  onClick={() => handleClick(article)}
                >
                  {article.title}
                </h2>
                <p className="text-gray-700 text-sm md:text-base mt-2">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar News List */}
        <div className="flex flex-col gap-4">
          {sidebarArticles.map((article, idx) => (
            <div
              key={article._id || idx}
              className={`flex gap-3 ${idx % 2 === 0 ? "border-b border-gray-200 pb-3" : ""} cursor-pointer`}
              onClick={() => handleClick(article)}
            >
              <img
                src={getImageUrl(article)}
                alt={article.title}
                className="w-24 h-16 object-cover rounded-md"
              />
              <div>
                <h3 className="font-medium text-sm md:text-base hover:text-blue-600">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
