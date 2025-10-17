import { useNavigate } from "react-router-dom";

const Section1 = ({ articles = [] }) => {
  const navigate = useNavigate();

  if (!articles || articles.length === 0) return null;

  const mainArticle = articles[0];
  const sidebarArticles = articles.slice(1, 4); // Show next 3 in sidebar

  const handleArticleClick = (slug) => {
    navigate(`/article/${slug}`);
  };

  return (
    <section className=" px-4 md:px-8 pb-14 pt-14">
      <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Main Article */}
        <article
          className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-[#151515] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.45)] cursor-pointer"
          onClick={() => handleArticleClick(mainArticle.slug)}
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20 transition-transform duration-500 group-hover:scale-105">
            <img
              src={mainArticle.featuredImage}
              alt={mainArticle.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative flex h-full flex-col gap-6">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
              <span className="rounded-full border border-white/30 px-3 py-1 text-white">
                {mainArticle.category}
              </span>
              <span aria-hidden="true">&#8226;</span>
              <span>{mainArticle.createdAt
                    ? new Date(mainArticle.createdAt).toLocaleDateString()
                    : "Recently Published"}</span>
            </div>
            <h1 className="font-[Lato] text-3xl font-black leading-tight text-white sm:text-4xl">
              {mainArticle.title}
            </h1>
            <p className="max-w-xl text-base text-gray-400">{mainArticle.excerpt}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#ff3333] transition hover:gap-3 hover:text-[#ff5555]">
              Read full story <span aria-hidden="true">&#10132;</span>
            </span>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hero-sidebar flex flex-col gap-6 rounded-2xl border border-gray-700 bg-[#151515] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
          <div className="flex items-center gap-4 text-white">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent"></div>
            <h2 className="font-[Lato] text-xl font-semibold uppercase tracking-[0.4em] text-gray-400">
              Top News
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent"></div>
          </div>

          <div className="space-y-6">
            {sidebarArticles.map((article) => (
              <article
                key={article.slug}
                className="group space-y-3 rounded-xl border border-transparent bg-[#1a1a1a]/40 p-5 transition hover:border-[#ff3333] cursor-pointer"
                onClick={() => handleArticleClick(article.slug)}
              >
                <h3 className="font-[Lato] text-lg text-white">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                  <span className="rounded-full border border-white/20 px-3 py-1 text-gray-400">
                    {article.category}
                  </span>
                  <span aria-hidden="true">&#8226;</span>
                  <span>{article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : "Recently Published"}</span>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Section1;
