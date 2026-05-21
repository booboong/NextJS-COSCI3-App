import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true, // คือให้มันโหลด components ที่ใช้บ่อยๆ ไว้ใน cache เพื่อให้โหลดเร็วขึ้น
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.fffuel.co" },
      { protocol: "https", hostname: "api.codingthailand.com" },
      { protocol: "https", hostname: "www.fandom.com" },
    ]
  }
};

export default nextConfig;
