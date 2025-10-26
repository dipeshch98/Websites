// src/components/sections/ShowroomHighlights.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowroomHighlights = () => {
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
          setArticles(data.articles.slice(70, 73)); // grab 3
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const getImage = (article) => {
    if (article.image) return article.image;
    if (article.content) {
      const match = article.content.match(/<img.*?src="(.*?)"/);
      if (match && match[1]) return match[1];
    }
    return "https://placehold.co/400x250";
  };

  const handleClick = (article) => {
    if (!article?.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!articles.length) return <p className="text-center py-10">No highlights found</p>;

  return (
    <div className="w-full max-w-[58.125rem] mx-auto mt-6 border-b border-gray-300 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          const imageUrl = getImage(article);

          return (
            <div
              key={article._id || index}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => handleClick(article)}
            >
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-[15rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-semibold text-lg leading-snug mb-2 hover:text-blue-400">
                  {article.title}
                </h3>

                {article.excerpt && (
                  <p className="text-sm mb-2">{article.excerpt}</p>
                )}

                <div className="flex items-center text-sm gap-4">
                  <span>{article.author?.name || article.author || "Staff Reporter"}</span>
                  <span className="border-l pl-3">{article.published_date || "Just now"}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowroomHighlights;
