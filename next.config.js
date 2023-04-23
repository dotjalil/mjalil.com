/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    domains: ["admin.mjalil.com"],
  },
};

module.exports = nextConfig;
