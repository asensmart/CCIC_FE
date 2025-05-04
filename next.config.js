module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    // domains: ["localhost"],
    remotePatterns: [
      // http://api.customercareinchennai.com/uploads/brands/sideImage-1706550987346-104259939.png
      {
        protocol: "http",
        hostname: "api.customercareinchennai.com",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      }
    ],
  },
};
