import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://rikard-engstrom.vercel.app/sitemap.xml", // Uppdatera med din domän
  };
}
