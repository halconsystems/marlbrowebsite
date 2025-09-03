import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  assetPrefix: './',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
