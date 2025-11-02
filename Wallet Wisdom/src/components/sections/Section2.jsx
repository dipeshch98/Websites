import React from "react";
import { useNavigate } from "react-router-dom";

const Section2 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  // Split articles for sections
  const latestMusic = articles.slice(0, 4);
  const fashionistas = articles.slice(4, 7);
  const rockAndRoll = articles.slice(7, 10);
  const games = articles.slice(10, 14);
  const trending = articles.slice(0, 4); // Sidebar trending

  return (
    <div className="max-w-[1200px] bg-white mx-auto px-4 py-8 space-y-12">

      {/* LATEST MUSIC */}
      <section>
        <div className="bg-gray-100 text-center py-6 border-b-2 border-blue-400">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">LATEST MUSIC</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">This is an optional category description</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {latestMusic.map((article) => (
            <div
              key={article._id}
              className="relative h-[250px] md:h-[300px] overflow-hidden group cursor-pointer rounded-lg shadow-md"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x280"}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg md:text-xl group-hover:text-yellow-400 transition">{article.title}</h3>
                <div className="flex flex-wrap items-center text-xs md:text-sm space-x-2 mt-1">
                  <span>👤 {article.author?.name || "Unknown"}</span>
                  <span>{article.category || "Music"}</span>
                  <span>📅 {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recent"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FASHIONISTAS */}
      <section>
        <div className="bg-[#222] text-center py-6 border-b-2 border-pink-500">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white">FASHIONISTAS</h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base">This is an optional subtitle</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#222] p-4">
          {fashionistas.length > 0 ? fashionistas.map((article, index) => (
            <div
              key={article._id || index}
              className="relative rounded-lg shadow-md overflow-hidden group cursor-pointer"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x280"}
                alt={article.title || "No title"}
                className="w-full h-[250px] object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-pink-400 transition">
                  {article.title || "No title"}
                </h3>
                <div className="flex flex-wrap text-xs md:text-sm space-x-3 mb-2">
                  <span>👤 {article.author?.name || "Unknown"}</span>
                  <span>📂 {article.category || "Fashion"}</span>
                  <span>📅 {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Recent"}</span>
                </div>
                <p className="text-gray-300 text-sm">{article.excerpt || "No description available."}</p>
              </div>
            </div>
          )) : (
            <p className="text-center text-gray-400 col-span-3 py-10">No Fashionistas articles available.</p>
          )}
        </div>
      </section>



    </div>
  );
};

export default Section2;
