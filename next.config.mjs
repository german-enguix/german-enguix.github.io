/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/test-fintech',
  assetPrefix: '/test-fintech/',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig 