/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ["portfolioagencystrapi-production-549b.up.railway.app"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
