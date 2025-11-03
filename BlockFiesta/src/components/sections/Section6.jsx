import { useNavigate } from "react-router-dom";

const Section6 = ({ articles }) => {
  const navigate = useNavigate();

  if (!articles || articles.length < 7) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  // First 7 articles for this section (adjust index as needed)
  const sectionArticles = articles.slice(90, 97);
  const firstRow = sectionArticles.slice(0, 3);
  const secondRow = sectionArticles.slice(3, 7);

  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 space-y-12">
        {/* ===== Section Title ===== */}
        <div className="flex items-center mb-8">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold px-6 text-[#00c003] tracking-wide uppercase">
            CryptoSignals Hub

          </h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* ===== First Row: 3 Articles ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {firstRow.map((article, idx) => (
            <div
              key={article._id || idx}
              className="cursor-pointer group"
              onClick={() => handleClick(article)}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={article.featuredImage || "https://placehold.co/600x400"}
                  alt={article.title}
                  className="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Outside */}
              <div className="mt-3">
                <span className="text-xs text-white border-b-emerald-500 p-1 bg-[#00c003] font-semibold uppercase">
                  {article.category || "News"}
                </span>
                <h3 className="text-xl font-bold mt-1 group-hover:text-[#00c003]">{article.title}</h3>
                <div className="text-sm text-gray-500 mt-1 flex gap-4">
                  <span>👤 {article.author?.name || "BlockFiesta Expert"}</span>
                  <span>
                    📅{" "}
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Second Row: 4 Articles ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {secondRow.map((article, idx) => (
            <div
              key={article._id || idx}
              className="cursor-pointer group"
              onClick={() => handleClick(article)}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={article.featuredImage || "https://placehold.co/400x300"}
                  alt={article.title}
                  className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Content Outside */}
              <div className="mt-3">
                <span className="text-xs text-white border-b-emerald-500 p-1 bg-[#00c003] font-semibold uppercase">
                  {article.category || "News"}
                </span>
                <h4 className="text-lg font-bold mt-1 group-hover:text-[#00c003]">{article.title}</h4>
                <div className="text-sm text-gray-500 mt-1 flex gap-4">
                  <span>👤 {article.author?.name || "BlockFiesta Expert"}</span>
                  <span>
                    📅{" "}
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
