import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section2({ articles }) {
  const navigate = useNavigate();

  if (!articles || articles.length === 0)
    return (
      <p className="text-center text-gray-500 py-10">
        No articles available.
      </p>
    );

  // Slice from index 110–118 for Section 2
  const displayed = articles.slice(120, 123);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1300px] mx-auto px-5">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 border-l-4 border-[#00c003] pl-3">
            Featured Articles
          </h2>
          <p className="text-gray-600 mt-3 md:mt-0">
            Deep dives into the SafeChain world.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((item) => (
            <div
              key={item._id}
              onClick={() => handleClick(item)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl bg-gradient-to-b from-gray-50 to-white transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.featuredImage || "https://placehold.co/600x400"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <span className="absolute bottom-3 left-3 bg-[#00c003] text-white text-xs font-semibold uppercase px-3 py-1 rounded-full">
                  {item.category || "SafeChain"}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#00c003] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <p>
                    📅{" "}
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </p>
                  <p className="font-medium text-[#00c003]">
                    {item.author?.name || "SafeChain Team"}
                  </p>
                </div>
              </div>

              {/* Subtle Bottom Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#00c003] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
