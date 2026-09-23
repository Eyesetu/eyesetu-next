import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 85 keeps real-world photos crisp (default 75 visibly softens faces and device screens)
    qualities: [75, 85],
  },
};

export default nextConfig;
