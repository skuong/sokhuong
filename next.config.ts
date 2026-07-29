import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.8.166"],
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com"
      }
    ]
  },
  turbopack: {
    rules: {
      "*.glsl": {
        loaders: ["raw-loader"],
        as: "*.js"
      }
    }
  }
}

export default nextConfig
