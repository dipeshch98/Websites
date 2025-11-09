import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getPosts } from "../../../api/client";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";

export default function Section_6() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts-section1", page],
    queryFn: () => getPosts(page),
    keepPreviousData: true,
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return <p className="p-6 text-red-500">Error: {error.message}</p>;

  const postsArray = Object.values(data?.articles || []);

  // Assign posts for each column
  const leftColumnPosts = postsArray.slice(50, 53); // What's Happening
  const middlePost = postsArray[54]; // Main middle feature
  const rightColumnPosts = postsArray.slice(57, 60); // Just In

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column */}
      <div className="lg:col-span-3 flex flex-col space-y-6">
        <h2 className="font-bold text-lg  tracking-wide text-black">
          The Crypto Gazette
        </h2>
        {leftColumnPosts.map((post) => (
          <article key={post._id}>
            <Link to={`/article/${post.slug}`} className="group block">
              <div className="overflow-hidden rounded-lg mb-2">
                <img
                  src={post.featuredImage || "https://placehold.co/400x300"}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={post.name}
                />
              </div>
              <p className="text-xs text-gray-500 mb-1">
                <CategoryTag label={getRandomCategory()}/>
              </p>
              <h3 className="font-extrabold text-lg leading-[28px] group-hover:text-sky-600 transition-colors mt-2 line-clamp-2">
                {post.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>

      {/* Middle Column */}
      <div className="lg:col-span-6 flex flex-col space-y-6">
        {postsArray.slice(54, 56).map((post) => (
          <article
            key={post._id}
            className="bg-white rounded-lg overflow-hidden shadow-sm "
          >
            <Link to={`/article/${post.slug}`} className="group block">
              <div className="overflow-hidden">
                <img
                  src={post.featuredImage || "https://placehold.co/600x400"}
                  alt={post.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">
                  <CategoryTag label={getRandomCategory()}/> 
                  
                </p>
                <h2 className="font-extrabold text-2xl sm:text-3xl text-black group-hover:text-sky-600 transition-colors leading-tight mt-2 line-clamp-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>


      {/* Right Column */}
      <div className="lg:col-span-3 flex flex-col space-y-6">
        <h2 className="font-bold text-lg tracking-wide text-black">
          NodeWatch Daily
        </h2>
        {rightColumnPosts.map((post) => (
          <article key={post._id}>
            <Link to={`/article/${post.slug}`} className="group block">
              <div className="overflow-hidden rounded-lg mb-2">
                <img
                  src={post.featuredImage || "https://placehold.co/400x300"}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={post.name}
                />
              </div>
              <p className="text-xs text-gray-500 mb-1">
                <CategoryTag label={getRandomCategory()}/> 
              </p>
              <h3 className="font-extrabold text-lg leading-[28px] group-hover:text-sky-600 transition-colors mt-2 line-clamp-2">
                {post.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
