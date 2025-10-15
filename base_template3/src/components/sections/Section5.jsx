import React from "react";
import { Link } from "react-router-dom";

const Section5 = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  const bitcoinPosts = articles.slice(0, 4);
  const popularPosts = articles.slice(4, 9);
  const altcoinPosts = articles.slice(9, 13);

  const fallbackImage = "https://via.placeholder.com/150";

  const renderFeatured = (post, typeGradient) => (
    <Link
      to={`/article/${post.slug}`} // <-- Navigate using article ID
      className="block rounded-2xl hover:shadow-lg transition-shadow overflow-hidden"
    >
      <article className="p-6">
        <div
          className="mb-5 h-52 w-full rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${post.featuredImage || fallbackImage})` }}
        ></div>
        <div className="flex flex-col gap-3 pb-6">
          <span
            className={`inline-flex w-max items-center rounded-full ${typeGradient} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
          >
            {post.category || "News"}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 leading-snug hover:text-cyan-500 transition">
            {post.title}
          </h3>
          {post.date && (
            <div className="text-[12px] font-semibold uppercase tracking-widest text-gray-500">
              {post.date}
            </div>
          )}
        </div>
      </article>
    </Link>
  );

  const renderList = (posts, typeGradient) =>
    posts.map((post, i) => (
      <Link
        key={i}
        to={`/article/${post.slug}`} // <-- Navigate using article ID
        className="block hover:shadow-lg transition-shadow rounded-xl overflow-hidden"
      >
        <article className="flex items-start gap-4 py-4 px-1">
          <div
            className="h-14 w-14 flex-shrink-0 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${post.featuredImage || fallbackImage})` }}
          ></div>
          <div className="flex-1">
            <span
              className={`inline-flex w-max items-center rounded-full ${typeGradient} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white`}
            >
              {post.category || "News"}
            </span>
            <h4 className="mt-2 text-sm font-semibold leading-snug text-gray-900 hover:text-cyan-500 transition">
              {post.title}
            </h4>
            {post.date && (
              <div className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                {post.date}
              </div>
            )}
          </div>
        </article>
      </Link>
    ));

  return (
    <section className="bg-gray-50/60 py-14">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-3xl font-bold text-gray-900">Popular Posts</h2>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition-all duration-300 hover:gap-3"
          >
            View Insights <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Bitcoin Column */}
          <div className="flex flex-col rounded-2xl border border-white/60 bg-white/90 shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="border-b border-gray-200/70 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Bitcoin News</h3>
            </div>
            {bitcoinPosts[0] && renderFeatured(bitcoinPosts[0], "bg-gradient-to-r from-cyan-400 to-blue-600")}
            <div className="flex flex-col border-t border-gray-200/70 px-6 pb-6">
              {renderList(bitcoinPosts.slice(1), "bg-gradient-to-r from-cyan-400 to-blue-600")}
            </div>
          </div>

          {/* Popular Column */}
          <div className="flex flex-col rounded-2xl border border-white/60 bg-white/90 shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="border-b border-gray-200/70 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Popular Posts</h3>
            </div>
            <div className="flex flex-col border-t border-gray-200/70 px-6 pb-6">
              {renderList(popularPosts, "bg-gradient-to-r from-yellow-400 to-pink-500")}
            </div>
          </div>

          {/* Altcoin Column */}
          <div className="flex flex-col rounded-2xl border border-white/60 bg-white/90 shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="border-b border-gray-200/70 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Altcoin News</h3>
            </div>
            {altcoinPosts[0] && renderFeatured(altcoinPosts[0], "bg-gradient-to-r from-sky-400 to-indigo-500")}
            <div className="flex flex-col border-t border-gray-200/70 px-6 pb-6">
              {renderList(altcoinPosts.slice(1), "bg-gradient-to-r from-sky-400 to-indigo-500")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
