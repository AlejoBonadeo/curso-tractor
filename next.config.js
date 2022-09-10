/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/curso-tractor',
  assetPrefix: '/curso-tractor/',
  images: {
    loader: 'akamai',
    path: '/',
  },
}

module.exports = nextConfig
