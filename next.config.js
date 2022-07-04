/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ["ipfs.infura.io", "cdn.sanity.io", "tokens.buildspace.so", "lh3.googleusercontent.com"],
  },
  i18n:{
    locales: ["en","es","pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
}

module.exports = nextConfig
