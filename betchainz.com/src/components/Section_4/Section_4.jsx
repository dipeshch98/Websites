import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { Link } from "react-router-dom";

export default function Section3() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts-section3"],
    queryFn: () => getPosts(),
  });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6">Error loading articles.</p>;

  const articles = data?.articles || [];
  if (!articles || articles.length < 21) return null;

  const sectionData = articles.slice(20, 35);

  return (
    <section className="w-full bg-[#0a0f0a] text-white py-10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-6">
        {/* Section Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="border-b-2 border-gray-700 pb-3">
              <h2 className="text-gray-200 font-semibold text-2xl uppercase tracking-wide hover:text-green-500 transition-colors duration-300">
                World & Politics
              </h2>
            </div>
          </div>
          <div>
            <div className="border-b-2 border-gray-700 pb-3">
              <h2 className="text-gray-200 font-semibold text-2xl uppercase tracking-wide hover:text-green-500 transition-colors duration-300">
                Education
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Main Article */}
              {sectionData[0] && (
                <Link
                  to={`/article/${sectionData[0].slug}`}
                  state={{ article: sectionData[0] }}
                  className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={
                        sectionData[0]?.featuredImage ||
                        "https://placehold.co/600x400"
                      }
                      alt={sectionData[0]?.title}
                      className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold leading-tight mb-3 text-white group-hover:text-green-500 transition-colors duration-300">
                      {sectionData[0]?.title}
                    </h1>
                    <p className="text-sm text-gray-400 mb-3">
                      {sectionData[0]?.createdAt
                        ? new Date(
                            sectionData[0]?.createdAt
                          ).toLocaleDateString()
                        : "Recent"}
                    </p>

                  </div>
                </Link>
              )}

              {/* 2x2 Grid Articles */}
              <div className="grid grid-cols-2 gap-6">
                {sectionData.slice(1, 5).map((article) => (
                  <Link
                    key={article._id}
                    to={`/article/${article.slug}`}
                    state={{ article }}
                    className="group cursor-pointer">
                    <div className="overflow-hidden rounded-lg mb-3">
                      <img
                        src={
                          article?.featuredImage ||
                          "https://placehold.co/400x250"
                        }
                        alt={article?.title}
                        className="w-full h-28 object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-sm font-bold leading-snug text-white mb-2 group-hover:text-green-500 transition-colors duration-300 line-clamp-3">
                      {article?.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {article?.createdAt
                        ? new Date(article?.createdAt).toLocaleDateString()
                        : "Recent"}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sectionData.slice(5, 8).map((article) => (
                <Link
                  key={article._id}
                  to={`/article/${article.slug}`}
                  state={{ article }}
                  className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={
                        article?.featuredImage || "https://placehold.co/400x250"
                      }
                      alt={article?.title}
                      className="w-full h-40 object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-green-500 transition-colors duration-300 line-clamp-2 leading-snug">
                    {article?.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {article?.createdAt
                      ? new Date(article?.createdAt).toLocaleDateString()
                      : "Recent"}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="bg-[#141914] p-8 space-y-6 rounded-lg">
            <div>
              <span className="bg-green-600 text-white text-sm font-bold px-3 py-1.5 uppercase tracking-wider rounded">
                Education
              </span>
            </div>

            {sectionData[8] && (
              <Link
                to={`/article/${sectionData[8].slug}`}
                state={{ article: sectionData[8] }}
                className="block group cursor-pointer">
                <h2 className="text-xl font-bold leading-tight text-white mb-3 group-hover:text-green-500 transition-colors duration-300 line-clamp-3">
                  {sectionData[8]?.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                  {sectionData[8]?.createdAt
                    ? new Date(sectionData[8]?.createdAt).toLocaleDateString()
                    : "Recent"}
                </p>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={
                      sectionData[8]?.featuredImage ||
                      "https://placehold.co/600x400"
                    }
                    alt={sectionData[8]?.title}
                    className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            )}

            {/* Education List */}
            <div className="space-y-6 pt-4 border-t border-gray-700">
              {sectionData.slice(9, 13).map((article) => (
                <Link
                  key={article._id}
                  to={`/article/${article.slug}`}
                  state={{ article }}
                  className="block group cursor-pointer">
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-green-500 transition-colors duration-300 leading-snug line-clamp-2">
                    {article?.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {article?.createdAt
                      ? new Date(article?.createdAt).toLocaleDateString()
                      : "Recent"}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}