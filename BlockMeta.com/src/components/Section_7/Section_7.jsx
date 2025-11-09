import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getPosts } from "../../../api/client";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";

export default function Section_7() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["latest-news", page],
    queryFn: () => getPosts(page),
    keepPreviousData: true,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return <p className="p-6 text-red-500">Error: {error.message}</p>;

  const postsArray = Object.values(data?.articles || []);
  const column1Top = postsArray[15];
  const column1Small = postsArray.slice(16, 18);
  const column2Top = postsArray[19];
  const column2Small = postsArray.slice(20, 22);

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 py-10">
      {/* Title */}
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-extrabold tracking-wide border-b border-gray-200 pb-2 text-black">
          LATEST NEWS
        </h2>
      </div>

      {/* Grid: 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column 1 */}
        <div className="space-y-6">
          {column1Top && (
            <article className="group">
              <Link to={`/article/${column1Top.slug}`} className="block">
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={column1Top.featuredImage || "https://placehold.co/600x400"}
                    alt={column1Top.name}
                    className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 mt-3">
                  <p className="text-xs text-gray-500 mb-2">
                    <CategoryTag label={getRandomCategory()}/> {" "}
                    {column1Top.createdAt ? new Date(column1Top.createdAt).toLocaleDateString() : "No date"}
                  </p>
                  <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors leading-tight line-clamp-2">
                    {column1Top.title || column1Top.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {column1Top.excerpt || "No description available"}
                  </p>
                </div>
              </Link>
            </article>
          )}

          {/* Two stacked small cards */}
          <div className="space-y-6">
            {column1Small.map((post) => (
              <article
                key={post._id}
                className="group hover:bg-sky-50"
              >
                <Link to={`/article/${post.slug}`} className="flex items-start space-x-4 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={post.featuredImage || "https://placehold.co/150x100"}
                      alt={post.name}
                      className="w-32 h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">
                      <CategoryTag label={getRandomCategory()}/> {" "}
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "No date"}
                    </p>
                    <h4 className="text-lg font-extrabold leading-tight text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2 mt-2">
                      {post.title || post.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {post.excerpt || "No description available"}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {column2Top && (
            <article className="group">
              <Link to={`/article/${column2Top.slug}`} className="block">
                <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={column2Top.featuredImage || "https://placehold.co/600x400"}
                    alt={column2Top.name}
                    className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 mt-3">
                  <p className="text-xs text-gray-500 mb-2">
                    <CategoryTag label={getRandomCategory()}/> {" "} 
                    {column2Top.createdAt ? new Date(column2Top.createdAt).toLocaleDateString() : "No date"}
                  </p>
                  <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-sky-600 transition-colors leading-tight line-clamp-2">
                    {column2Top.title || column2Top.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {column2Top.excerpt || "No description available"}
                  </p>
                </div>
              </Link>
            </article>
          )}

          <div className="space-y-6">
            {column2Small.map((post) => (
              <article
                key={post._id}
                className="group hover:bg-sky-50"
              >
                <Link to={`/article/${post.slug}`} className="flex items-start space-x-4 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="overflow-hidden rounded-lg flex-shrink-0">
                    <img
                      src={post.featuredImage || "https://placehold.co/150x100"}
                      alt={post.name}
                      className="w-32 h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">
                      <CategoryTag label={getRandomCategory()}/> {" "}
                      {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "No date"}
                    </p>
                    <h4 className="text-lg font-extrabold leading-tight text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2 mt-2">
                      {post.title || post.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {post.excerpt || "No description available"}
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
