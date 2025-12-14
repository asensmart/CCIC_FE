import Link from "next/link";
import NavbarBrand from "../components/NavbarBrand";
import BrandMobileNav from "../components/home/brandMobileNav.js";
import { menus } from "../datas/catMenus";
import { Icons } from "@/assets/icons/icons";
import React from "react";
import { notFound } from "next/navigation";
import axios from "axios";

export default async function RootLayout({ children, params }) {
  const getCatByBrand = await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/category/brand`, {
      brandName: params?.brand,
    })
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const getBrand = await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/brand`, {
      brandName: params?.brand,
    })
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });
    
    if (!getBrand) notFound();
    
  return (
    <>
      <BrandMobileNav
        menus={menus}
        data={getCatByBrand?.data}
        brandName={getBrand?.slug}
        brandColor={getBrand?.color}
      />
      <div className="sticky top-0 shadow-lg bg-white z-50 lg:block hidden">
        <NavbarBrand
          brand={getBrand}
          category={getCatByBrand?.data}
          brandName={getBrand?.slug}
        />
      </div>
      {children}
      {/* Whatsapp icon for mobile */}
      {/* <div className="lg:hidden block">
        <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>
          <div className="fixed bottom-24 right-3 text-white p-4 bg-blue-500 rounded-full">
            <Icons.phone size={24} />
          </div>
        </Link>
        <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}>
          <div className="fixed bottom-4 right-3 text-white p-4 bg-green-600 rounded-full">
            <Icons.whatsApp size={28} />
          </div>
        </Link>
      </div> */}
    </>
  );
}
