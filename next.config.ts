import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  exporttrailingSlash: true,
  images: {
    unoptimized: true,
  }
  
};

export default nextConfig;
