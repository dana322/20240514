import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      canvas: "./empty-module.ts",
    },
  },
  /* config options here */
};

export default nextConfig;
