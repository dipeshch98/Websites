import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";


export default function Section6() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section6-posts"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)
    return (
      <p className="p-6 text-red-500">Error loading section: {error.message}</p>
    );

  const postsArray = Object.values(data?.articles || []);
  if (postsArray.length < 15) return null;

  // Mapping sections
  const moreNews = postsArray.slice(0, 6);
  const bigNews = postsArray[6];
  const sidebarNews = postsArray.slice(7, 11);
  const moreNews2 = postsArray.slice(11, 14);

  return (
    <section className="w-full py-10 bg-white">
      {/* SECTION TITLE */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 mb-6">
        <h2 className="text-3xl font-extrabold border-b-4 border-sky-500 pb-2 uppercase tracking-wide">
            The Altcoin Journal
          </h2>
      </div>

      {/* GRID WRAPPER */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 flex flex-col md:flex-row gap-6">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-[840px] flex flex-col space-y-6">
          {/* More News Items */}
          {moreNews.map((article) => (
            <Link
              key={article._id}
              to={`/article/${article.slug}`}
              className="flex flex-col gap-6 md:flex-row items-center justify-center bg-white mx-auto border-t border-gray-300 group">
              <div className="relative w-full md:w-2/5 flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={article.featuredImage || "https://placehold.co/400x300"}
                  alt={article.title}
                  className="w-full h-[230px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center text-[12px] px-2">
                <div className="font-semibold uppercase mb-1">
                  <CategoryTag label={getRandomCategory()} /> {" "}
                  <span className="text-gray-400">
                    /{" "}
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recent"}
                  </span>
                </div>
                <h2 className="text-[18px] md:text-2xl font-bold leading-tight mt-1 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                {article.excerpt && (
                  <p className="text-gray-600 text-[16px] mt-2 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}

          {/* BIG NEWS */}
          {bigNews && (
            <Link
              to={`/article/${bigNews.slug}`}
              className="max-w-[76.25rem] mx-auto bg-white shadow-sm group overflow-hidden rounded-md border-t border-gray-300 pt-4">
              <div className="relative">
                <img
                  src={bigNews.featuredImage || "https://placehold.co/800x600"}
                  alt={bigNews.title}
                  className="w-full h-[490px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 transition-colors duration-300 group-hover:text-gray-700">
                <div className="text-[12px] font-semibold uppercase mb-1 group-hover:text-gray-600 transition-colors">
                  <CategoryTag label={getRandomCategory()} />
                  <span className="text-gray-400">
                    {" "}
                    {bigNews.createdAt
                      ? new Date(bigNews.createdAt).toLocaleDateString()
                      : "Recent"}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight mt-1 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {bigNews.title}
                </h2>
                {bigNews.excerpt && (
                  <p className="text-gray-600 text-base mt-3 leading-relaxed group-hover:text-gray-800 transition-colors line-clamp-2">
                    {bigNews.excerpt}
                  </p>
                )}
              </div>
            </Link>
          )}

          {/* More News 2 */}
          {moreNews2.map((article) => (
            <Link
              key={article._id}
              to={`/article/${article.slug}`}
              className="flex flex-col gap-6 md:flex-row items-center justify-center bg-white mx-auto border-t border-gray-300 group">
              <div className="relative w-full md:w-2/5 flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={article.featuredImage || "https://placehold.co/400x300"}
                  alt={article.title}
                  className="w-full h-[230px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              <div className="flex-1 flex flex-col justify-center text-[12px] px-2">
                <div className="font-semibold uppercase mb-1">
                  <CategoryTag label={getRandomCategory()} />{" "}
                  <span className="text-gray-400">
                    {" "}
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recent"}
                  </span>
                </div>
                <h2 className="text-[18px] md:text-2xl font-bold leading-tight mt-1 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                {article.excerpt && (
                  <p className="text-gray-600 text-[16px] mt-2 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <div className="flex-1 mb-6 lg:sticky lg:top-24 self-start h-fit bg-sky-50 py-6">
          <div className="max-w-sm mx-auto space-y-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 mb-4 text-gray-500 font-bold text-sm">
              <div className="relative pb-2 mr-6 text-black text-xl cursor-pointer ">
                LATEST
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-sky-600"></span>
              </div>
              
            </div>

            {/* Sidebar Items */}
            {sidebarNews.map((article) => (
              <Link
                key={article._id}
                to={`/article/${article.slug}`}
                className="flex items-center space-x-4 group">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <img
                    src={article.featuredImage || "https://placehold.co/100x100"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 uppercase font-semibold">
                    <CategoryTag label={getRandomCategory()} /> {" "}
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recent"}
                  </div>
                  <div className="text-[14px] text-black font-semibold mt-1 group-hover:text-sky-600 transition-colors">
                    {article.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
