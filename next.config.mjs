/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Disabling image optimization as it's not supported for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
