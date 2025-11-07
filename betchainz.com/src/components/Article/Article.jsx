import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getArticle, getPosts } from "../../../api/client";
import parse, { domToReact } from "html-react-parser";

export default function Article() {
  const { slug } = useParams();

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const { data: article, isLoading, isError, error } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });

  const { data: allPostsData, isLoading: isPostsLoading } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () => getPosts(),
  });

  if (isLoading || isPostsLoading)
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-green-100 rounded-full animate-spin"></div>
          <div className="w-20 h-20 border-4 border-t-green-600 border-r-green-600 rounded-full animate-spin absolute top-0"></div>
        </div>
        <p className="text-gray-700 text-xl mt-6 font-semibold animate-pulse">
          Loading your article...
        </p>
      </div>
    );

  if (isError)
    return (
      <div className="text-red-600 text-center mt-10">
        Error: {error.message}
      </div>
    );
  if (!article)
    return (
      <div className="text-gray-600 text-center mt-10">
        Article not found
      </div>
    );

  const recentPosts = allPostsData?.articles?.slice(0, 6) || [];
  const popularPosts = allPostsData?.articles?.slice(6, 11) || [];

  const categories = [
    "Ethereum (ETH)", "Blockchain", "Cryptocurrency", "Token", "Altcoin",
    "Stablecoin", "Fiat Currency", "Wallet", "Private Key", "Public Key",
    "Address", "Mining", "Staking", "Node", "Block", "Hash", "Decentralization",
    "Consensus", "Proof-of-Work (PoW)", "Proof-of-Stake (PoS)", "Smart Contract",
    "Gas", "Halving", "HODL", "FOMO", "FUD", "DYOR", "Exchange", "Liquidity",
    "Volatility", "Market Cap", "All-Time High (ATH)", "Bear Market", "Bull Market",
    "NFT", "DeFi", "dApp"
  ];

  const getCategory = (index) => categories[index % categories.length];

const parserOptions = {
  replace: (node) => {
    if (node.type === "tag") {
      const props = { ...node.attribs };
      if (props.style) delete props.style;


      // Headings (h1-h4)
      if (["h1", "h2", "h3", "h4"].includes(node.name)) {
        const headingClasses = 
          "text-3xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight";

        return React.createElement(
          node.name,
          { ...props, className: headingClasses },
          domToReact(node.children, {
            replace: (childNode) => {
              // If <strong> inside a heading, inherit heading styles
              if (childNode.type === "tag" && childNode.name === "strong") {
                return React.createElement(
                  "strong",
                  { className: headingClasses },
                  domToReact(childNode.children, parserOptions)
                );
              }
            },
          })
        );
      }

      // ----------------------------
      // Paragraphs
      // ----------------------------
      if (node.name === "p") {
        return React.createElement(
          "p",
          {
            ...props,
            className:
              "text-gray-700 text-base md:text-lg leading-relaxed last:mb-0",
          },
          domToReact(node.children, parserOptions)
        );
      }

      // ----------------------------
      // Images
      // ----------------------------
      if (node.name === "img") {
        return React.createElement("img", {
          ...props,
          className:
            "mx-auto my-8 rounded-xl shadow-md block max-w-full object-cover",
        });
      }

      // ----------------------------
      // Links
      // ----------------------------
      if (node.name === "a") {
        return (
          <a
            {...props}
            className="text-green-600 underline hover:text-green-700 hover:underline-offset-2 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {domToReact(node.children, parserOptions)}
          </a>
        );
      }

      // ----------------------------
      // Blockquotes
      // ----------------------------
      if (node.name === "blockquote") {
        return React.createElement(
          "blockquote",
          {
            ...props,
            className:
              "border-l-4 border-green-500 bg-green-50 p-6 italic my-6 rounded-r-xl text-gray-700",
          },
          domToReact(node.children, parserOptions)
        );
      }

      // ----------------------------
      // Lists
      // ----------------------------
      if (node.name === "ul") {
        return React.createElement(
          "ul",
          {
            ...props,
            className:
              "list-disc list-inside my-4 space-y-2 text-gray-700 text-base md:text-lg",
          },
          domToReact(node.children, parserOptions)
        );
      }

      if (node.name === "ol") {
        return React.createElement(
          "ol",
          {
            ...props,
            className:
              "list-decimal list-inside my-4 space-y-2 text-gray-700 text-base md:text-lg",
          },
          domToReact(node.children, parserOptions)
        );
      }

      // ----------------------------
      // Strong outside headings (normal paragraphs)
      // ----------------------------
      if (node.name === "strong") {
        return React.createElement(
          "strong",
          { className: "font-semibold text-gray-900" },
          domToReact(node.children, parserOptions)
        );
      }
    }
  },
};

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl">
              <div className="flex flex-wrap items-center gap-3">
                {article.createdAt && (
                  <span className="text-gray-600 text-[1rem] mb-2">
                    {new Date(article.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                {article.title}
              </h1>
            </div>

            <article className="bg-white rounded-2xl prose prose-lg max-w-[1300px]">
              {parse(article.content, parserOptions)}
            </article>
          </div>

          {/* Sidebar - Popular Articles */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-28 shadow-sm">
              <div className="mb-6 pb-4 border-b-2 border-green-600">
                <h2 className="text-2xl font-bold text-gray-900">Popular Articles</h2>
              </div>

              <div className="space-y-5">
                {popularPosts.map((post, idx) => (
                  <Link
                    key={post.slug}
                    to={`/article/${post.slug}`}
                    className="block group"
                    onClick={scrollToTop}
                  >
                    <div className="flex gap-3 items-start">
                      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={post.featuredImage || "https://placehold.co/200x200"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold leading-snug text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-3 mb-2">
                          {post.title}
                        </h3>
                        {post.createdAt && (
                          <p className="text-xs text-gray-500">
                            {new Date(post.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 border-b border-gray-100 last:border-0"></div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-6 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, idx) => (
            <Link
              key={post.slug}
              to={`/article/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 "
              onClick={scrollToTop}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.featuredImage || "https://placehold.co/600x400"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-sm font-semibold uppercase">
                  {getCategory(idx)}
                </span>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-snug mb-2 mt-2">
                  {post.title}
                </h3>
                {post.createdAt && (
                  <p className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
