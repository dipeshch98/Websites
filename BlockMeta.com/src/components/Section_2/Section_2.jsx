import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";

export default function BigNewsSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["big-news-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6 text-gray-500">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">Error loading section: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (!postsArray.length) return null;

  const topTwo = postsArray.slice(47, 49);
  const mainBig = postsArray[21];
  const popular = postsArray.slice(55, 60);

  return (
    <div className="w-full ">
      <div className="w-full py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 flex flex-col gap-6">
          {/* Section Title */}
          <h2 className="text-3xl font-extrabold border-b-4 border-sky-500 pb-2 uppercase tracking-wide">
            ProofChain Press
          </h2>

          {/* Top Two Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topTwo.map((article, idx) => (
              <Link
                key={idx}
                to={`/article/${article.slug}`}
                className="relative group overflow-hidden w-full h-[400px] rounded-lg shadow-lg block"
              >
                <img
                  src={article.featuredImage || article.image || "https://placehold.co/540x400"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                  <p className="text-sm text-sky-300">
                    <CategoryTag label={getRandomCategory()}/> 
                  </p>
                  <h3 className="text-2xl font-extrabold text-white line-clamp-2 mt-2">
                    {article.title || "Untitled Article"}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Big Image */}
            {mainBig && (
              <Link
                to={`/article/${mainBig.slug}`}
                className="lg:col-span-2 w-full rounded-lg shadow-lg overflow-hidden block"
              >
                <div className="relative group overflow-hidden w-full h-full">
                  <img
                    src={mainBig.featuredImage || mainBig.image || "https://placehold.co/800x400"}
                    alt={mainBig.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                    <p className="text-sm text-sky-300">
                      <CategoryTag label={getRandomCategory()}/> 
                    </p>
                    <h3 className="text-2xl font-bold text-white line-clamp-3 mt-2">
                      {mainBig.title || "Untitled Article"}
                    </h3>
                  </div>
                </div>
              </Link>
            )}

            {/* Popular List */}
            <div className="bg-white p-4 rounded-md shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Popular</h2>
              <div className="flex flex-col gap-4">
                {popular.map((article, idx) => (
                  <Link
                    key={idx}
                    to={`/article/${article.slug}`}
                    className="flex gap-3 items-center group border-t border-gray-200 pt-3"
                  >
                    <img
                      src={article.featuredImage || article.image || "https://placehold.co/100x60"}
                      alt={article.title}
                      className="w-[100px] h-[60px] object-cover transition-transform duration-300 group-hover:scale-105 rounded"
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="text-[16px] font-medium text-gray-900 transition-colors duration-300 group-hover:text-sky-500 line-clamp-2">
                        {article.title || "Untitled Article"}
                      </h4>
                      <p className="text-[12px] text-gray-800 uppercase">
                        <CategoryTag label={getRandomCategory()}/> •{" "}
                        {article.createdAt
                          ? new Date(article.createdAt).toLocaleDateString()
                          : "Unknown Date"}
                      </p>
                    </div>
                    <span className="text-[25px] font-extrabold text-gray-400">
                      {idx + 1}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
