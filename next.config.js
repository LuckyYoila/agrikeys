/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');

const handleImages = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],
})

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: ".",
}

module.exports = nextConfig

