// src/components/pages/ArticlePage.jsx
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
      <p className="text-center py-10 text-red-500">Article not found.</p>
    );

  const recentUpdates = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(106, 111);

  const relatedPosts = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(100, 106);

  const handleClickUpdate = (update) => {
    navigate(`/article/${update.slug}`, { state: { article: update } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />


<div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto  py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left Column */}
        <main className="flex flex-col gap-6 mt-12">

          {/* Article Header */}
          <div>
            {currentArticle.category && (
              <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {currentArticle.category.toUpperCase()}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight">
              {currentArticle.title}
            </h1>
            {currentArticle.excerpt && <p className="mt-2">{currentArticle.excerpt}</p>}

            {/* Author Info */}
            <div className="flex items-start gap-3 border-b pb-3 mt-4">
              <div>
                <p className="text-sm text-gray-700">
                  By{" "}
                  <span className="text-blue-900 font-semibold hover:underline cursor-pointer">
                    {currentArticle.author?.name || "Unknown"}
                  </span>

                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Last updated:{" "}
                  {currentArticle.updatedAt
                    ? new Date(currentArticle.updatedAt).toLocaleDateString()
                    : "Just now"}
                </p>
              </div>
            </div>

            {/* Featured Image */}
            {currentArticle.featuredImage && (
              <div className="mt-4 group">
                <img
                  src={currentArticle.featuredImage}
                  alt={currentArticle.title}
                  className="w-full h-[28rem] object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                       prose-p:mb-3 prose-p:mt-0
                       prose-img:my-4 prose-h2:mt-6 prose-h2:mb-3
                       prose-h3:mt-5 prose-h3:mb-2
                       prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:italic"
            dangerouslySetInnerHTML={{
              __html: currentArticle.content || currentArticle.excerpt,
            }}
          />

          {/* Related Topics */}
          {currentArticle.tags?.length > 0 && (
            <div className=" mb-4 mt-4">
              <span className="text-sm font-bold text-gray-500 mr-2">
                RELATED TOPICS:
              </span>
              {currentArticle.tags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors ml-2"
                >
                  #{tag.toUpperCase()}
                </a>
              ))}
            </div>
          )}

        </main>

        {/* Right Column: Must Read */}
        <aside className="flex flex-col gap-4  lg:sticky lg:top-20 self-start h-fit">
          <h2 className="text-[25px] font-bold text-blue-900 mb-4">
            › Must Read
          </h2>

          {/* Top Big Post */}
          {recentUpdates[0] && (
            <div
              className="border border-gray-200 mb-4 rounded-md cursor-pointer hover:shadow-md transition"
              onClick={() => handleClickUpdate(recentUpdates[0])}
            >
              <div className="p-3">
                <p className="text-sm text-gray-500 mb-1">
                  {new Date(recentUpdates[0].createdAt).toLocaleDateString()}
                </p>
                <h3 className="font-bold text-black hover:text-blue-900">
                  {recentUpdates[0].title}
                </h3>
              </div>
              <img
                src={recentUpdates[0].featuredImage || "https://placehold.co/290x200"}
                className="w-full h-[200px] object-cover mt-2 hover:opacity-90 transition rounded-b-md"
              />
            </div>
          )}

          {/* Small List Items */}
          <div className="space-y-4">
            {recentUpdates.slice(1).map((post) => (
              <div
                key={post._id}
                className="flex gap-3 cursor-pointer hover:bg-gray-50 transition rounded-md p-2"
                onClick={() => handleClickUpdate(post)}
              >
                <img
                  src={post.featuredImage || "https://placehold.co/60x40"}
                  className="w-[60px] h-[40px] object-cover rounded-md flex-shrink-0 hover:opacity-90 transition"
                />
                <h4 className="text-[15px] leading-[21px] font-semibold text-black hover:text-blue-600">
                  {post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title}
                </h4>
              </div>
            ))}
          </div>
        </aside>


      </div>
</div>


      {/* You May Like */}
      {relatedPosts.length > 0 && (
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mt-8 max-w-[1400px] mx-auto mb-8">
            <h2 className="text-2xl font-bold text-black mb-6 border-l-4 border-blue-600 pl-2">
              › You May Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post._id}
                  className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => handleClickUpdate(post)}
                >
                  <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                    <img
                      src={post.featuredImage || "https://placehold.co/400x250"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-white font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                        {post.title.length > 60 ? post.title.slice(0, 60) + "…" : post.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-3 bg-white">
                    <span className="text-[0.75rem] font-medium text-gray-900 uppercase">
                      {post.category || "NEWS"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      )}


      <Footer />
    </div>
  );
};

export default ArticlePage;
