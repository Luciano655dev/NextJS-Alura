// código do https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  }
  
  module.exports = nextConfig