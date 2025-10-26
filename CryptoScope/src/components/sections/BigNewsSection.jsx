import React from "react";
import { useNavigate } from "react-router-dom";

export default function BigNewsSection({ articles = [] }) {
    const navigate = useNavigate();

    if (!articles || articles.length === 0) return null;

    const handleClick = (article) => {
        const slug = (article.slug || article.title || "article")
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
        navigate(`/article/${slug}`, { state: { article } });
    };

    // Slice articles
    const topTwo = articles.slice(55, 57);
    const mainBig = articles[21];
    const popular = articles.slice(88, 93); // up to 5 popular items

    return (

        <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-gray-200 py-10">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-10">

                {/* Top Two Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {topTwo.map((article, idx) => (
                        <div
                            key={idx}
                            className="relative group overflow-hidden w-full h-[400px] cursor-pointer"
                            onClick={() => handleClick(article)}
                        >
                            <img
                                src={article.featuredImage || article.image || "https://placehold.co/540x400"}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute bottom-8 left-10 text-white z-10">
                                <p className="text-sm">
                                    <span className="text-blue-600">{article.category || "SPORTS"}</span> • <span className="text-black">
                                            {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                                        </span>
                                </p>
                                <h3 className="text-[30px] font-extrabold leading-[36px] transition-colors duration-300 group-hover:text-blue-400">
                                    {article.title || "Untitled Article"}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Main Big Image Left */}
                    {mainBig && (
                        <div className="lg:col-span-2 w-full bg-white cursor-pointer" onClick={() => handleClick(mainBig)}>
                            <div className="relative group overflow-hidden w-full h-[400px]">
                                <img
                                    src={mainBig.featuredImage || mainBig.image || "https://placehold.co/800x400"}
                                    alt={mainBig.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-black">
                                    <span className="text-blue-600">{mainBig.category || "ENTERTAINMENT"}</span> • <span className="text-black">
                                            {mainBig.createdAt ? new Date(mainBig.createdAt).toLocaleDateString() : "Unknown Date"}
                                        </span>
                                </p>
                                <h3 className="text-xl font-medium text-black transition-colors duration-300 hover:text-blue-500 cursor-pointer">
                                    {mainBig.title || "Untitled Article"}
                                </h3>
                            </div>
                        </div>
                    )}

                    {/* Popular List */}
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-lg font-semibold mb-4">Popular</h2>
                        <div className="flex flex-col gap-4">
                            {popular.map((article, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-3 items-center group border-t border-gray-200 pt-3 cursor-pointer"
                                    onClick={() => handleClick(article)}
                                >
                                    <img
                                        src={article.featuredImage || article.image || "https://placehold.co/100x60"}
                                        alt={article.title}
                                        className="w-[100px] h-[60px] object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="flex-1 space-y-2">
                                        <h4 className="text-[16px] leading-[21px] font-medium cursor-pointer transition-colors duration-300 group-hover:text-blue-600">
                                            {article.title || "Untitled Article"}
                                        </h4>
                                        <p className="text-[12px] text-gray-500 uppercase">
                                            <span className="text-blue-600">{article.category || "BUSINESS"}</span> • <span className="text-black">
                                                {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : "Unknown Date"}
                                            </span>
                                        </p>
                                    </div>
                                    <span className="text-[25px] font-extrabold text-gray-400">{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>

    );
}
