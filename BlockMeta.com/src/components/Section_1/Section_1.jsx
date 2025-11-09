import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../api/client";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";

const ArticleCard = memo(({ article, size = "default", className = "" }) => {
  const isMain = size === "main";
  const isSide = size === "side";

  const imageHeight = isMain ? "h-[450px] md:h-[500px]" : isSide ? "h-[200px]" : "h-[220px]";
  const titleSize = isMain ? "text-2xl md:text-4xl" : isSide ? "text-lg" : "text-base";
  const fontWeight = isMain ? "font-bold" : isSide ? "font-semibold" : "font-bold";

  return (
    <Link
      to={`/article/${article.slug}`}
      className={`
        group relative rounded-lg overflow-hidden block transition-all duration-300
        ${isMain ? "lg:col-span-2" : isSide ? "hover:scale-[1.02]" : ""}
        ${className}
      `}
      aria-labelledby={`article-title-${article.id}`}
    >
      <div className="overflow-hidden">
        <img
          src={article.featuredImage || "https://placehold.co/800x500"}
          alt={article.title}
          className={`w-full ${imageHeight} object-cover transition-transform duration-500 group-hover:scale-110`}
          loading="lazy"
        />
      </div>

      {isMain && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-gray-900/5 to-transparent flex items-end p-6 md:p-8">
          <div className="space-y-3">
            <span className="">
              <CategoryTag label={getRandomCategory()}/>
            </span>
            <h2
              id={`article-title-${article.id}`}
              className={`${titleSize} ${fontWeight} text-gray-800 mt-2`}
            >
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-1 md:line-clamp-3 max-w-2xl">
              {article.excerpt || "No description available."}
            </p>
          </div>
        </div>
      )}

      {!isMain && (
        <div className={`p-4 ${isSide ? 'flex flex-col justify-between' : ''} bg-gray-50 border border-gray-100`}>
          <div>
            <span className="text-xs text-sky-600 font-semibold uppercase tracking-wide">
              <CategoryTag label={getRandomCategory()}/>
            </span>
            <h3
              id={`article-title-${article.id}`}
              className={`${titleSize} ${fontWeight} mt-1 text-black group-hover:text-sky-600 transition-colors duration-300 line-clamp-2`}
            >
              {article.title}
            </h3>
            <p className="text-sm text-black mt-2 line-clamp-2">
              {article.excerpt || "No description available."}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
});

ArticleCard.displayName = "ArticleCard";

const LoadingSkeleton = () => (
  <section className="bg-white min-h-[600px] py-12">
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 space-y-8">
      <div className="h-8 bg-gray-200 rounded-lg w-48 animate-pulse"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 h-[500px] bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="flex flex-col gap-6">
          <div className="h-[200px] bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-[200px] bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export default function Section1() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["section1-posts"],
    queryFn: () => getPosts(1),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });

  if (isLoading) return <LoadingSkeleton />;
  if (isError) {
    return (
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-600 font-medium">Error loading section: {error.message}</p>
          </div>
        </div>
      </section>
    );
  }

  const postsArray = Object.values(data?.articles || []);
  if (postsArray.length < 6) return null;

  const sectionArticles = postsArray.slice(0, 6);
  const mainArticle = sectionArticles[0];
  const sideArticles = sectionArticles.slice(1, 3);
  const gridArticles = sectionArticles.slice(3);

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 space-y-10">
        {/* Section Title */}
          <h2 className="text-3xl font-extrabold border-b-4 border-sky-500 pb-2 uppercase tracking-wide">
            HashLine News
          </h2>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Featured Article */}
          {mainArticle && (
            <ArticleCard article={mainArticle} size="main" />
          )}

          {/* Side Articles */}
          <div className="flex flex-col gap-6">
            {sideArticles.map((article) => (
              <ArticleCard key={article.id} article={article} size="side" />
            ))}
          </div>
        </div>

        {/* Additional Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
