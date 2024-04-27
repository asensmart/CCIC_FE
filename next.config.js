module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      // http://api.customercareinchennai.com/uploads/brands/sideImage-1706550987346-104259939.png
      {
        protocol: "http",
        hostname: "api.customercareinchennai.com",
        port: "",
        pathname: "/uploads/brands/*",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/*",
      },
    ],
  },
};
