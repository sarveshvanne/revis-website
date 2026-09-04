export default function sitemap() {
  const baseUrl = "https://www.revisgrouptuitions.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/classes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/teaching-approach`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/results`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}