// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: [
    '@fullcalendar/core',
    '@fullcalendar/daygrid',
    '@fullcalendar/react'
  ],
};

export default nextConfig