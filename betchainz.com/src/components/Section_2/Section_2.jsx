// component 12

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { Link } from "react-router-dom";

export default function Section_7() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts-section7"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">Error loading posts</p>;

  const articles = data?.articles || [];
  const displayArticles = articles.slice(46, 55);

  return (
    <section className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6 py-10">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Betchainz</h2>
      </div>

      {/* Articles Grid */}
      <div className="flex flex-wrap gap-6 pb-4">
        {displayArticles.map((post, index) => {
          const isLast = index === displayArticles.length - 1;

          return (
            <Link
              key={post._id || index}
              to={`/article/${post.slug}`}
              className="group bg-white shadow-md rounded-xl flex-1 min-w-[280px] hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={
                    post.featuredImage ||
                    `https://picsum.photos/300/200?random=${41 + index}`
                  }
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    isLast ? "h-[400px]" : "h-60"
                  }`}
                  alt={post.title}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 transition-colors duration-300 group-hover:text-green-600 line-clamp-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {post.excerpt || "Short description here"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
