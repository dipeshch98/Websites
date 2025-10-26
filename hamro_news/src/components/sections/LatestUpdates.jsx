// src/components/LatestUpdates.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch(
          "https://api.coinsae.com/api/v1/client?uri=https://rollandearn.com&api_key=Test@!3"
        );
        const data = await response.json();
        setUpdates(data.articles?.slice(0, 4) || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  const getImage = (article) => {
    if (article.image) return article.image;
    if (article.content) {
      const match = article.content.match(/<img.*?src="(.*?)"/);
      if (match && match[1]) return match[1];
    }
    return "https://placehold.co/400x200";
  };

  const handleClick = (article) => {
    if (!article.slug) return;
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  if (loading) return <p className="py-5 text-center">Loading...</p>;

  return (
    <div className="w-full">
      <h2 className="text-[1.125rem] font-bold text-blue-600 flex items-center gap-2 mb-3">
        Latest Updates <span className="text-red-500 text-lg">●</span>
      </h2>

      {updates.length > 0 && (
        <>
          {/* Top Update */}
          <div className="mb-4 border-b border-gray-200 pb-4 cursor-pointer" onClick={() => handleClick(updates[0])}>
            <div className="relative overflow-hidden rounded">
              <img
                src={getImage(updates[0])}
                alt={updates[0].title}
                className="w-full h-[11.25rem] object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="mt-2 font-semibold text-[1rem] leading-snug hover:text-blue-600 transition-colors">
              {updates[0].title}
            </h3>
            <p className="text-red-500 text-sm flex items-center gap-1 mt-1">
              ⏱ {updates[0].publishedAt || "Just now"}
            </p>
          </div>

          {/* News List */}
          <div className="divide-y divide-gray-200">
            {updates.slice(1).map((item, idx) => (
              <div key={idx} className="py-3 pt-0 flex gap-2 items-start cursor-pointer" onClick={() => handleClick(item)}>
                <img
                  src={getImage(item)}
                  alt={item.title}
                  className="w-16 h-12 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h4 className="font-semibold text-[0.95rem] hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">{item.publishedAt || "Just now"}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="w-full h-[1px] bg-black mt-4"></div>
    </div>
  );
};

export default LatestUpdates;
