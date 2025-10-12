import { useNavigate } from "react-router-dom";

const Section1 = ({ articles }) => {
  const navigate = useNavigate();
  const sectionArticles = articles?.slice(30, 36) || [];

  if (sectionArticles.length === 0) return null;

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  const [featured, second, third, ...rest] = sectionArticles;

  return (
    <section className="w-full bg-gray-50 py-[4rem] mt-12">
      <div className="max-w-[1450px] mx-auto px-[2rem]">

        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[2rem] mb-[2rem]">
          {/* Featured Article */}
          {featured && (
            <div
              className="relative cursor-pointer group rounded-xl overflow-hidden shadow-lg"
              onClick={() => handleClick(featured)}
            >
              <img
                src={featured.featuredImage || "https://placehold.co/800x600"}
                alt={featured.title}
                className="w-full h-[28rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-[1rem] flex flex-col justify-end">
                <span className="bg-[#ff6700] text-white text-xs font-semibold px-[0.75rem] py-[0.25rem] rounded-full uppercase w-fit mb-[0.5rem]">
                  {featured.category || "News"}
                </span>
                <h2 className="text-[1.75rem] font-extrabold text-white line-clamp-2">
                  {featured.title}
                </h2>
                <p className="text-gray-200 text-lg mb-2 line-clamp-4">
            {featured.excerpt || "Read this featured article to learn more..."}
          </p>
                <p className="text-xs text-gray-100 mt-[0.5rem]">
                  👤 {featured.author?.name || "Expert"} • 📅{" "}
                  {featured.createdAt
                    ? new Date(featured.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}

          {/* Second Column */}
          <div className="flex flex-col gap-[1rem]">
            {second && (
              <div
                className="relative cursor-pointer group rounded-xl overflow-hidden shadow-md h-[13rem]"
                onClick={() => handleClick(second)}
              >
                <img
                  src={second.featuredImage || "https://placehold.co/600x400"}
                  alt={second.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent p-[0.5rem] flex flex-col justify-end">
                  <span className="bg-[#ff6700] text-white text-[0.65rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                    {second.category || "News"}
                  </span>
                  <h3 className="text-white font-bold text-[1rem] line-clamp-2">
                    {second.title}
                  </h3>
                </div>
              </div>
            )}
            {third && (
              <div
                className="relative cursor-pointer group rounded-xl overflow-hidden shadow-md h-[13rem]"
                onClick={() => handleClick(third)}
              >
                <img
                  src={third.featuredImage || "https://placehold.co/600x400"}
                  alt={third.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent p-[0.5rem] flex flex-col justify-end">
                  <span className="bg-[#ff6700] text-white text-[0.65rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                    {third.category || "News"}
                  </span>
                  <h3 className="text-white font-bold text-[1rem] line-clamp-2">
                    {third.title}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Second Row - 3 Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] mb-[2rem]">
          {rest.slice(0, 3).map((article) => (
            <div
              key={article._id}
              className="cursor-pointer group rounded-xl overflow-hidden shadow-md bg-white"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x250"}
                alt={article.title}
                className="w-full h-[12rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[1rem]">
                <span className="bg-[#ff6700] text-white text-[0.65rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                  {article.category || "News"}
                </span>
                <h3 className="font-bold text-[1rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - Remaining 6 Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[2rem]">
          {rest.slice(3).map((article) => (
            <div
              key={article._id}
              className="cursor-pointer group rounded-xl overflow-hidden shadow-sm bg-white"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x250"}
                alt={article.title}
                className="w-full h-[10rem] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-[0.75rem]">
                <span className="bg-[#ff6700] text-white text-[0.65rem] font-semibold px-[0.5rem] py-[0.125rem] rounded-full w-fit mb-[0.25rem]">
                  {article.category || "News"}
                </span>
                <h3 className="font-semibold text-[0.95rem] text-gray-900 line-clamp-2 group-hover:text-[#ff6700] transition-colors">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section1;
