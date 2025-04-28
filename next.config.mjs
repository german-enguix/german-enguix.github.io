/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/german-enguix.github.io',
  assetPrefix: '/german-enguix.github.io/',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig 