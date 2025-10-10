import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section1({ articles }) {
  const navigate = useNavigate();

  if (!articles || articles.length === 0)
    return (
      <p className="text-center text-gray-500 py-10">
        No articles available.
      </p>
    );

  // Slice from index 100
  const displayed = articles.slice(100, 105);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-[1300px] mx-auto px-5">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 border-l-4 border-[#00c003] pl-3">
            Latest Insights
          </h2>
          <p className="text-gray-600 mt-3 md:mt-0">
            Stay updated with the latest from SafeChain.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Big Main Article */}
          {displayed[0] && (
            <div
              onClick={() => handleClick(displayed[0])}
              className="md:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={displayed[0].featuredImage || "https://placehold.co/800x500"}
                alt={displayed[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs bg-[#00c003] px-3 py-1 rounded-full uppercase font-semibold">
                  {displayed[0].category || "News"}
                </span>
                <h3 className="text-2xl font-bold mt-3 leading-snug group-hover:text-[#00c003] transition-colors">
                  {displayed[0].title}
                </h3>
                <p className="text-sm text-gray-200 mt-2 line-clamp-2">
                  {displayed[0].excerpt}
                </p>
              </div>
            </div>
          )}

          {/* Small Articles */}
          <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {displayed.slice(1).map((item) => (
              <div
                key={item._id}
                onClick={() => handleClick(item)}
                className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-500 group"
              >
                <div className="overflow-hidden relative h-48">
                  <img
                    src={item.featuredImage || "https://placehold.co/400x300"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-xs bg-[#00c003] text-white px-2 py-1 rounded-full uppercase">
                    {item.category || "News"}
                  </span>
                  <h4 className="font-semibold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-[#00c003] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <p className="text-xs text-gray-400">
                    📅{" "}
                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
