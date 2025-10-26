// src/components/pages/ArticlePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { useFetchNews } from "../../hooks/useFetchNews";
import Loading from "../Loading";

const ArticlePage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  const { data, loading: newsLoading } = useFetchNews();
  const [currentArticle, setCurrentArticle] = useState(article || null);
  const [loadingArticle, setLoadingArticle] = useState(!article);

  // Update currentArticle whenever slug or location.state changes
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

  if (loadingArticle || newsLoading)
    return <p className="text-center py-10"><Loading/></p>;

  if (!currentArticle)
    return (
      <p className="text-center py-10 text-red-500">
        Article not found.
      </p>
    );

  const recentUpdates = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(0, 5);

  const relatedPosts = data?.articles
    ?.filter((a) => a._id !== currentArticle._id)
    .slice(0, 3);

  const handleClickUpdate = (update) => {
    navigate(`/article/${update.slug}`, { state: { article: update } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-4 lg:px-0 py-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        {/* Left Column: Article + Related Posts */}
        <main className="flex flex-col gap-12">
          {/* Featured Image */}
          <img
            src={currentArticle.featuredImage || currentArticle.image || "https://placehold.co/600x400"}
            alt={currentArticle.title}
            className="w-full h-[28rem] object-cover rounded-md"
          />

          {/* Article Title */}
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-snug">
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

          {/* Related Posts Section */}
          <section>
            <h3 className="text-[1.5rem] font-bold text-gray-800 uppercase tracking-wide bg-gradient-to-r from-blue-400 to-blue-200 p-4 rounded-md shadow-md border-l-4 border-blue-500 mb-4">
              Related Articals
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts?.map((post) => (
                <div
                  key={post._id}
                  className="cursor-pointer group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
                  onClick={() => handleClickUpdate(post)}
                >
                  <img
                    src={post.featuredImage || post.image || "https://placehold.co/400x250"}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-3">
                    <h3 className="text-[1rem] font-medium group-hover:text-blue-600 transition">
                      {post.title.length > 60 ? post.title.slice(0, 60) + "…" : post.title}
                    </h3>
                    <p className="text-gray-500 text-[0.875rem] mt-1">
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Just now"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Right Column: More News */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-20 self-start h-fit border border-gray-300 rounded-md p-4 bg-white shadow-sm">
          <h3 className="text-[1.5rem] font-bold text-gray-800 uppercase tracking-wide bg-gradient-to-r from-blue-400 to-blue-200 p-4 rounded-md shadow-md border-l-4 border-blue-500">
            More News
          </h3>


          {recentUpdates?.map((update) => (
            <div
              key={update._id}
              className="flex gap-4 items-start cursor-pointer hover:bg-gray-50 transition p-2 rounded-md"
              onClick={() => handleClickUpdate(update)}
            >
              <img
                src={update.featuredImage || update.image || "https://placehold.co/100x100"}
                alt={update.title}
                className="w-[4rem] h-[4rem] object-cover rounded-md flex-shrink-0"
              />
              <div className="flex-1">
                <span className="font-semibold text-[1rem] hover:text-blue-600 transition">
                  {update.title.length > 50 ? update.title.slice(0, 50) + "…" : update.title}
                </span>
                <p className="text-gray-500 text-[0.875rem] mt-1">
                  {update.createdAt ? new Date(update.createdAt).toLocaleDateString() : "Just now"}
                </p>
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
