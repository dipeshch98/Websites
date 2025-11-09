import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getArticle, getPosts } from "../../../api/client";
import parse, { domToReact } from "html-react-parser";
import { useEffect } from "react";
import { CategoryTag, getRandomCategory } from "../CategoryTag/CategoryTag";

export default function Article() {
  const { slug } = useParams();

    // Scroll to top when slug changes or component mounts
  useEffect(() => {
    // Immediate scroll to top without animation for initial load
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // Then smooth scroll to ensure we're at top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [slug]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Fetch article
  const {
    data: article,
    isLoading: isArticleLoading,
    isError: isArticleError,
    error: articleError,
  } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });

  // Fetch all posts
  const {
    data: allPostsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
    error: postsError,
  } = useQuery({
    queryKey: ["allPosts"],
    queryFn: () => getPosts(),
  });

  // Custom parser options for article content
  const parserOptions = {
    replace: (node) => {
      if (node.type === "tag") {
        const props = { ...node.attribs };
        if (props.style) delete props.style;

        // Headings (h1-h4)
        if (["h1", "h2", "h3", "h4"].includes(node.name)) {
          const headingSize = {
            h1: "text-3xl",
            h2: "text-2xl",
            h3: "text-xl",
            h4: "text-xl"
          }[node.name];
          const headingClasses = `${headingSize} font-bold text-gray-900 tracking-tight leading-tight py-4`;
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

        // Paragraphs
        if (node.name === "p") {
          return React.createElement(
            "p",
            {
              ...props,
              className:
                "text-gray-700 text-base  leading-[32px] text-justify",
            },
            domToReact(node.children, parserOptions)
          );
        }

        //Images
        if (node.name === "img") {
          return React.createElement(
            "div",
            {
              className: "overflow-hidden rounded-xl mx-auto my-2 max-w-full block",
            },
            React.createElement("img", {
              ...props,
              className:
                "w-full object-cover transition-transform duration-500 hover:scale-105",
            })
          );
        }


        // Links
        if (node.name === "a") {
          return (
            <a
              {...props}
              className="text-sky-600 hover:text-sky-700 underline hover:underline-offset-2 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {domToReact(node.children, parserOptions)}
            </a>
          );
        }

        // Blockquotes
        if (node.name === "blockquote") {
          return React.createElement(
            "blockquote",
            {
              ...props,
              className:
                "border-l-4 border-sky-600 bg-sky-50 p-6 italic my-6 rounded-r-xl text-gray-800 font-medium",
            },
            domToReact(node.children, parserOptions)
          );
        }

        // Lists
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

        // Strong outside headings (normal paragraphs)
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

  if (isArticleLoading || isPostsLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-400 text-lg animate-pulse">Loading article...</p>
      </div>
    );

  if (isArticleError)
    return (
      <p className="text-center text-sky-500 p-6">
        Error loading article: {articleError.message}
      </p>
    );

  if (isPostsError)
    return (
      <p className="text-center text-sky-500 p-6">
        Error loading posts: {postsError.message}
      </p>
    );

  if (!article)
    return (
      <p className="text-center text-gray-600 text-lg p-6">
        Article not found.
      </p>
    );

  const allPosts = allPostsData?.articles || [];
  const relatedArticles = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const popularPosts = allPosts.slice(0, 5);

  return (
    <main className=" min-h-screen text-gray-900 py-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6 flex flex-col lg:flex-row gap-8">
        {/* ===== Main Article Section ===== */}
        <article className="w-full lg:w-2/3 flex flex-col gap-6">
          {/* Breadcrumb */}
          <nav className="text-sm">
            <Link to="/" className="hover:underline text-sky-600">
              Home
            </Link>{" "}
            ›{" "}
            <span className="text-gray-700">{article.section || "News"}</span>{" "}
            › <span className="text-gray-800">{article.title}</span>
          </nav>


          {/* Article Title and Meta */}
          <div className=" rounded-xl ">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* Content - Now using custom parser */}
          <div className="prose max-w-none rounded-lg mb-16 text-gray-800">
            {parse(article.content, parserOptions)}
          </div>


        </article>

        {/* ===== Sidebar Section ===== */}
        <aside className="w-full lg:w-1/3 lg:sticky lg:top-26 self-start space-y-6">
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-400"></div>
            <div className="text-[1.125rem] bg-sky-600 text-white font-bold text-center px-4 py-1 tracking-wider mx-4">
              TRENDING CRYPTO
            </div>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
          {popularPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/article/${post.slug}`}
              onClick={scrollToTop}
              className="group flex gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md hover:bg-sky-50 transition"
            >
              <div className="w-24 h-20 overflow-hidden rounded-lg flex-shrink-0">
                <img
                  src={post.featuredImage || "https://placehold.co/100x100"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="mb-1">
                  <CategoryTag label={getRandomCategory()} />
                </div>
                <h4 className="text-sm font-bold line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}

        </aside>
      </div>
                {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-6">
              <div className="flex items-center mb-6">
                <div className="flex-1 border-t border-gray-400"></div>
                <div className="text-[1.125rem] bg-sky-600 text-white font-bold text-center px-4 py-1 tracking-wider mx-4">
                  RELATED CRYPTO NEWS
                </div>
                <div className="flex-1 border-t border-gray-400"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/article/${post.slug}`}
                    onClick={scrollToTop}
                    className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden group"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={post.featuredImage || "https://placehold.co/400x250"}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <CategoryTag label={getRandomCategory()} />
                      </div>
                      <h3 className="font-bold text-base mt-1 line-clamp-2 group-hover:text-sky-600 transition">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 transition-all duration-300 text-white text-xl font-bold shadow-lg flex items-center justify-center group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </main>
  );
}