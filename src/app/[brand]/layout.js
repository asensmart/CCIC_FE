import Link from "next/link";
import NavbarBrand from "../components/NavbarBrand";
import BrandMobileNav from "../components/home/brandMobileNav.js";
import { menus } from "../datas/catMenus";
import { Icons } from "@/assets/icons/icons";
import React from "react";
import { notFound } from "next/navigation";

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
    `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${params?.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

    if(!getBrand) notFound()

  return (
    <>
      <BrandMobileNav menus={menus} data={getCatByBrand} brandName={params} />
      <div className="sticky top-0 shadow-lg bg-white z-50 lg:block hidden">
        <NavbarBrand
          brand={getBrand}
          category={getCatByBrand}
          brandName={params}
        />
      </div>
      {children}
      {/* Whatsapp icon for mobile */}
      <div className="lg:hidden block">
        <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>
          <div className="fixed bottom-24 right-3 text-white p-4 bg-blue-500 rounded-full">
            <Icons.phone size={24} />
          </div>
        </Link>
        <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}>
          <div className="fixed bottom-4 right-3 text-green-400 p-4 bg-sky-800 rounded-full">
            <Icons.whatsApp size={28} />
          </div>
        </Link>
      </div>
    </>
  );
}
