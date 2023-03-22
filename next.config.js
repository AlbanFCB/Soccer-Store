/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com', 'images.google.com', 'thumblr.uniid.it', 'www.cdiscount.com', 'static.nike.com', 'www.picclickimg.com', 'i.ebayimg.com', 'www.tradeinn.com', 'images.footballfanatics.com', 'assets.adidas.com', 'images.puma.com', 'lh3.googleusercontent.com'],
  },
  env:{
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, 
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};


module.exports = nextConfig
