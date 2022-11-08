/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["https://creatornode.audius.co/"],
  },
};

module.exports = nextConfig;
