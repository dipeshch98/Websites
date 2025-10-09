import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Section4({ articles = [] }) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Pick the next slice of articles
  const carouselArticles = articles.slice(134, 144);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Editor's <span className="text-blue-600">Picks</span>
          </h2>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              ◀
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
        >
          {carouselArticles.map((article) => (
            <div
              key={article._id}
              onClick={() => handleClick(article)}
              className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 group"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={
                    article.featuredImage ||
                    "https://placehold.co/400x250?text=No+Image"
                  }
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-sm font-semibold uppercase">
                  {article.category || "Article"}
                </span>
                <h4 className="text-gray-900 font-bold text-lg mt-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-xs mt-2">
                  👤 {article.author?.name || "Safe Chain"} •{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback */}
        {carouselArticles.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No editor’s picks available right now.
          </p>
        )}
      </div>
    </section>
  );
}
