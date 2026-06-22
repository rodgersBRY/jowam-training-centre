import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // PLACEHOLDER media source — temporary Unsplash stand-ins, swap for real assets before launch.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
