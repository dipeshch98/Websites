import React from "react";

export default function Section3({ articles }) {
  if (!articles || articles.length === 0) return null;

  const featured = articles[0];
  const articleList = articles.slice(1, 5); // next 4 articles
  const bitcoinNews = articles.slice(0, 8); // last 6 Bitcoin news
  const sidebarArticle = articles[5]; // just pick one for sidebar banner

  return (
    <section className="max-w-[1200px] mx-auto my-16 px-5 grid grid-cols-[2fr_1fr] gap-10 max-sm:grid-cols-1 max-sm:gap-7 max-md:gap-6 max-lg:grid-cols-[1.8fr_1fr] max-lg:gap-8">

      {/* Editor's Choice */}
      <div>
        <h2 className="text-xl mb-4 text-[#f7931a] font-bold">Editor's Choice</h2>

        {/* Featured Article */}
        <div className="bg-bg-card rounded-lg overflow-hidden mb-8 cursor-pointer" onClick={() => window.location.href = `/article/${featured.slug}`}>
          <img
            src={featured.featuredImage}
            alt={featured.title}
            className="w-full h-[300px] object-cover max-sm:h-[200px]"
          />
          <div className="p-5 max-sm:p-4 bg-neutral-900">
            <span className="inline-block bg-[#f7931a] text-black px-3 py-1 rounded-sm text-xs font-bold mb-2.5 uppercase">
              {featured.category}
            </span>
            <h2 className="text-3xl text-white mb-2 max-sm:text-xl font-bold">{featured.title}</h2>
            <div className="text-sm text-gray-400 mb-4">
              By {featured.author.name} - {new Date(featured.createdAt).toLocaleDateString()}
            </div>
            <p className="text-base text-white leading-loose">{featured.excerpt}</p>
          </div>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-5">
          {articleList.map((article, idx) => (
            <div
              key={idx}
              className="flex gap-4 p-4 bg-bg-card rounded-lg cursor-pointer transition-colors hover:bg-bg-light max-sm:flex-col max-sm:p-4 bg-neutral-900"
              onClick={() => window.location.href = `/article/${article.slug}`}
            >
              <div
                className="w-[120px] h-[90px] bg-cover bg-center rounded-base flex-shrink-0 max-sm:w-full max-sm:h-[150px] max-sm:mb-2.5 max-md:w-[100px] max-md:h-[75px]"
                style={{ backgroundImage: `url(${article.featuredImage})` }}
              ></div>
              <div>
                <h3 className="text-lg text-white mb-2 max-sm:text-base font-semibold">{article.title}</h3>
                <div className="text-sm text-gray-400">{article.author.name} - {new Date(article.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-5">
        {/* Sidebar Banner Article */}
        {sidebarArticle && (
          <div
            className="relative bg-bg-card rounded-lg overflow-hidden h-[300px] cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 max-sm:h-[250px]"
            onClick={() => window.location.href = `/article/${sidebarArticle.slug}`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>
            <div className="absolute bottom-5 left-5 right-5 z-20 text-white max-sm:bottom-4 max-sm:left-4 max-sm:right-4">
              <span className="inline-block bg-[#f7931a] text-black px-3 py-1 rounded-sm text-xs font-bold mb-2.5 uppercase">
                {sidebarArticle.category}
              </span>
              <h3 className="text-xl text-white mb-2 font-semibold max-sm:text-lg">{sidebarArticle.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{new Date(sidebarArticle.createdAt).toLocaleDateString()}</p>
            </div>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${sidebarArticle.featuredImage})` }}
            ></div>
          </div>
        )}

        {/* Bitcoin News List */}
        <div className="bg-bg-card p-5 rounded-lg max-sm:p-4 bg-neutral-900">
          <h2 className="text-xl mb-4 text-[#f7931a] font-bold">Bitcoin News</h2>
          <div className="mt-4 flex flex-col gap-3">
            {bitcoinNews.map((news, idx) => (
              <div
                key={idx}
                className="cursor-pointer transition-all hover:pl-2.5"
                onClick={() => window.location.href = `/article/${news.slug}`}
              >
                <h4 className="text-sm text-white mb-1.5 font-semibold">{news.title}</h4>
                <p className="text-sm text-gray-400">{new Date(news.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
