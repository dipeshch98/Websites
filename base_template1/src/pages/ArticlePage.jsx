// src/pages/ArticlePage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFetchNews } from "../hooks/useFetchNews";
import Loading from "../components/Loading";

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

  const relatedPosts = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(5, 11);

  const handleClickUpdate = (post) => {
    navigate(`/article/${post.slug}`, { state: { article: post } });
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="min-h-screen text-slate-900 antialiased"
      style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#fafafa 100%)" }}
    >
      {/* Header */}
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        headerStyle={{
          backgroundColor: "#1e40af",
          animation: "slideDown 0.5s ease-out",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      />

      {/* Main Article */}
      <main className="py-10">
        <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,_2fr)_300px] lg:grid-cols-[minmax(0,_2.5fr)_350px]">
            
            {/* Article */}
            <article
              className="rounded-xl border bg-white p-6 md:p-8 lg:p-12"
              style={{ borderColor: "#e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            >
              <div className="mb-8 border-b pb-6" style={{ borderColor: "#e2e8f0" }}>
                {currentArticle.category && (
                  <span
                    className="mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    {currentArticle.category}
                  </span>
                )}
                <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  {currentArticle.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 md:gap-6">
                  <span className="font-medium">
                    {new Date(currentArticle.updatedAt || currentArticle.createdAt).toDateString()}
                  </span>
                  <span className="font-medium">5 Mins Read</span>
                  <div className="flex w-full items-center gap-2 md:ml-auto md:w-auto md:justify-end">
                    <span className="mr-2 font-semibold uppercase tracking-wide md:mr-0">Share</span>
                    <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white" style={{ backgroundColor: "#1877f2" }}>f</a>
                    <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">&#x1D54F;</a>
                    <a href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white" style={{ backgroundColor: "#0077b5" }}>in</a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-slate max-w-none text-base leading-7">
                {currentArticle.featuredImage && (
                  <div className="my-8 text-center">
                    <img
                      src={currentArticle.featuredImage}
                      alt={currentArticle.title}
                      className="mx-auto w-full max-w-3xl rounded-lg"
                      style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    />
                  </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: currentArticle.content || currentArticle.excerpt }} />
              </div>
            </article>

            {/* Sidebar */}
            <aside
              className="sticky top-24 h-fit rounded-xl p-6"
              style={{ border: "1px solid #e2e8f0", backgroundColor: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            >
              <h3 className="mb-6 border-b-2 pb-2 text-xl font-semibold" style={{ borderColor: "#2563eb" }}>
                Latest News
              </h3>
              {latestNews.map((news) => (
                <article
                  key={news._id}
                  className="group mb-6 flex items-center gap-4 border-b pb-6 cursor-pointer last:border-b-0 last:pb-0"
                  onClick={() => handleClickUpdate(news)}
                  style={{ borderColor: "#e2e8f0" }}
                >
                  <img src={news.featuredImage || "https://placehold.co/80x60"} alt={news.title} className="h-16 w-20 rounded-md object-cover"/>
                  <div>
                    <h4 className="line-clamp-2 text-sm font-semibold leading-snug group-hover:text-[#2563eb]">
                      {news.title}
                    </h4>
                    <span className="text-xs font-medium text-slate-500">
                      {new Date(news.updatedAt || news.createdAt).toDateString()}
                    </span>
                  </div>
                </article>
              ))}
            </aside>

          </div>
        </div>
      </main>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12">
          <div className="mx-auto px-4 py-12 rounded-xl shadow-card md:px-8" style={{ maxWidth: "1200px", border: "1px solid #e2e8f0", backgroundColor: "#fff" }}>
            <h2 className="mb-8 text-center text-3xl font-semibold">
              Related <span style={{ color: "#2563eb" }}>Posts</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
                <article
                  key={post._id}
                  className="group overflow-hidden rounded-xl border bg-white shadow-card cursor-pointer transition hover:-translate-y-1"
                  style={{ borderColor: "#e2e8f0" }}
                  onClick={() => handleClickUpdate(post)}
                >
                  <img src={post.featuredImage || "https://placehold.co/400x250"} alt={post.title} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
                  <div className="space-y-2 p-6">
                    <h3 className="line-clamp-2 text-lg font-semibold leading-snug">{post.title}</h3>
                    <span className="text-sm font-medium text-slate-500">
                      {new Date(post.updatedAt || post.createdAt).toDateString()}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer articles={data.articles}/>
    </div>
  );
};

export default ArticlePage;
