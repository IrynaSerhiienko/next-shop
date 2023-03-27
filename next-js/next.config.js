const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname);
    return config;
  },

  ...nextConfig,
};

// module.exports = {
//   ...nextTranslate(),
//   images: {
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 64],
//     minimumCacheTTL: 1200,
//   },
// };
