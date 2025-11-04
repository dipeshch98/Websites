import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getPosts } from "../../../api/client";

export default function Section_3() {
  const [page] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["latest-news", page],
    queryFn: () => getPosts(),
    keepPreviousData: true,
  });

  if (isLoading)
    return (
      <p className="p-6 text-center text-gray-500 animate-pulse">
        Loading...
      </p>
    );
  if (isError)
    return (
      <p className="p-6 text-center text-red-500">Error: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  const column1Top = postsArray[15];
  const column1Small = postsArray.slice(16, 18);
  const column2Top = postsArray[19];
  const column2Small = postsArray.slice(20, 22);

  return (
    <section className="max-w-[1500px] mx-auto px-4 md:px-6 lg:px-6 py-10">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <h2 className="px-6 text-2xl md:text-3xl font-bold text-gray-900 text-center">
          Global Affairs
        </h2>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Grid: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="space-y-4">
          {column1Top && (
            <article className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/article/${column1Top.slug}`}>
                <img
                  src={column1Top.featuredImage}
                  alt={column1Top.name}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-sm text-gray-200 mb-1">
                    <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white">
                      {column1Top.section || "NEWS"}
                    </span>{" "}
                    · {column1Top.publishedAt}
                  </p>
                  <p className="text-xl text-gray-200 mt-3 max-w-full line-clamp-3">
                    {column1Top.title || "No description available."}
                  </p>
                </div>
              </Link>
            </article>
          )}

          {/* Small stacked cards */}
          <div className="space-y-4">
            {column1Small.map((post) => (
              <article
                key={post._id}
                className="flex items-start space-x-4 group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <Link
                  to={`/article/${post.slug}`}
                  className="flex items-start space-x-4 w-full"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.name}
                    className="w-32 h-24 object-cover rounded-l-lg flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex-1 p-3">
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white">
                        {post.section || "NEWS"}
                      </span>{" "}
                      · {post.publishedAt}
                    </p>
                    <p className="text-lg text-gray-900 mt-1 line-clamp-2">
                      {post.title || "No description available."}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          {column2Top && (
            <article className="relative overflow-hidden rounded-xl group shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link to={`/article/${column2Top.slug}`}>
                <img
                  src={column2Top.featuredImage}
                  alt={column2Top.name}
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-sm text-gray-200 mb-1">
                    <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white">
                      {column2Top.section || "NEWS"}
                    </span>{" "}
                    · {column2Top.publishedAt}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-purple-300 transition-colors">
                    {column2Top.name}
                  </h3>
                  <p className="text-xl text-gray-200 mt-3 max-w-full line-clamp-3">
                    {column2Top.title || "No description available."}
                  </p>
                </div>
              </Link>
            </article>
          )}

          {/* Small stacked cards */}
          <div className="space-y-4">
            {column2Small.map((post) => (
              <article
                key={post._id}
                className="flex items-start space-x-4 group bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <Link
                  to={`/article/${post.slug}`}
                  className="flex items-start space-x-4 w-full"
                >
                  <img
                    src={post.featuredImage}
                    alt={post.name}
                    className="w-32 h-24 object-cover rounded-l-lg flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="flex-1 p-2">
                    <p className="text-xs text-gray-500 mb-1">
                      <span className="text-xs bg-purple-600 px-2 py-1 rounded-sm font-semibold uppercase text-white">
                        {post.section || "NEWS"}
                      </span>{" "}
                      · {post.publishedAt}
                    </p>
                    <h4 className="text-lg font-extrabold leading-tight text-gray-900 group-hover:text-purple-700 transition-colors">
                      {post.name}
                    </h4>
                    <p className="text-lg text-gray-900 mt-1 line-clamp-2">
                      {post.title || "No description available."}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
