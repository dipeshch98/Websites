import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section8({ articles }) {
  const navigate = useNavigate();

  // Take 1 article for this premium section
  const featured1 = articles?.[70]; // simpler than slice

  if (!featured1) return null;

  const handleClick = () => {
    navigate(`/article/${featured1.slug}`, { state: { article: featured1 } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gray-50 border-t border-b border-gray-300 py-16">
      <div
        className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-6 flex flex-col lg:flex-row gap-10"
      >
        {/* Left Image */}
        <div
          className="lg:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={handleClick}
        >
          <img
            src={featured1.featuredImage || "https://placehold.co/800x600"}
            alt={featured1.title}
            className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          {featured1.category && (
            <span className="inline-block w-fit bg-[#00c003] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase mb-4">
              {featured1.category.toUpperCase()}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 group-hover:text-[#00c003] transition-colors">
            {featured1.title}
          </h2>
          <p className="text-gray-700 text-lg mb-6 line-clamp-4">
            {featured1.excerpt || "Read this featured article to learn more..."}
          </p>
          <button
            onClick={handleClick}
            className="self-start bg-[#00c003] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
