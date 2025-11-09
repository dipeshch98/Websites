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

  if (isLoading)
    return <p className="p-6 text-gray-500">Loading top articles...</p>;

  if (isError)
    return (
      <p className="p-6 text-red-500">Error loading section: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (!postsArray.length) {
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto py-10 text-center text-gray-500">
          No articles available
        </div>
      </div>
    );
  }

  const topArticles = postsArray.slice(45, 47);

  return (
    <div className="w-full py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <h2 className="text-3xl font-extrabold border-b-4 border-sky-500 pb-2 mb-12 uppercase tracking-wide">
          CryptoSignal
        </h2>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

          {/* Divider */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200 hidden md:block -translate-x-1/2"></div>

          {topArticles.map((article) => (
            <div
              key={article._id}
              className="group flex flex-col gap-6"
            >
              {/* Category */}
              <CategoryTag label={getRandomCategory()} />

              {/* Title */}
              <Link
                to={`/article/${article.slug}`}
                className="text-2xl font-bold text-gray-900 block group-hover:text-sky-600 transition-colors duration-300 line-clamp-2"
              >
                {article.title}
              </Link>

              {/* Excerpt */}
              <p className="text-gray-600 line-clamp-1">
                {article.excerpt?.slice(0, 150) || "No description available."}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <i className="ri-calendar-line"></i>
                {new Date(article.createdAt).toLocaleDateString()}
              </div>

              {/* Image */}
              <Link to={`/article/${article.slug}`}>
                <div className="overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={
                      article.featuredImage ||
                      "https://placehold.co/600x400?text=No+Image"
                    }
                    alt={article.title}
                    className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
