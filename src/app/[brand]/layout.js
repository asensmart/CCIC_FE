import Link from "next/link";
import NavbarBrand from "../components/NavbarBrand";
import BrandMobileNav from "../components/home/brandMobileNav.js";
import MainMobNav from "../components/home/mainMobilePage.js/index.js";
import { menus } from "../datas/catMenus";
import { Icons } from "@/assets/icons/icons";

export default async function RootLayout({ children, params }) {
  const getCatByBrand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/categoriesByBrand?brandName=${params?.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const getBrand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${params.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <BrandMobileNav menus={menus} data={getCatByBrand} brandName={params} />
      <div className="lg:block hidden">
        <NavbarBrand
          brand={getBrand}
          category={getCatByBrand}
          brandName={params}
        />
      </div>
      {children}
      {/* Whatsapp icon for mobile */}
      <div className="lg:hidden block">
        <Link href={`tel:${getBrand?.contactNumber}`}>
          <div className="fixed bottom-24 right-3 text-white p-4 bg-blue-500 rounded-full">
            <Icons.phone size={24} />
          </div>
        </Link>
        <Link href={`https://wa.me/${getBrand?.contactNumber}`}>
          <div className="fixed bottom-4 right-3 text-green-400 p-4 bg-sky-800 rounded-full">
            <Icons.whatsApp size={28} />
          </div>
        </Link>
      </div>
    </>
  );
}
