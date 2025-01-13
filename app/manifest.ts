import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elevano",
    short_name: "Elevano",
    description: "Digital Innovation & Technology Solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#4C42D9",
    theme_color: "#4C42D9",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
