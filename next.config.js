/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["https://creatornode.audius.co/"],
  },
};

module.exports = nextConfig;
