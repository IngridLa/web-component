// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// remote/next.config.js 
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {  
  reactStrictMode: true,
  webpack(config:any, options:any) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "web-component",
        remotes: {
          "test-web-componen": `test-web-componen@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Button": "./src/components/Button.tsx",
        },
        shared: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;