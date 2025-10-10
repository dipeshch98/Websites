import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section5({ articles }) {
  const navigate = useNavigate();

  // Function to handle navigation when clicking an article
  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
  };

  // Fallback if no data is passed
  const topStories = articles?.slice(145, 150) || [];

  return (
    <section className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6 mt-16 mb-16">
      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#00c003] pl-3 mb-8">
        Top Stories
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topStories.map((article) => (
          <div
            key={article._id}
            className="group flex flex-col cursor-pointer"
            onClick={() => handleClick(article)}
          >
            {/* Image Section */}
            <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
              <img
                src={article.featuredImage || "https://placehold.co/600x400"}
                alt={article.title}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Content Section */}
            <div className="mt-4 space-y-2">
              <span className="inline-block bg-[#00c003] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase whitespace-nowrap">
                {article.category || "News"}
              </span>

              <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#00c003] transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-xs text-gray-500">
                👤 {article.author?.name || "SafeChain Team"} • 📅{" "}
                {article.createdAt
                  ? new Date(article.createdAt).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
