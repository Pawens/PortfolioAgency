import withSvgr from "next-plugin-svgr";

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
};

export default withSvgr(nextConfig);
