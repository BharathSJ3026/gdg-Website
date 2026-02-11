/**
 * Strip HTML tags from a string (e.g. for truncation or plain-text display).
 */
function stripHtml(html) {
  if (typeof html !== "string") return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export default stripHtml;
