import React from "react";
import { useNavigate } from "react-router-dom";

const BusinessmanSection = ({ articles = [] }) => {
    const navigate = useNavigate();

    if (!articles.length || articles.length <= 21) {
        return (
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1400px] mx-auto py-10 text-center text-gray-500">
                    No articles available
                </div>
            </div>
        );
    }

    // Slice data starting from index 21
    const slicedArticles = articles.slice(21);
    const mainArticle = slicedArticles[22];
    const sideArticles = slicedArticles.slice(23, 27);

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-gray-200">
                {/* Main Feature */}
                {mainArticle && (
                    <div
                        className="lg:col-span-2 relative w-full rounded overflow-hidden group cursor-pointer"
                        onClick={() => navigate(`/article/${mainArticle.slug}`)}
                    >
                        {/* Main Image */}
                        <div className="overflow-hidden rounded w-full h-[400px] md:h-[500px] lg:h-[550px]">
                            <img
                                src={mainArticle.featuredImage}
                                alt={mainArticle.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/30 rounded"></div>

                        {/* Category Tag */}
                        <span className="absolute top-4 left-4 bg-[#40798C] text-slate-800 text-sm font-semibold px-3 py-1 rounded z-10">
                            {mainArticle.category || "BUSINESS"}
                        </span>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10">
                            <h2 className="text-3xl font-bold mb-2 leading-snug truncate group-hover:text-blue-400 transition-all duration-300">
                                {mainArticle.title}
                            </h2>
                            <p className="text-sm mb-3 line-clamp-3">
                                {mainArticle.excerpt?.slice(0, 150)}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-xs">
                                <span className="flex items-center gap-1">
                                    📅 {new Date(mainArticle.createdAt).toLocaleDateString()}
                                </span>
                                {mainArticle.author?.name && (
                                    <span className="flex items-center gap-1">
                                        👤 {mainArticle.author.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}


                {/* Side Posts */}
                <div className="flex flex-col gap-6">
                    {sideArticles.map((article, idx) => (
                        <div
                            key={article._id || idx}
                            className="flex flex-col md:flex-row gap-4 cursor-pointer group overflow-hidden rounded transition hover:bg-white/10 p-2"
                            onClick={() => navigate(`/article/${article.slug}`)}
                        >
                            {article.featuredImage && (
                                <div className="w-full md:w-24 h-24 overflow-hidden rounded flex-shrink-0">
                                    <img
                                        src={article.featuredImage}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="flex-1">
                                <span className="w-fit bg-[#40798C] text-white text-xs font-normal px-2 py-1 rounded">
                                    {article.category || "NEWS"}
                                </span>
                                <h4 className="text-base font-semibold mt-2 truncate group-hover:text-blue-500 transition-all duration-300">
                                    {article.title}
                                </h4>
                                <p className="text-xs text-black/80 mt-1 line-clamp-3">
                                    {article.excerpt?.slice(0, 80)}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 text-xs text-black/80 mt-1">
                                    <span>📅 {new Date(article.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessmanSection;
