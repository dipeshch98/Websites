import React from "react";

export default function Section4({ featuredArticles }) {
  return (
    <section className="max-w-[1200px] mx-auto my-16 px-5">
      <div className="grid grid-cols-2 gap-0 h-[400px] relative max-sm:grid-cols-1 max-sm:h-auto max-sm:gap-6 max-md:grid-cols-1 max-md:h-auto max-md:gap-6">
        
        {/* Divider */}
        <div className="featured-divider absolute top-0 left-1/2 w-1 h-full bg-[linear-gradient(45deg,transparent_0%,#333_20%,#333_80%,transparent_100%)] -translate-x-1/2 skew-y-[-2deg] z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] max-sm:hidden max-md:hidden"></div>

        {/* Left & Right Featured Articles */}
        {featuredArticles?.slice(0, 2).map((article) => (
          <div
            key={article._id}
            className="relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 h-full max-sm:h-[250px] max-md:h-[300px]"
            onClick={() => window.location.href = `/article/${article.slug}`}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.7)_100%)] z-10"></div>
            
            {/* Text */}
            <div className="absolute bottom-[30px] left-[30px] right-[30px] z-20 text-white max-sm:bottom-5 max-sm:left-5 max-sm:right-5">
              <span className="inline-block bg-[#f7931a] text-black px-3 py-1 rounded-sm text-xs font-bold mb-2.5 uppercase">
                {article.category || "NEWS"}
              </span>
              <h2 className="text-[22px] leading-tight m-0 font-bold shadow-[0_2px_4px_rgba(0,0,0,0.3)] max-sm:text-lg max-md:text-xl line-clamp-2">
                {article.title}
              </h2>
            </div>

            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${article.featuredImage})` }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
