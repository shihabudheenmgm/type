// Use require instead of import for next-pwa
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
});

const nextConfig = {
    reactStrictMode: true,
    devIndicators: false,
};

module.exports = withPWA(nextConfig);
