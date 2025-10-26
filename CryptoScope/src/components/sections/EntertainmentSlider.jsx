import React from "react";
import { useNavigate } from "react-router-dom";

export default function EntertainmentSlider({ articles = [] }) {
  const navigate = useNavigate();

  const handleClick = (article) => {
    const slug = (article.slug || article.title || "article")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
    navigate(`/article/${slug}`, { state: { article } });
  };

  const entertainment = articles.slice(24, 28);
  const sliderPosts = articles.slice(94, 101);

  return (
    <div className="w-full">
      {/* Wrapper with same padding as header */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Center content and restrict to 1400px */}
        <div className="max-w-[1400px] mx-auto mt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

            {/* Left Column - Entertainment */}
            <div>
              <h2 className="text-2xl font-medium mb-4">Entertainment</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {entertainment.map((article, idx) => (
                  <div key={idx} className="group cursor-pointer" onClick={() => handleClick(article)}>
                    <div className="overflow-hidden relative">
                      <img
                        src={article.featuredImage || "https://placehold.co/300x235"}
                        alt={article.title}
                        className="w-full h-[235px] object-cover transition-transform duration-500 group-hover:scale-110 origin-center"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500">
                        <span className="text-blue-600">{article.category || "TRAVEL"}</span> •{" "}
                        <span className="text-black">
                          {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                        </span>
                      </p>
                      <h3 className="text-lg font-semibold mt-1 transition-colors duration-300 group-hover:text-blue-600">
                        {article.title || "Untitled Article"}
                      </h3>
                      <p className="text-sm text-gray-600">{article.excerpt || ""}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Slider Post */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-medium">Slider Post</h2>
                <div className="flex gap-2">
                  <button className="border px-2 py-1">&lt;</button>
                  <button className="border px-2 py-1">&gt;</button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {sliderPosts.map((article, idx) => (
                  <div key={idx} className="flex gap-8 items-center border-b border-gray-200 pb-4 cursor-pointer" onClick={() => handleClick(article)}>
                    <div className="w-14 h-14 flex-none flex items-center justify-center border-4 border-gray-300 rounded-full text-gray-600 font-extrabold text-[25px]">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 pb-2">
                        <span className="text-blue-600">{article.category || "SPORTS"}</span> •{" "}
                        <span className="text-black">
                          {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                        </span>
                      </p>
                      <h4 className="text-[15px] leading-[22px] font-normal transition-colors duration-300 hover:text-blue-600">
                        {article.title || "Untitled Article"}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
