import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function TrendingSafeChain() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["trending-safe-chain"],
    queryFn: () => getPosts(),
  });

  if (isLoading)
    return <p className="p-6 text-center text-gray-500 animate-pulse">Loading...</p>;

  if (isError)
    return (
      <p className="p-6 text-center text-red-500">
        Error loading trending articles: {error.message}
      </p>
    );

  const articles = Object.values(data?.articles || []);
  if (!articles.length) return null;

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  return (
    <section className="w-full bg-white py-10 border-t border-gray-100">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Safe Chain Articles
          </h2>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {/* Left - Big Featured Article */}
          {mainArticle && (
            <Link
              to={`/article/${mainArticle.slug}`}
              className="group col-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={
                  mainArticle.featuredImage ||
                  "https://placehold.co/800x500?text=No+Image"
                }
                alt={mainArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 p-6 text-white space-y-2">
                <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase">
                  {mainArticle.category || "Featured"}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-purple-300 transition-colors">
                  {mainArticle.title}
                </h3>
                {mainArticle.excerpt && (
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {mainArticle.excerpt}
                  </p>
                )}
                <p className="text-xs opacity-80">
                  {mainArticle.createdAt
                    ? new Date(mainArticle.createdAt).toLocaleDateString()
                    : "Recently Published"}
                </p>
              </div>
            </Link>
          )}

          {/* Right - Smaller Articles */}
          <div className="flex flex-col gap-4">
            {sideArticles.map((article) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="group flex items-center gap-4 bg-purple-50 hover:bg-purple-100 transition-all duration-300 p-4 rounded-lg border border-gray-100 hover:border-purple-300"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={
                      article.featuredImage ||
                      "https://placehold.co/200x200?text=No+Image"
                    }
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-700 transition-colors text-base line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Fallback */}
        {!mainArticle && (
          <p className="text-center text-gray-500 mt-10">
            No trending articles available right now.
          </p>
        )}
      </div>
    </section>
  );
}
