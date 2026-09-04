export default function robots() {
  const baseUrl = "https://www.revisgrouptuitions.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}