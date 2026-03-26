/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    minimumCacheTTL: 31536000, // 1 year
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disabled: can cause "Cannot read properties of undefined (reading 'call')" with RSC + dynamic chunks
  // experimental: {
  //   optimizePackageImports: ['lucide-react', 'framer-motion'],
  // },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
