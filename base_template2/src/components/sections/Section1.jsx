import React from "react";
import { Link } from "react-router-dom"; // make sure react-router-dom is installed

export default function Section1({ articles }) {
  if (!articles || articles.length === 0) {
    return <div className="text-center py-10 text-gray-500">No articles found.</div>;
  }

  return (
    <section className="max-w-[1200px] mx-auto my-8 px-5">
      <div
        className="grid gap-5 h-[400px]
                   grid-cols-[2fr_1fr_1fr_1fr] grid-rows-[repeat(2,1fr)]
                   max-lg:grid-cols-[2fr_1fr_1fr] max-md:grid-cols-2 max-md:grid-rows-auto max-md:h-auto
                   max-sm:grid-cols-1 max-sm:h-auto max-sm:gap-2.5"
      >
        {articles.slice(0, 8).map((article, index) => (
          <Link
            key={article._id}
            to={`/article/${article.slug}`}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-0.5
                        ${index === 0 ? "row-span-2 h-full max-md:col-span-2 max-md:h-[250px] max-sm:row-span-1 max-sm:h-[180px]" : "h-full max-md:h-[200px] max-sm:h-[180px]"}`}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>

            {/* Text content */}
            <div className="absolute bottom-5 left-5 right-5 z-20 text-white">
              <span className="inline-block bg-[#f7931a] text-black px-3 py-1 rounded-sm text-xs font-bold mb-2.5 uppercase">
                {article.category}
              </span>
              <h3
                className={`mb-2 font-bold 
                  ${index === 0 
                    ? "text-2xl leading-tight max-md:text-xl max-sm:text-base max-sm:leading-tight" 
                    : "text-sm leading-normal max-sm:text-xs max-sm:leading-tight line-clamp-3 overflow-hidden"
                  }`}
              >
                {article.title}
              </h3>
              <div className="text-xs text-white/80 flex items-center gap-1.5">
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${article.featuredImage})` }}
            ></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
