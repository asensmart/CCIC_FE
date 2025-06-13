import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import "react-modern-drawer/dist/index.css";
import "@smastrom/react-rating/style.css";
import Script from "next/script";
import axios from "axios";

// axios.defaults.baseURL = process?.env?.NEXT_PUBLIC_BASE_URL;

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata = {
  verification: {
    google: [
      "LXdjzy7NmnEeWL0rO9LPAr4WgAJWMoTHrGZ13c5dgbY",
      "Cp9k-SZRJ9sGaLQarLt41jXCiP07Z1KKy8MBF5nqnwc",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="alternate"
          href="https://customercareinchennai.com/"
          hrefLang="en-IN"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KVELYZBEK6"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-KVELYZBEK6");`}
        </Script>
      </head>
      <body className={`${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
