import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Section6({ articles = [] }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Slice next 4 articles for Section 6
  const sectionArticles = articles.slice(150, 154);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed:", email);
    setSubmitted(true);
    setEmail("");
  };

  const handleClick = (article) => {
    navigate(`/article/${article.slug}`, { state: { article } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="w-full bg-gradient-to-r from-green-600 to-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Newsletter CTA */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Ahead with <span className="text-yellow-300">Safe Chain</span>
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-6">
            Subscribe to our newsletter to get the latest blockchain and tech articles.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectionArticles.map((article) => (
            <div
              key={article._id}
              onClick={() => handleClick(article)}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-white"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={
                    article.featuredImage ||
                    "https://placehold.co/400x250?text=No+Image"
                  }
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-sm font-semibold uppercase">
                  {article.category || "Article"}
                </span>
                <h4 className="text-gray-900 font-bold text-lg mt-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                  {article.title}
                </h4>
                <p className="text-xs text-gray-500 mt-2">
                  👤 {article.author?.name || "Safe Chain"} •{" "}
                  {article.createdAt
                    ? new Date(article.createdAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
