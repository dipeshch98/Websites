import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";

export default function FeaturedStoriesSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["featured-stories"],
    queryFn: () => getPosts(),
  });

  if (isLoading)
    return (
      <p className="p-6 text-center text-gray-500 animate-pulse">Loading...</p>
    );
  if (isError)
    return (
      <p className="p-6 text-center text-red-500">
        Error loading featured stories: {error.message}
      </p>
    );

  const articles = Object.values(data?.articles || []);
  if (articles.length < 39) return null;

  const topArticle = articles[34];
  const bottomArticles = articles.slice(35, 39);

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6">
        {/* Section Title */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Diplomatic Dispatch
        </h2>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>


        {/* Top Article */}
        {topArticle && (
          <Link
            to={`/article/${topArticle.slug}`}
            className="relative w-full h-[320px] rounded overflow-hidden mb-4 group"
          >
            <div className="w-full h-[400px] overflow-hidden rounded-2xl relative">
              <img
                src={topArticle.featuredImage || "https://placehold.co/1200x500"}
                alt={topArticle.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-60"
              />
              {/* Optional overlay for extra darkness */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 rounded-2xl">
              <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white w-fit">
                {topArticle.category || "News"}
              </span>
              <h3 className="text-xl md:text-3xl font-bold text-white">
                {topArticle.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 mt-1">
                {topArticle.createdAt
                  ? new Date(topArticle.createdAt).toLocaleDateString()
                  : "Recent"}
              </p>
            </div>
          </Link>
        )}

        {/* Bottom Four Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {bottomArticles.map((article) => (
            <Link
              key={article._id}
              to={`/article/${article.slug}`}
              className="relative h-[220px] md:h-[250px] overflow-hidden group rounded-2xl"
            >
              <img
                src={article.featuredImage || "https://placehold.co/400x250"}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-60"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 rounded-2xl">
                <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white w-fit">
                  {article.category || "News"}
                </span>
                <h4 className="text-sm md:text-base font-bold text-white line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1">
              
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : "Recent"}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
