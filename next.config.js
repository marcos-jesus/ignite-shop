/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['files.stripe.com']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}


module.exports = nextConfig