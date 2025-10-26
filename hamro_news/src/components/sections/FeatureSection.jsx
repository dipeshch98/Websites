// src/components/sections/FeatureSection.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => {
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

        if (data.articles && data.articles.length > 92) {
          setArticles(data.articles.slice(92, 97)); // fetch 5 articles for Feature section
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
  if (!articles.length) return <p className="text-center py-10">No feature news found</p>;

  const mainArticle = articles[0];
  const sidebarArticles = articles.slice(1);

  const getImageUrl = (article) =>
    article.content?.match(/<img.*?src="(.*?)"/)?.[1] || "https://placehold.co/800x400";

  return (
    <div className="w-full max-w-[58.125rem] mx-auto px-2 lg:px-0 mt-6 border-b border-gray-300 pb-4">
      <h1 className="text-[1.344rem] text-gray-900 font-semibold mb-4">
        Feature <span className="text-gray-400">▸</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Main News */}
        <div className="lg:col-span-2">
          <div className="w-full">
            <div
              className="overflow-hidden rounded-md group cursor-pointer"
              onClick={() => handleClick(mainArticle)}
            >
              <img
                src={getImageUrl(mainArticle)}
                alt={mainArticle.title}
                className="w-full h-[260px] md:h-[340px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-3">
              <h2
                className="text-xl md:text-2xl font-semibold hover:text-blue-600 cursor-pointer"
                onClick={() => handleClick(mainArticle)}
              >
                {mainArticle.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {mainArticle.author?.name || mainArticle.author || "Unknown Author"}
              </p>
              <p className="text-gray-700 text-sm md:text-base mt-2">{mainArticle.excerpt}</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar News List */}
        <div className="flex flex-col gap-4">
          {sidebarArticles.map((article, idx) => (
            <div
              key={article._id || idx}
              className={`flex gap-3 ${idx % 2 === 0 ? "border-b border-gray-200 pb-3" : ""}`}
            >
              <img
                src={getImageUrl(article)}
                alt={article.title}
                className="w-24 h-16 object-cover rounded-md cursor-pointer"
                onClick={() => handleClick(article)}
              />
              <div>
                <h3
                  className="font-medium text-sm md:text-base hover:text-blue-600 cursor-pointer"
                  onClick={() => handleClick(article)}
                >
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs mt-1">
                  {article.author?.name || article.author || "Unknown Author"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
