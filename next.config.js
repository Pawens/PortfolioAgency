/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["portfolioagencystrapi-production-549b.up.railway.app"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
