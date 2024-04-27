import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Script from "next/script";
import "react-modern-drawer/dist/index.css";
import HomeCom from "./components/home/HomeCom";
import MainMobNav from "./components/home/mainMobilePage.js";
import Navbar from "./components/Navbar";
import "@smastrom/react-rating/style.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
//   .then((res) => res.json())
//   .then((res) => {
//     return res.data;
//   })
//   .catch((err) => console.log(err));

//   const menus = [
//     {
//       id: 1,
//       name: "Home",
//       slug: "/",
//     },
//     {
//       id: 2,
//       name: "About Us",
//       slug: "/aboutus",
//     },
//     {
//       id: 3,
//       name: "Brands",
//       subNav: [{ id: 1, subcatName: "Sample 1", path: "/kitchen " }],
//     },
//     {
//       id: 4,
//       name: "Contact Us",
//       slug: "/contactus",
//     },
//   ];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={`${inter.className}`}>
        {/* {isRootPage && (
          <>
            <MainMobNav menus={menus} data={brandData} />

            <div className="lg:block hidden">
              <Navbar data={brandData} />
            </div>
          </>
        )} */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
