// src/pages/ArticlePage.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useFetchNews } from "../hooks/useFetchNews";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
  const animatedItemsRef = useRef([]);

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

  // Reading progress bar
  useEffect(() => {
    const articleContent = document.getElementById("article");
    const progressBar = document.getElementById("readingProgress");
    if (!articleContent || !progressBar) return;

    const updateProgress = () => {
      const rect = articleContent.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const articleHeight = articleContent.offsetHeight;
      const distance = Math.min(Math.max(-rect.top, 0), articleHeight);
      const progress = Math.max(0, Math.min(distance / (articleHeight - windowHeight + 200), 1));
      progressBar.style.width = `${progress * 100}%`;
    };

    document.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      document.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [currentArticle]);

  // Animate related articles
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "transition", "duration-700");
            entry.target.classList.remove("opacity-0", "translate-y-4");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedItemsRef.current.forEach((item) => {
      if (item) {
        item.classList.add("translate-y-4", "opacity-0");
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, [currentArticle, data]);

  if (loadingArticle || newsLoading) return <Loading />;

  if (!currentArticle)
    return (
      <p className="text-center py-10 text-red-500 font-bold text-lg">
        Article not found.
      </p>
    );

  const relatedPosts =
    data?.articles
      ?.filter((a) => a._id && a._id !== currentArticle._id)
      .slice(0, 3) || []; // 3 related posts

  const handleClickUpdate = (post) => {
    navigate(`/article/${post.slug}`, { state: { article: post } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f3f8ff] via-[#f9fafb] to-[#eef2ff]">
      {/* Reading Progress */}
      <div
        id="readingProgress"
        className="fixed inset-x-0 top-0 z-[999] h-1 w-0 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] transition-[width] duration-300"
      ></div>

      {/* Header */}
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Article */}
            <article
              id="article"
              className="overflow-hidden rounded-[1rem] border border-white/70 bg-white/90 text-slate-900 shadow-[0_0_1px_rgba(148,163,184,0.2),_0_12px_30px_rgba(15,23,42,0.14)]"
            >
              <header className="border-b border-slate-100/70 bg-gradient-to-br from-slate-50 to-white px-6 py-6 sm:px-10 sm:py-10">
                {currentArticle.category && (
                  <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-500">
                      {currentArticle.category}
                    </span>
                  </div>
                )}
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {currentArticle.title}
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span>{new Date(currentArticle.updatedAt || currentArticle.createdAt).toDateString()}</span>
                  <span>5 Mins Read</span>
                </div>
              </header>

              {currentArticle.featuredImage && (
                <figure className="relative overflow-hidden">
                  <img
                    className="h-[440px] w-full object-cover"
                    src={currentArticle.featuredImage}
                    alt={currentArticle.title}
                    loading="lazy"
                  />
                </figure>
              )}

              <div className="space-y-10 px-6 py-10 text-lg leading-relaxed text-slate-600 sm:px-10 sm:py-12">
                <div dangerouslySetInnerHTML={{ __html: currentArticle.content || currentArticle.excerpt }} />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="backdrop-blur-[18px] bg-[linear-gradient(145deg,rgba(255,255,255,0.85),rgba(246,249,255,0.75))] h-max rounded-[1rem] border border-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.12)] lg:sticky lg:top-28">
              <div className="border-b border-slate-100/70 px-6 py-6">
                <h2 className="text-lg font-semibold text-slate-900">Related Articles</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Hand-picked reads from our DeFi, NFT, and regulation desks.
                </p>
              </div>
              <div className="flex flex-col gap-4 px-6 py-6">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map((post, index) => (
                    <article
                      key={post._id}
                      ref={(el) => (animatedItemsRef.current[index] = el)}
                      className="group overflow-hidden rounded-[0.75rem] border border-white/60 bg-white/80 shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_0_1px_rgba(148,163,184,0.2),_0_12px_30px_rgba(15,23,42,0.14)] cursor-pointer"
                      onClick={() => handleClickUpdate(post)}
                    >
                      <img
                        className="h-40 w-full object-cover"
                        src={post.featuredImage || "/fallback-image.jpg"}
                        alt={post.title || "Article image"}
                        loading="lazy"
                      />
                      <div className="space-y-2 p-5">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] px-3 py-1 text-[10px] font-semibold uppercase text-white">
                          {post.category || "General"}
                        </span>
                        <h3 className="text-base font-semibold leading-snug text-slate-900">{post.title || "Untitled"}</h3>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          {new Date(post.updatedAt || post.createdAt).toDateString()}
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <p className="text-slate-500 text-sm">No related articles found.</p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
