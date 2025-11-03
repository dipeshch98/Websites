// src/pages/ArticlePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFetchNews } from "../hooks/useFetchNews";
import Loading from "../components/Loading";

const ArticlePage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  const { data, loading: newsLoading } = useFetchNews();
  const [currentArticle, setCurrentArticle] = useState(article || null);
  const [loadingArticle, setLoadingArticle] = useState(!article);

  useEffect(() => {
    setLoadingArticle(true);
    if (location.state?.article) {
      setCurrentArticle(location.state.article);
      setLoadingArticle(false);
    } else if (data?.articles) {
      const found = data.articles.find((a) => a.slug === slug);
      setCurrentArticle(found || null);
      setLoadingArticle(false);
    }
  }, [slug, location.state, data]);

  if (loadingArticle || newsLoading) return <Loading />;

  if (!currentArticle)
    return (
      <p className="text-center py-10 text-red-500 font-bold text-lg">
        Article not found.
      </p>
    );

  const recentUpdates = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(126, 131);

  const relatedPosts = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(100, 104);

  const handleClickUpdate = (update) => {
    navigate(`/article/${update.slug}`, { state: { article: update } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 py-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* Left Column */}
        <main className="flex flex-col gap-6">
          {/* Article Header */}
          <div className="space-y-4">
            {currentArticle.category && (
              <span className="text-xs text-white border-b-emerald-500 rounded-sm p-1 bg-[#00c003] font-semibold uppercase">
                {currentArticle.category.toUpperCase()}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {currentArticle.title}
            </h1>
            {currentArticle.excerpt && (
              <p className="text-gray-700 text-lg">{currentArticle.excerpt}</p>
            )}

            {/* Author Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mt-2">
              <span>👤 {currentArticle.author?.name || "BlockFiesta Expert"}</span>
              <span>
                📅{" "}
                {currentArticle.updatedAt
                  ? new Date(currentArticle.updatedAt).toLocaleDateString()
                  : "Recently Published"}
              </span>
            </div>

            {/* Featured Image */}
            {currentArticle.featuredImage && (
              <div className="mt-6 overflow-hidden rounded-lg group">
                <img
                  src={currentArticle.featuredImage}
                  alt={currentArticle.title}
                  className="w-full h-[28rem] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                       prose-p:mb-4 prose-p:mt-0
                       prose-img:my-6 prose-h2:mt-8 prose-h2:mb-4
                       prose-h3:mt-6 prose-h3:mb-3
                       prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:italic"
            dangerouslySetInnerHTML={{
              __html: currentArticle.content || currentArticle.excerpt,
            }}
          />

          {/* Tags */}
          {currentArticle.tags?.length > 0 && (
            <div className="mt-6">
              <span className="text-sm font-bold text-gray-500 mr-2">TAGS:</span>
              {currentArticle.tags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm font-medium text-[#00c003] hover:text-green-600 ml-2 transition-colors"
                >
                  #{tag.toUpperCase()}
                </a>
              ))}
            </div>

          )}

          {/* You May Like */}
          {relatedPosts.length > 0 && (
            <div className="max-w-full mx-auto pt-12">
              <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#00c003] pl-3 mb-6">
                You May Like
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.slice(0, 4).map((post) => (
                  <div
                    key={post._id}
                    className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                    onClick={() => handleClickUpdate(post)}
                  >
                    {/* Image */}
                    <div className="relative w-full h-40 sm:h-48 md:h-52 overflow-hidden rounded-t-lg">
                      <img
                        src={post.featuredImage || "https://placehold.co/400x250"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content outside the image */}
                    <div className="p-4 space-y-2">
                      <span className="text-xs text-white border-b-emerald-500 rounded-sm p-1 bg-[#00c003] font-semibold uppercase">
                        {post.category || "NEWS"}
                      </span>
                      <h3 className="text-gray-900 font-bold text-base leading-snug line-clamp-2 group-hover:text-[#00c003] transition-colors duration-300 py-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        👤 {post.author?.name || "BlockFiesta Expert"} • 📅{" "}
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleDateString()
                          : "Recently Published"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>

        {/* Right Column: Must Read */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 self-start">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#00c003] pl-3 mb-4">
            Must Read
          </h2>

          {/* Big Post */}
          {recentUpdates[0] && (
            <div
              className="overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleClickUpdate(recentUpdates[0])}
            >
              <div className="relative">
                <img
                  src={recentUpdates[0].featuredImage || "https://placehold.co/400x250"}
                  alt={recentUpdates[0].title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>
              <div className="p-3">
                <span className="text-xs text-white border-b-emerald-500 rounded-sm p-1 bg-[#00c003] font-semibold uppercase">
                  {recentUpdates[0].category || "NEWS"}
                </span>
                <h3 className="font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-[#00c003] transition-colors">
                  {recentUpdates[0].title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {recentUpdates[0].author?.name || "BlockFiesta Expert"} •{" "}
                  {recentUpdates[0].createdAt
                    ? new Date(recentUpdates[0].createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </div>
          )}
          {/* Small List */}
          <div className="space-y-4">
            {recentUpdates.slice(1).map((post) => (
              <div
                key={post._id}
                className="flex gap-4 items-center cursor-pointer rounded-md p-3 bg-white shadow-sm transition-all duration-300 group hover:shadow-lg hover:scale-[1.02]"
                onClick={() => handleClickUpdate(post)}
              >
                <img
                  src={post.featuredImage || "https://placehold.co/100x70"}
                  className="w-[100px] h-[70px] object-cover rounded-md flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex-1">
                  <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-[#00c003] transition-colors line-clamp-2">
                    {post.title.length > 80 ? post.title.slice(0, 80) + "…" : post.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    👤 {post.author?.name || "BlockFiesta Expert"} • 📅{" "}
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : "Recently Published"}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </aside>
      </div>



      <Footer />
    </div>
  );
};

export default ArticlePage;
