// src/components/Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ articles = [] }) => {
  const navigate = useNavigate();

  // ✅ Split articles into 3 groups dynamically
  const sections = [
    {
      title: "BITCOIN & ALTCOINS",
      articles: articles.slice(0, 3),
    },
    {
      title: "ETHEREUM & NFTS",
      articles: articles.slice(3, 6),
    },
    {
      title: "BLOCKCHAIN & DEFI",
      articles: articles.slice(6, 9),
    },
  ];

  const handleArticleClick = (article) => {
    if (article.slug) {
      navigate(`/article/${article.slug}`, { state: { article } });
      window.scrollTo(0, 0);
    }
  };

  if (articles.length === 0) return null;

  return (
    <footer id="footer" className="mt-12 bg-[#0f0f0f] text-white">
      {/* === Top Footer Grid === */}
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h2 className="mb-6 border-b border-white/10 pb-2 text-sm font-semibold tracking-[0.25rem] text-white">
              {section.title}
            </h2>

            {section.articles.map((article, i) => (
              <article
                key={article._id || i}
                onClick={() => handleArticleClick(article)}
                className={`group flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-x-[5px] ${
                  i !== section.articles.length - 1 ? "mb-6" : ""
                }`}
              >
                <img
                  src={article.featuredImage || "https://placehold.co/120x80"}
                  alt={article.title}
                  className="h-20 w-28 flex-shrink-0 rounded-lg object-cover border border-white/5 group-hover:border-[#60a5fa]/50 transition-all duration-300"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="line-clamp-3 text-sm font-medium leading-snug text-white transition-colors duration-300 group-hover:text-[#60a5fa]">
                    {article.title}
                  </h3>
                  <span className="text-xs font-medium text-[#94a3b8]">
                    {article.createdAt
                      ? new Date(article.createdAt).toLocaleDateString()
                      : "Recently"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>

      {/* === Bottom Footer Bar === */}
      <div className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-[#94a3b8]">
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="transition-colors duration-300 hover:text-[#60a5fa]"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="transition-colors duration-300 hover:text-[#60a5fa]"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/privacy-policy")}
              className="transition-colors duration-300 hover:text-[#60a5fa]"
            >
              Privacy Policy
            </button>
          </div>
          <p className="text-xs md:text-sm text-[#64748b]">
            &copy; {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
