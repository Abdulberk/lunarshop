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
      'https://homepage-lunar.s3.amazonaws',
      'homepage-lunar.s3.amazonaws',
      'homepage-lunar.s3.amazonaws.com',
      'https://homepage-lunar.s3.amazonaws.com',
      'd1.awsstatic.com',
      'avatars.githubusercontent.com',
      'https://avatars.githubusercontent.com',
      
  
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
        port: '',

      }
    ],
    
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    newNextLinkBehavior: false,
  },
  
  


}


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})
module.exports = withBundleAnalyzer(nextConfig)
