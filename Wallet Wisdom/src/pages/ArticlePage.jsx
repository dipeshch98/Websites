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
    if (article) {
      setCurrentArticle(article);
      setLoadingArticle(false);
    } else if (data?.articles) {
      const found = data.articles.find((a) => a.slug === slug);
      setCurrentArticle(found || null);
      setLoadingArticle(false);
    }
  }, [slug, article, data]);

  if (loadingArticle || newsLoading) return <Loading />;
  if (!currentArticle) return <p className="text-center py-10 text-red-500">Article not found.</p>;

  // Sidebar and related posts
  const latestPosts = data?.articles?.filter(a => a._id !== currentArticle._id).slice(0, 5);
  const relatedPosts = data?.articles?.filter(a => a._id !== currentArticle._id).slice(5, 9);

  const handleClickUpdate = (update) => {
    navigate(`/article/${update.slug}`, { state: { article: update } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-black dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <Header />

      {/* Breadcrumbs */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-4 py-6 pt-18 bg-white">
        <nav className="text-sm text-gray-900 mb-2">
          <a href="/" className="hover:underline">Home</a> ›
          <a href="/" className="hover:underline"> {currentArticle.category} </a> ›
          <span className="text-gray-900 dark:text-gray-600"> {currentArticle.title} </span>
        </nav>
        <span className="inline-block px-3 py-1 mb-3 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold">
          {currentArticle.category || "News"}
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-snug mb-3 text-black">
          {currentArticle.title}
        </h1>

        <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-600 mb-6 gap-4">
          <span>👤 {currentArticle.author?.name || "Unknown"}</span>
          <span>• {currentArticle.updatedAt ? new Date(currentArticle.updatedAt).toLocaleDateString() : "Just now"}</span>
        </div>

        {currentArticle.featuredImage && (
          <div className="w-full mb-6 overflow-hidden rounded-lg shadow-md">
            <img
              src={currentArticle.featuredImage}
              alt={currentArticle.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {currentArticle.excerpt && (
          <p className="text-gray-600 dark:text-gray-600 text-lg mb-6">
            {currentArticle.excerpt}
          </p>
        )}
      </div>

      {/* Main Content + Sidebar */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-4 flex flex-col lg:flex-row gap-6 bg-white">
        {/* Left Column - Article */}
        <div className="w-full lg:w-2/3 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col gap-6">
          <article
            className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed
                       prose-p:mb-3 prose-p:mt-0
                       prose-img:my-4 prose-h2:mt-6 prose-h2:mb-3
                       prose-h3:mt-5 prose-h3:mb-2"
            dangerouslySetInnerHTML={{ __html: currentArticle.content || currentArticle.excerpt }}
          />
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3 lg:sticky lg:top-20 self-start h-fit">
          <div className="space-y-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white bg-yellow-600 text-center px-4 py-2 rounded-md shadow-sm mb-4">
              Latest Posts
            </h2>

            {/* Big Top Post */}
            {latestPosts[0] && (
              <div
                className="relative h-[200px] w-full rounded-lg overflow-hidden mb-4 cursor-pointer group"
                onClick={() => handleClickUpdate(latestPosts[0])}
              >
                <img
                  src={latestPosts[0].featuredImage || "https://placehold.co/400x200"}
                  alt={latestPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 p-3 flex flex-col justify-end h-full">
                  <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-0.5 rounded-full mb-2 w-fit">
                    {latestPosts[0].category || "News"}
                  </span>
                  <h3 className="text-white font-semibold text-lg hover:text-yellow-600 cursor-pointer">
                    {latestPosts[0].title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-200 mt-2 space-x-3">
                    <span>{latestPosts[0].author?.name || "Unknown"}</span>
                    <span>• {latestPosts[0].createdAt ? new Date(latestPosts[0].createdAt).toLocaleDateString() : "Just now"}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Small Post Cards */}
            <div className="space-y-4 bg-white">
              {latestPosts.slice(1).map((post) => (
                <div
                  key={post._id}
                  className="flex h-[90px] gap-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-200 transition p-2"
                  onClick={() => handleClickUpdate(post)}
                >
                  <img
                    src={post.featuredImage || "https://placehold.co/100x90"}
                    alt={post.title}
                    className="w-[100px] h-full object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-yellow-600 font-medium">{post.category || "News"}</span>
                    <h4 className="font-semibold text-sm leading-snug text-gray-900 cursor-pointer">
                      {post.title.length > 50 ? post.title.slice(0, 50) + "…" : post.title}
                    </h4>
                    <span className="text-xs text-gray-400">
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Just now"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-4 lg:px-4 py-10 bg-white">
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-400"></div>
            <div className="text-[1.125rem] bg-yellow-600 text-white font-bold text-center px-4 py-1 tracking-wider mx-4">
              RELATED POSTS
            </div>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((post) => (
              <div
                key={post._id}
                onClick={() => handleClickUpdate(post)}
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.featuredImage || "https://placehold.co/400x250"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
                </div>
                <div className="p-4">
                  <span className="inline-block bg-yellow-600 text-white text-[11px] font-semibold uppercase px-2 py-1 rounded mb-2">
                    {post.category || "News"}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg leading-snug mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm gap-2">
                    <span>{post.author?.name || "Unknown"}</span>
                    <span className="text-gray-400">
                      • {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : "Just now"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ArticlePage;
