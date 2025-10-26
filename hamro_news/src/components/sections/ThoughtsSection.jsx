import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ThoughtsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.coinsae.com/api/v1/client?uri=https://rollandearn.com&api_key=Test@!3")
      .then((res) => res.json())
      .then((data) => {
        const allArticles = data.articles || [];
        setArticles(allArticles.slice(102, 107)); // fetch articles starting from 102 (5 articles)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  const handleArticleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0); // scroll to top on navigate
  };

  return (
    <div>
      <h2 className="text-[1.125rem] font-bold text-blue-600 mb-3">Thoughts</h2>
      <div className="divide-y divide-gray-200">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex gap-3 py-3 items-start cursor-pointer"
            onClick={() => handleArticleClick(article)}
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-12 h-12 rounded-md object-cover flex-shrink-0"
              />
            )}
            <div>
              <h3 className="font-semibold text-[0.95rem] leading-snug hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                {article.description || ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThoughtsSection;
