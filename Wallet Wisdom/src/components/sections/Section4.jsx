import React from "react";
import { useNavigate } from "react-router-dom";

const Section4 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 6) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-[1200px] bg-white mx-auto px-2 md:px-0">
      <div className="max-w-full mx-auto py-6 space-y-1">

        {/* 🔹 Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">

          {/* Left Big Image */}
          <div
            className="md:col-span-2 relative overflow-hidden group cursor-pointer"
            onClick={() => handleClick(articles[0])}
          >
            <img
              src={articles[0].featuredImage || "https://placehold.co/600x400"}
              alt={articles[0].title}
              className="w-full h-[250px] object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <h2 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                {articles[0].title}
              </h2>
              <p className="text-sm text-gray-200">
                👤 {articles[0].author?.name || "Unknown"} • 📂{" "}
                {articles[0].category || "News"} • 📅{" "}
                {new Date(articles[0].createdAt).toLocaleDateString()} 
              </p>
            </div>
          </div>

          {/* Right two smaller images */}
          {articles.slice(1, 3).map((article, idx) => (
            <div
              key={article._id || idx}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x300"}
                alt={article.title}
                className="w-full h-[250px] object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3 text-white">
                <h2 className="text-lg font-bold group-hover:text-yellow-400 transition">
                  {article.title.length > 40 ? article.title.slice(0, 40) + "…" : article.title}
                </h2>
                <p className="text-sm text-gray-200">
                  👤 {article.author?.name || "Unknown"} • 📂 {article.category || "General"} • 📅{" "}
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
          {/* Left two small images */}
          {articles.slice(3, 5).map((article, idx) => (
            <div
              key={article._id || idx}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x300"}
                alt={article.title}
                className="w-full h-[250px] object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-3 text-white">
                <h2 className="text-lg font-bold group-hover:text-yellow-400 transition">
                  {article.title.length > 40 ? article.title.slice(0, 40) + "…" : article.title}
                </h2>
                <p className="text-sm text-gray-200">
                  👤 {article.author?.name || "Unknown"} • 📂 {article.category || "General"} • 📅{" "}
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}

          {/* Right Big Image */}
          <div
            className="md:col-span-2 relative overflow-hidden group cursor-pointer"
            onClick={() => handleClick(articles[5])}
          >
            <img
              src={articles[5].featuredImage || "https://placehold.co/600x400"}
              alt={articles[5].title}
              className="w-full h-[250px] object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <h2 className="text-2xl font-bold group-hover:text-yellow-400 transition">
                {articles[5].title}
              </h2>
              <p className="text-sm text-gray-200">
                👤 {articles[5].author?.name || "Unknown"} • 📂{" "}
                {articles[5].category || "News"} • 📅{" "}
                {new Date(articles[5].createdAt).toLocaleDateString()} • 
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section4;
