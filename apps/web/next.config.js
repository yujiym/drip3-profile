/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  transpilePackages: ['@drip3/assets', '@drip3/react-lib', '@drip3/lib'],
  images: {
    domains: ['arweave.net'],
  },
}

module.exports = nextConfig
