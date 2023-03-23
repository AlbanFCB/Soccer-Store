/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'lh3.googleusercontent.com'],
  },
  env:{
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, 
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};


module.exports = nextConfig
