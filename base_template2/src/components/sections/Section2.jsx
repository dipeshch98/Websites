import React from "react";

export default function Section2({ articles }) {
  // Handle click event
  const handleClick = (slug) => {
    // Navigate to article page (replace with your routing logic)
    window.location.href = `/article/${slug}`;
  };

  if (!articles || articles.length === 0) {
    return <div className="text-center py-10 text-gray-500">No press releases found.</div>;
  }

  return (
    <section className="max-w-[1200px] mx-auto mb-16 px-5">
      <h2 className="text-xl mb-6 text-[#f7931a] font-bold">Press Releases</h2>
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-md:gap-[18px] max-sm:grid-cols-1 max-sm:gap-5">
        {articles.slice(0, 6).map((article) => (
          <div
            key={article._id}
            onClick={() => handleClick(article.slug)}
            className="flex gap-5 cursor-pointer transition-opacity duration-300 hover:opacity-80 max-sm:flex-row max-sm:gap-3"
          >
            <div
              className="w-20 h-20 bg-cover bg-center rounded-lg flex-shrink-0 max-sm:w-[60px] max-sm:h-[60px]"
              style={{ backgroundImage: `url(${article.featuredImage})` }}
            ></div>
            <div>
              <h3 className="text-white text-sm mb-1.5 leading-tight max-sm:text-[13px] font-semibold line-clamp-2 overflow-hidden">
                {article.title}
              </h3>
              <p className="text-sm text-gray-200">
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
