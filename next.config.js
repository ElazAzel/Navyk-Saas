/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure proper configuration for Vercel deployment
  swcMinify: true,
  images: {
    domains: [],
    remotePatterns: []
  }
}

module.exports = nextConfig