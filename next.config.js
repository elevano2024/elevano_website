/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['elevano.com'],
    },
    transpilePackages: ['framer-motion'],
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig