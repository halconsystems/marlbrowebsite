/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: 'export',

  // Must match your repo name
  basePath: '/marlbrowebsite',
  assetPrefix: '/marlbrowebsite/',

  // Export into /out folder
  distDir: 'out',

  // Ensure proper routing
  trailingSlash: true,

  // Disable Next.js image optimization (GitHub Pages doesn’t support it)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
