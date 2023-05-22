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
// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: [
//         'style-loader',
//         'css-loader',
//         {
//           loader: 'sass-loader',
//           options: {
//             sassOptions: {
//               includePaths: [path.join(__dirname, 'styles')],
//             },
//           },
//         },
//       ],
//       include: path.resolve(__dirname, '../'),
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;

// const path = require('path');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.join(__dirname);

//     config.module.rules.push({
//       test: /\.(woff(2)?|eot|ttf|otf)$/i,
//       type: 'asset/resource',
//       generator: {
//         filename: 'static/fonts/[name].[hash][ext]',
//       },
//     });

//     return config;
//   },

//   ...nextConfig,
// };
