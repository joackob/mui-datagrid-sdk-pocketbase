/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", process.env.NEXT_PUBLIC_API_URL_IMG_HOST],
  },
};

const withTM = require("next-transpile-modules")(["pocketbase"]);
module.exports = withTM(nextConfig);
