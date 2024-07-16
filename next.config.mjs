/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/github-web',
          destination: 'https://github.com',
        },
      ]
    },
  };
export default nextConfig;
