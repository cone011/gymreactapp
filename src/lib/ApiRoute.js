export const CALL_API_ROUTE = "http://localhost:9091/api";

export function isImage(url) {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
