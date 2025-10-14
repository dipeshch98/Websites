// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFetchNews } from "../hooks/useFetchNews";
import Loading from "../components/Loading";
import NavLinks from "../components/Navlinks";

const ArticlePage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { article: initialArticle } = location.state || {};

  const { data, loading: newsLoading } = useFetchNews();
  const [currentArticle, setCurrentArticle] = useState(initialArticle || null);
  const [loadingArticle, setLoadingArticle] = useState(!initialArticle);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    if (initialArticle) {
      setCurrentArticle(initialArticle);
      setLoadingArticle(false);
    } else if (data?.articles) {
      const found = data.articles.find((a) => a.slug === slug);
      setCurrentArticle(found || null);
      setLoadingArticle(false);
    }
  }, [slug, initialArticle, data]);

  if (loadingArticle || newsLoading) return <Loading />;

  if (!currentArticle)
    return (
      <p className="text-center py-10 text-red-500 font-bold text-lg">
        Article not found.
      </p>
    );

  const latestNews = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(0, 5);

  const trendingNews = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(20, 23); // Trending only 3 articles


  const relatedPosts = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(5, 11);

  const handleClickUpdate = (post) => {
    navigate(`/article/${post.slug}`, { state: { article: post } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#0a0a0a] text-white leading-loose">
      {/* Header */}
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

      {/* Nav */}
      <NavLinks />

      {/* Breadcrumb & Article Title */}
      <main id="main-content" className="max-w-[1200px] mx-auto px-5 pt-8">
        <div className="mb-8">
          <div className="text-sm text-[#888] mb-2">
            <a href="/" className="text-[#f7931a]">Home</a> &gt; <span>{currentArticle.category}</span>
          </div>
          {currentArticle.category && (
            <span className="bg-[#f7931a] text-black px-3 py-1.5 rounded-sm text-xs font-bold mb-3 inline-block uppercase w-fit">
              {currentArticle.category}
            </span>
          )}
          <h1 className="text-4xl font-bold leading-tight mb-6 max-sm:text-3xl">
            {currentArticle.title}
          </h1>
          <div className="flex flex-wrap gap-5 mb-6 text-sm text-[#888] items-center">
            <span>{new Date(currentArticle.updatedAt || currentArticle.createdAt).toDateString()}</span>
            <span>5 Mins Read</span>
            <div className="flex gap-2 ml-auto">
              <button className="px-3 py-2 bg-[#1877f2] rounded-md font-bold">F</button>
              <button className="px-3 py-2 bg-[#1da1f2] rounded-md font-bold">T</button>
              <button className="px-3 py-2 bg-[#222] rounded-md font-bold">🔗</button>
            </div>
          </div>
          {currentArticle.featuredImage && (
            <div className="w-full h-[400px] max-sm:h-[250px] rounded-lg overflow-hidden mb-8">
              <img
                src={currentArticle.featuredImage}
                alt={currentArticle.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Article + Sidebar */}
        <div className="grid grid-cols-[2fr_1fr] gap-10 max-md:grid-cols-1 max-md:gap-8">
          {/* Article */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a1a] p-10 rounded-lg max-sm:p-6">
              <div dangerouslySetInnerHTML={{ __html: currentArticle.content || currentArticle.excerpt }} />
            </div>

            {/* Navigation */}
            <div className="mt-10 border-t border-b border-[#333] grid grid-cols-2 max-md:grid-cols-1">
              <div className="border-r border-[#333] max-md:border-r-0 max-md:border-b">
                <a className="block p-6 no-underline text-white transition-all hover:bg-[rgba(247,147,26,0.05)] cursor-pointer" onClick={() => handleClickUpdate(relatedPosts[0])}>
                  <span className="text-xs text-[#888] uppercase tracking-wider block mb-2 font-semibold">Previous Article</span>
                  <h4 className="text-lg font-medium">{relatedPosts[0]?.title}</h4>
                </a>
              </div>
              <div>
                <a className="block p-6 no-underline text-white transition-all hover:bg-[rgba(247,147,26,0.05)] cursor-pointer text-right max-md:text-left" onClick={() => handleClickUpdate(relatedPosts[1])}>
                  <span className="text-xs text-[#888] uppercase tracking-wider block mb-2 font-semibold">Next Article</span>
                  <h4 className="text-lg font-medium">{relatedPosts[1]?.title}</h4>
                </a>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-[#1a1a1a] p-8 rounded-lg mt-5 max-sm:p-6">
              <h3 className="mb-5 text-[#f7931a] font-bold text-xl">Related Posts</h3>
              <div className="grid gap-5">
                {relatedPosts.map((post, idx) => (
                  <div key={post._id} className="flex gap-5 p-4 bg-[#222] rounded-md cursor-pointer hover:bg-[#333] max-md:flex-col" onClick={() => handleClickUpdate(post)}>
                    <div className="w-20 h-[60px] bg-cover bg-center rounded-md flex-shrink-0" style={{ backgroundImage: `url(${post.featuredImage})` }}></div>
                    <div>
                      <span className="text-xs text-[#888] block mb-1.5">{new Date(post.updatedAt || post.createdAt).toDateString()}</span>
                      <h4 className="text-base font-medium">{post.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8 md:sticky lg:sticky top-26 h-fit">
            {/* Trending Section */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="mb-5 text-[#f7931a] text-xl font-bold">Trending</h3>
              <div className="flex flex-col gap-4">
                {trendingNews.map((news) => (
                  <div
                    key={news._id}
                    className="flex gap-3 p-3 bg-[#222] rounded-md cursor-pointer hover:bg-[#333]"
                    onClick={() => handleClickUpdate(news)}
                  >
                    <div
                      className="w-[60px] h-[45px] bg-cover bg-center rounded-md flex-shrink-0"
                      style={{ backgroundImage: `url(${news.featuredImage})` }}
                    ></div>
                    <div>
                      <h4 className="text-sm font-medium">{news.title}</h4>
                      <span className="text-xs text-[#888]">
                        {new Date(news.updatedAt || news.createdAt).toDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest News Section */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h3 className="mb-5 text-[#f7931a] text-xl font-bold">Latest News</h3>
              <div className="flex flex-col gap-4">
                {latestNews.map((news) => (
                  <div
                    key={news._id}
                    className="flex gap-3 p-3 bg-[#222] rounded-md cursor-pointer hover:bg-[#333]"
                    onClick={() => handleClickUpdate(news)}
                  >
                    <div
                      className="w-[60px] h-[45px] bg-cover bg-center rounded-md flex-shrink-0"
                      style={{ backgroundImage: `url(${news.featuredImage})` }}
                    ></div>
                    <div>
                      <h4 className="text-sm font-medium">{news.title}</h4>
                      <span className="text-xs text-[#888]">
                        {new Date(news.updatedAt || news.createdAt).toDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ArticlePage;
