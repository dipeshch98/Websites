const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const SITE_URL = import.meta.env.VITE_SITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getPosts(page = 1) {
  const API_URL = `${BASE_URL}?uri=${SITE_URL}&page=${page}&api_key=${API_KEY}`;

  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Error ${res.status}`);
  }

  return res.json();
}

export async function getAllPosts() {
  let page = 1;
  let allPosts = [];
  let hasMore = true;

  while (hasMore) {
    const data = await getPosts(page);
    if (data.articles && data.articles.length > 0) {
      allPosts = allPosts.concat(data.articles);
      page++;
    } else {
      hasMore = false;
    }
  }

  return { articles: allPosts };
}

export async function getArticle(slug) {
  const separator = SITE_URL.includes('?') ? '&' : '?';
  const API_URL = `${BASE_URL}/${slug}${separator}uri=${SITE_URL}`;

  const res = await fetch(API_URL, {
    headers: {
      'x-api-key': API_KEY
    }
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}`);
  }

  return res.json();
}