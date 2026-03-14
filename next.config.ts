// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "ik.imagekit.io",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/provider/:path*',
        destination: 'https://api.fetchtrue.com/api/provider/:path*',
      },
       {
        source: '/api/packages',
        destination: 'https://api.fetchtrue.com/api/packages',
      },
    ];
  },
};

module.exports = nextConfig;