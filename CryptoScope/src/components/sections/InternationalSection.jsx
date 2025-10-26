// src/components/InternationalSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function InternationalSection({ articles = [] }) {
  const navigate = useNavigate();

  // slice for main + sidebar
  const mainArticles = articles.slice(70, 78);
  const sidebarArticles = articles.slice(90, 95);

  // helper to create slug
  const createSlug = (title) =>
    title
      ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
      : "untitled";

  const handleNavigate = (item) => {
    navigate(`/article/${createSlug(item.title)}`, { state: { article: item } });
  };

  return (
    <div className="w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto w-full mb-6">
        <div className="max-w-[1400px] mx-auto mt-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: News */}
            <div className="flex-1">
              <h2 className="text-2xl font-medium mb-6 hover:text-blue-600 cursor-pointer">
                International
              </h2>

              {mainArticles.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row gap-4 mb-6 border-b pb-4"
                >
                  <img
                    src={
                      item.image ||
                      item.featuredImage ||
                      "https://placehold.co/360x235"
                    }
                    alt={item.title || "News"}
                    className="w-full md:w-[360px] h-[200px] md:h-[235px] object-cover rounded-md cursor-pointer"
                    onClick={() => handleNavigate(item)}
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-blue-600 font-medium text-sm">
                        {item.category || "INTERNATIONAL"}{" "}
                        <span className="text-gray-500 ml-2">
                          {item.date
                            ? new Date(item.date).toLocaleDateString()
                            : "June 14, 2020"}
                        </span>
                      </p>
                      <h3
                        className="text-lg md:text-xl font-bold mt-2 mb-2 hover:text-blue-600 cursor-pointer"
                        onClick={() => handleNavigate(item)}
                      >
                        {item.title || "Untitled News"}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {item.description ||
                          item.excerpt ||
                          "No description available."}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate(item)}
                      className="w-fit mt-3 border border-gray-400 px-3 py-2 md:px-4 md:py-3 text-sm hover:bg-blue-600 hover:text-white transition"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sidebar (Top Articles) */}
<div className="w-full lg:w-[340px] lg:sticky lg:top-20 self-start h-fit">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-medium">Top Articles</h2>
    <a
      href="#"
      className="text-sm text-gray-500 hover:text-blue-600"
    >
      SEE ALL
    </a>
  </div>

  <div className="space-y-3">
    {sidebarArticles.map((item, idx) => (
      <div
        key={idx}
        className="h-[80px] w-full relative rounded overflow-hidden cursor-pointer group"
        onClick={() => handleNavigate(item)}
        style={{
          backgroundImage: `url(${item.featuredImage || item.image || "https://placehold.co/340x80"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center px-4 text-white font-medium text-sm group-hover:from-black/70 group-hover:to-black/50 transition">
          <span className="line-clamp-2">
            {item.title || "Untitled"}
          </span>
          <span className="ml-auto">→</span>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* End Right Column */}
          </div>
        </div>
      </div>
        </div>

    </div>
  );
}
