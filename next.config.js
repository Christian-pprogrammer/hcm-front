/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-us', 'fr', 'rw', 'sw'],
    defaultLocale: 'en-us',
  },

  images: {
    domains: ['avatars.githubusercontent.com', 'www.moh.gov.rw','www.researchluxembourg.org'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'www.moh.gov.rw',
    //   }
    // ]
  },

  poweredByHeader: false,
};

module.exports = nextConfig;
