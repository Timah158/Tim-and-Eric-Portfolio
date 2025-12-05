/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/turbopack"],
        });
    
        return config;
      },
};

export default nextConfig;
