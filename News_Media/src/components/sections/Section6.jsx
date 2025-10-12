import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section8({ articles }) {
  const navigate = useNavigate();

  // Take 1 article for this section
  const featured = articles?.[150];

  if (!featured) return null;

  const handleClick = () => {
    navigate(`/article/${featured.slug}`, { state: { article: featured } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gray-100 border-t border-b border-gray-300 py-16">
      <div className="max-w-[1450px] mx-auto px-[2rem] flex flex-col lg:flex-row gap-10">

        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          {featured.category && (
            <span className="bg-[#ff6700] text-white text-[0.7rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
              {featured.category.toUpperCase()}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {featured.title}
          </h2>
          <p className="text-gray-700 text-lg mb-6 line-clamp-4">
            {featured.excerpt || "Read this featured article to learn more..."}
          </p>
          <button
            onClick={handleClick}
            className="self-start bg-[#ff6700] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Read More
          </button>
        </div>

        {/* Right Image with Hover */}
        <div
          className="lg:w-1/2 flex-shrink-0 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={handleClick}
        >
          <img
            src={featured.featuredImage || "https://placehold.co/800x600"}
            alt={featured.title}
            className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
