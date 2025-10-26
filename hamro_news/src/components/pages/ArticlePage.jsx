import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useFetchNews } from "../../hooks/useFetchNews";

const ArticlePage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  const { data, loading: newsLoading } = useFetchNews();
  const [currentArticle, setCurrentArticle] = useState(article || null);
  const [loadingArticle, setLoadingArticle] = useState(!article);

  useEffect(() => {
    if (data?.articles) {
      const found = data.articles.find((a) => a.slug === slug);
      setCurrentArticle(found || null);
      setLoadingArticle(false);
    }
  }, [slug, data]);

  if (loadingArticle) return <p className="text-center py-10">Loading...</p>;
  if (!currentArticle) return <p className="text-center py-10 text-red-500">Article not found.</p>;

  const recentUpdates = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(0, 5);

  const handleClickUpdate = (update) => {
    navigate(`/article/${update.slug}`, { state: { article: update } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Main Page Container */}
      <div className="w-full max-w-[78.75rem] mx-auto px-2 sm:px-4 lg:px-0 py-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mt-16">

        {/* Left Column: Article */}
        <main className="flex flex-col gap-8">
          {/* Featured Image */}
          {currentArticle.featuredImage && (
            <img
              src={currentArticle.featuredImage}
              alt={currentArticle.title}
              className="w-full h-[28rem] object-cover rounded-md"
            />
          )}

          {/* Article Title */}
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-snug hover:text-blue-600 cursor-pointer">
            {currentArticle.title}
          </h1>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                       prose-p:mb-3 prose-p:mt-0
                       prose-img:my-4 prose-h2:mt-6 prose-h2:mb-3
                       prose-h3:mt-5 prose-h3:mb-2
                       prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: currentArticle.content || currentArticle.excerpt }}
          />
        </main>

        {/* Right Column: More News */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-16 self-start h-fit">
          <h3 className="text-[1.5rem] font-semibold">More News</h3>

          {recentUpdates?.map((update) => (
            <div
              key={update._id}
              className="flex gap-4 bg-white p-3 border-b hover:bg-gray-50 transition cursor-pointer"
              onClick={() => handleClickUpdate(update)}
            >
              <img
                src={update.featuredImage || "https://picsum.photos/100/100"}
                alt={update.title}
                className="w-[4rem] h-[4rem] object-cover rounded-md"
              />
              <div className="flex-1">
                <span className="font-medium text-[1rem] hover:text-blue-600">{update.title}</span>
                <p className="text-gray-500 text-[0.875rem]">{update.publishedAt || "Sep 17, 2025"}</p>
              </div>
            </div>
          ))}
        </aside>

      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
