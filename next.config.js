/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //  reactStrictMode: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig