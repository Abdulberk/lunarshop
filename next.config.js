/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./base.scss";`,
  },
  images: {
    domains: [
      'w7.pngwing.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'www.google.com',
      'www.google',
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    newNextLinkBehavior: false,
  },
  


}

module.exports = nextConfig
