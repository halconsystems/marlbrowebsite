import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/marlbrowebsite",  // repo name
  assetPrefix: "/marlbrowebsite/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
