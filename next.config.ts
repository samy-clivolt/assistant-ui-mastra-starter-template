import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@mastra/*"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ignore Node.js modules on the client side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
        async_hooks: false,
        _http_common: false,
        'fs/promises': false,
        'stream/web': false,
      };
    }
    return config;
  },
  /* config options here */
};

export default nextConfig;
