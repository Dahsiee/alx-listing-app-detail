import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    domains: ["example.com"], // allow external images from example.com
  },
};

export default nextConfig;
