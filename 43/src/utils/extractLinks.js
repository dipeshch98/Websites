export function extractAllLinkText(htmlString = "") {
  if (!htmlString) return "";
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  const links = div.querySelectorAll("a");
  return Array.from(links)
    .map((link) => link.textContent)
    .join(", ");
}