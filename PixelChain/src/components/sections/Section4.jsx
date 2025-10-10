import React from "react";
import { useNavigate } from "react-router-dom";

export default function Section4({ articles }) {
  const navigate = useNavigate();

  if (!articles || articles.length === 0)
    return (
      <p className="text-center text-gray-500 py-10">
        No articles available.
      </p>
    );

  // slice articles
  const latest = articles.slice(100, 108);
  const trending = articles.slice(110, 115);

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="max-w-[1300px] mx-auto px-4 md:px-6 py-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
      {/* -------- Left Column -------- */}
<div className="space-y-10">
  <h2 className="text-3xl font-extrabold text-gray-900 border-l-4 border-[#00c003] pl-3 mb-6">
    Latest Insights
  </h2>

  {/* --- Row 1: Two Horizontal Articles --- */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {latest.slice(0, 2).map((article) => (
      <div
        key={article._id}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
        onClick={() => handleClick(article)}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-56">
          <img
            src={article.featuredImage || 'https://placehold.co/600x400'}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between">
          {/* ✅ Badge now fits content */}
          <div className="flex items-center justify-start mb-3">
            <span className="inline-block bg-[#00c003] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase whitespace-nowrap">
              {article.category || 'News'}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#00c003] transition-colors">
            {article.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3">
            {article.excerpt || 'Read more about this article...'}
          </p>

          <p className="text-xs text-gray-500 mt-3">
            👤 {article.author?.name || 'SafeChain Team'} • 📅{' '}
            {article.createdAt
              ? new Date(article.createdAt).toLocaleDateString()
              : ''}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* --- Row 2: Two Vertical Articles (Full Width) --- */}
  <div className="space-y-6">
    {latest.slice(2, 4).map((article) => (
      <div
        key={article._id}
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col md:flex-row"
        onClick={() => handleClick(article)}
      >
        {/* Image */}
        <div className="md:w-1/3 relative overflow-hidden">
          <img
            src={article.featuredImage || 'https://placehold.co/600x400'}
            alt={article.title}
            className="h-60 md:h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            {/* ✅ Badge fixed here too */}
            <div className="flex items-center justify-start mb-3">
              <span className="inline-block bg-[#00c003] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase whitespace-nowrap">
                {article.category || 'News'}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#00c003] transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">
              {article.excerpt || 'Read more about this article...'}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            👤 {article.author?.name || 'SafeChain Team'} • 📅{' '}
            {article.createdAt
              ? new Date(article.createdAt).toLocaleDateString()
              : ''}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>



      {/* -------- Right Column (Sticky) -------- */}
      <aside className="sticky top-24 h-fit space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#00c003] pl-3">
          Trending Now
        </h2>

        {trending.map((post) => (
          <div
            key={post._id}
            className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group"
            onClick={() => handleClick(post)}
          >
            <img
              src={post.featuredImage || "https://placehold.co/100x70"}
              alt={post.title}
              className="w-[100px] h-[70px] rounded-md object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-[#00c003] transition-colors">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                📅{" "}
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString()
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}
