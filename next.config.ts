import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    deviceSizes: [320, 420, 768, 1024, 1200, 1600, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
    loader: "default",
  },
};

export default nextConfig;
