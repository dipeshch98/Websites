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

  if (loadingArticle || newsLoading) return <Loading />;

  if (!currentArticle)
    return (
      <p
        style={{ color: "#ff3333" }}
        className="text-center py-10 font-bold text-lg"
      >
        Article not found.
      </p>
    );

  const relatedPosts =
    data?.articles
      ?.filter((a) => a._id && a._id !== currentArticle._id)
      .slice(0, 3) || [];

  const handleClickUpdate = (post) => {
    navigate(`/article/${post.slug}`, { state: { article: post } });
    window.scrollTo(0, 0);
  };

  // Helper to map social colors
  const socialColors = {
    facebook: "#1877f2",
    twitter: "#1da1f2",
    whatsapp: "#25d366",
    pinterest: "#bd081c",
    "email-share": "#34495e",
  };

  return (
    <div
      className="antialiased min-h-screen"
    >
      <Header />

      <div
        className="max-w-[1400px] mx-auto px-4 md:px-8 pt-14 pb-14 grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Main Article */}
        <main
          id="main-content"
          className="lg:col-span-2 rounded-lg overflow-hidden"
          style={{ backgroundColor: "#151515" }}
        >
          {/* Article Header */}
          <header
            className="p-8 border-b"
            style={{ borderColor: "#222", borderWidth: "1px" }}
          >
            {currentArticle.category && (
              <span
                style={{
                  backgroundColor: "#ff3333",
                  color: "#fff",
                }}
                className="py-2 px-4 text-sm font-semibold uppercase tracking-wider rounded-sm"
              >
                {currentArticle.category}
              </span>
            )}

            <h1
              style={{ color: "#e0e0e0" }}
              className="text-4xl md:text-4xl font-bold mt-4 mb-6"
            >
              {currentArticle.title}
            </h1>

            {/* Article Meta */}
            <div
              style={{ color: "#b0b0b0" }}
              className="flex justify-between items-center flex-wrap gap-4 text-sm font-medium"
            >
              <span>
                Published:{" "}
                {new Date(
                  currentArticle.updatedAt || currentArticle.createdAt
                ).toDateString()}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {currentArticle.featuredImage && (
            <div style={{ height: "24rem", backgroundColor: "#111" }}>
              <img
                src={currentArticle.featuredImage}
                alt={currentArticle.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Article Content */}
          <article
            className="p-8 text-base leading-relaxed space-y-6"
            style={{ color: "#e0e0e0" }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: currentArticle.content || currentArticle.excerpt,
              }}
            />

          </article>


        </main>

        {/* Sidebar: Related + Trending Articles */}
        <aside className="space-y-10 lg:sticky md:sticky top-20 h-fit">
          {/* Related Articles */}
          <section
            className="rounded-2xl p-6 space-y-6"
            style={{ backgroundColor: "#151515", border: "1px solid #222" }}
          >
            <div className="flex items-center gap-4" style={{ color: "#b0b0b0" }}>
              <span className="h-px flex-1" style={{ backgroundColor: "#fff1" }}></span>
              <h2
                style={{  color: "#fff" }}
                className="text-lg font-semibold uppercase tracking-[0.3em]"
              >
                Related Articles
              </h2>
              <span className="h-px flex-1" style={{ backgroundColor: "#fff1" }}></span>
            </div>

            {relatedPosts.map((post, index) => (
              <article
                key={post._id}
                ref={(el) => (animatedItemsRef.current[index] = el)}
                className="space-y-3 rounded-xl p-4 cursor-pointer transition-all"
                style={{
                  backgroundColor: "rgba(10,10,10,0.7)",
                  border: "1px solid #222",
                }}
                onClick={() => handleClickUpdate(post)}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(21,21,21,0.9)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(10,10,10,0.7)")
                }
              >
                <div
                  className="flex items-center justify-between text-xs uppercase tracking-[0.3em]"
                  style={{ color: "#ff3333" }}
                >
                  <span>{post.category || "General"}</span>
                </div>
                <h3
                  style={{ color: "#fff" }}
                  className="text-base font-semibold"
                >
                  {post.title || "Untitled"}
                </h3>
              </article>
            ))}
          </section>

          {/* Trending Articles */}
          <section
            className="rounded-2xl p-6 space-y-6"
            style={{ backgroundColor: "#151515", border: "1px solid #222" }}
          >
            <div className="flex items-center gap-4" style={{ color: "#b0b0b0" }}>
              <span className="h-px flex-1" style={{ backgroundColor: "#fff1" }}></span>
              <h2
                style={{ color: "#fff" }}
                className="text-lg font-semibold uppercase tracking-[0.3em]"
              >
                Trending Articles
              </h2>
              <span className="h-px flex-1" style={{ backgroundColor: "#fff1" }}></span>
            </div>

            {data?.articles
              ?.filter((a) => a._id && a._id !== currentArticle._id)
              .slice(0, 4)
              .map((post, index) => (
                <article
                  key={post._id}
                  className="space-y-3 rounded-xl p-4 cursor-pointer transition-all"
                  style={{
                    backgroundColor: "rgba(10,10,10,0.7)",
                    border: "1px solid #222",
                  }}
                  onClick={() => handleClickUpdate(post)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(21,21,21,0.9)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(10,10,10,0.7)")
                  }
                >
                  <div
                    className="flex items-center justify-between text-xs uppercase tracking-[0.3em]"
                    style={{ color: "#ff3333" }}
                  >
                    <span>{post.category || "General"}</span>
                  </div>
                  <h3
                    style={{ color: "#fff" }}
                    className="text-base font-semibold"
                  >
                    {post.title || "Untitled"}
                  </h3>
                </article>
              ))}
          </section>
        </aside>

      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
