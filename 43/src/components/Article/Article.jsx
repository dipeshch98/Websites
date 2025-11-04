import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getArticle, getPosts } from "../../../api/client";

export default function Article() {
  const { slug } = useParams();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Fetch article
  const {
    data: article,
    isLoading: isArticleLoading,
    isError: isArticleError,
    error: articleError,
  } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });

  // Fetch all posts
  const {
    data: allPostsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
  } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () => getPosts(),
  });

  if (isArticleLoading || isPostsLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading article...</p>
        </div>
      </div>
    );

  if (isArticleError)
    return (
      <p className="text-center text-red-500 p-6">
        Error loading article: {articleError.message}
      </p>
    );

  if (isPostsError)
    return (
      <p className="text-center text-red-500 p-6">
        Error loading posts: {postsError.message}
      </p>
    );

  if (!article)
    return (
      <p className="text-center text-gray-600 text-lg p-6">
        Article not found.
      </p>
    );

  const allPosts = allPostsData?.articles || [];
  const relatedArticles = allPosts.filter((p) => p.slug !== slug).slice(0, 4);
  const trendingPosts = allPosts.slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Overlay */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={article.featuredImage || "https://via.placeholder.com/1920x1080"}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-[1500px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                {article.section || "Featured"}
              </span>
              <span className="text-white/80 text-sm">
                {new Date(article.createdAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              {article.title}
            </h1>
            {article.summary && (
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
                {article.summary}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg
                prose-strong:text-gray-900
                prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:bg-purple-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              
              {/* Trending Section */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
                  <h3 className="text-xl font-black text-gray-900">Trending Now</h3>
                </div>
                
                <div className="space-y-5">
                  {trendingPosts.map((post, index) => (
                    <Link
                      key={post.slug}
                      to={`/article/${post.slug}`}
                      onClick={scrollToTop}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <div className="text-3xl font-black text-purple-200 group-hover:text-purple-600 transition-colors leading-none pt-1">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {new Date(post.createdAt).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>


            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-10">
          <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Continue Reading
              </h2>
              <p className="text-gray-600">More stories you might enjoy</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedArticles.map((post) => (
                <Link
                  key={post.slug}
                  to={`/article/${post.slug}`}
                  onClick={scrollToTop}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={post.featuredImage || "https://placehold.co/400x300"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                        {post.section || "News"}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gray-900 hover:bg-purple-600 transition-all duration-300 text-white shadow-xl flex items-center justify-center group hover:scale-110"
      >
        <svg 
          className="w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}