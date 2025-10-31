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

  const relatedPosts = data?.articles?.filter(a => a._id !== currentArticle._id).slice(0, 4);

  const handleClickUpdate = (update) => {
    navigate(`/article/${update.slug}`, { state: { article: update } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <Header />

{/* Main Article Section */}
<div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 pt-24">
  {/* Breadcrumbs */}
  <nav className="text-sm text-gray-600 mb-3">
    <a href="/" className="hover:underline">Home</a> ›
    <a href="/" className="hover:underline"> {currentArticle.category} </a> ›
    <span className="text-gray-800"> {currentArticle.title} </span>
  </nav>

  {/* Category Badge */}
  <span className="inline-block px-3 py-1 mb-3 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold">
    {currentArticle.category || "News"}
  </span>

  {/* Article Title */}
  <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
    {currentArticle.title}
  </h1>

  {/* Author & Date */}
  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
    <span>👤 {currentArticle.author?.name || "Unknown"}</span>
    <span>• {currentArticle.updatedAt ? new Date(currentArticle.updatedAt).toLocaleDateString() : "Just now"}</span>
  </div>

  {/* Featured Image */}
  {currentArticle.featuredImage && (
    <div className="w-full overflow-hidden rounded-lg shadow-lg mb-6">
      <img
        src={currentArticle.featuredImage}
        alt={currentArticle.title}
        className="w-full h-[60vh] md:h-[70vh] lg:h-[75vh] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
      />
    </div>
  )}

  {/* Excerpt */}
  {currentArticle.excerpt && (
    <p className="text-gray-700 text-lg mb-10 leading-relaxed">
      {currentArticle.excerpt}
    </p>
  )}

  {/* Article Content */}
  <div className="bg-white rounded-lg shadow-md p-6 prose prose-lg max-w-none text-gray-700">
    <article dangerouslySetInnerHTML={{ __html: currentArticle.content || currentArticle.excerpt }} />
  </div>
</div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="text-lg bg-yellow-500 text-white font-bold px-4 py-1 tracking-wider mx-4">
              Related Posts
            </div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map(post => (
              <div
                key={post._id}
                onClick={() => handleClickUpdate(post)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden transition"
              >
                <div className="overflow-hidden h-48 rounded-t-xl">
                  <img
                    src={post.featuredImage || "https://placehold.co/400x250"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block bg-yellow-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded mb-2">
                    {post.category || "News"}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base line-clamp-2">{post.title}</h3>
                  <div className="text-xs text-gray-400 mt-1">{post.author?.name || "Unknown"}</div>
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
