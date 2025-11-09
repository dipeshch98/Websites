import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";


export default function Section1() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section1-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return <p className="p-6 text-red-500">Error: {error.message}</p>;

  const articles = Object.values(data?.articles || []);
  if (!articles || articles.length === 50) return null;

  const mainArticle = articles[50];
  const secondArticle = articles[51];
  const sideArticles = articles.slice(54, 56);

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-extrabold border-b-4 border-sky-500 pb-2 mb-8 uppercase tracking-wide">
        BlockScope Media
        </h2>
        {/* GRID - align all columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[300px_1fr] lg:grid-cols-[605px_1fr_1fr] gap-6 items-stretch">
          {/* First Column (Main Big) */}
          {mainArticle && (
            <div className="relative w-full flex flex-col h-full">
              <div className="relative group overflow-hidden rounded-lg h-full">
                <Link to={`/article/${mainArticle.slug}`}>
                  <img
                    src={mainArticle.featuredImage || "https://placehold.co/600x400"}
                    alt={mainArticle.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-4 flex flex-col justify-end rounded-lg">
                    <CategoryTag label={getRandomCategory()} />
                    <h2 className="text-2xl sm:text-3xl font-bold mt-1 leading-[32px] ">
                      {mainArticle.title}
                    </h2>
                    {mainArticle.excerpt && (
                      <p className="text-white text-sm opacity-90 mt-2 line-clamp-3">
                        {mainArticle.excerpt}
                      </p>
                    )}
                    <div className="flex items-center text-xs text-white opacity-75 mt-3">
                      <span className="mx-1 sm:mx-2">•</span>
                      <span>
                        {mainArticle.createdAt
                          ? new Date(mainArticle.createdAt).toLocaleDateString()
                          : "Recent"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Second Column (Highlighted - Middle) */}
          {secondArticle && (
            <div className="relative w-full group flex flex-col h-full">
              <div className="relative overflow-hidden rounded-lg h-full">
                <Link to={`/article/${secondArticle.slug}`}>
                  <img
                    src={secondArticle.featuredImage || "https://placehold.co/600x400"}
                    alt={secondArticle.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white flex flex-col justify-end rounded-b-lg">
                    <CategoryTag label={getRandomCategory()} />
                    <h2 className="text-xl sm:text-2xl font-semibold leading-snug mt-1 ">
                      {secondArticle.title}
                    </h2>
                    <div className="flex items-center text-xs text-white opacity-75 mt-3">
                      <span>
                        {secondArticle.createdAt
                          ? new Date(secondArticle.createdAt).toLocaleDateString()
                          : "Recent"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* Third Column (Two Cards - Right side) */}
          <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-6">
            {sideArticles.map((article) => (
              <div key={article._id} className="relative group overflow-hidden rounded-lg flex-1">
                <Link to={`/article/${article.slug}`}>
                  <img
                    src={article.featuredImage || "https://placehold.co/400x250"}
                    alt={article.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-3 sm:p-4 flex flex-col justify-end">
                    <CategoryTag label={getRandomCategory()} />
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold leading-snug ">
                      {article.title.length > 60
                        ? article.title.slice(0, 60) + "…"
                        : article.title}
                    </h2>
                    <div className="flex items-center text-[10px] sm:text-xs text-white opacity-75 mt-2 sm:mt-3">
                      <span>
                        {article.createdAt
                          ? new Date(article.createdAt).toLocaleDateString()
                          : "Recent"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
