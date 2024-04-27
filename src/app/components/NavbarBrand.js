"use client";
import React, { useEffect, useState } from "react";
import { menus } from "../datas/catMenus";
import Link from "next/link";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { Icons } from "@/assets/icons/icons";
import NavMailHead from "./navHead/navMailHead";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import autoprefixer from "autoprefixer";

const NavbarMenus = ({ brandName, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 flex">
      {menus.map((item) => {
        return item?.name !== "Catagory" ? (
          <Link
            href={
              brandName && item?.name === "Home"
                ? `/${brandName}`
                : brandName
                ? `/${brandName}${item?.slug}`
                : item?.slug
            }
            key={item?.id}
          >
            <p className="m-1">{item?.name}</p>
          </Link>
        ) : (
          <div
            className="relative"
            onMouseLeave={() => setIsOpen(false)}
            key={item?.id}
          >
            <div
              role="button"
              className="m-1 flex items-center"
              onMouseOver={() => setIsOpen(true)}
            >
              {item?.name} <RiArrowDropDownLine size={24} />
            </div>
            <div
              className={`absolute bg-white border shadow-lg w-36 ${
                isOpen ? "block" : "hidden"
              } hover:transition-all hover:duration-300 hover:ease-in-out rounded-md`}
            >
              {category?.length > 0 ? (
                category?.map((catItem) => (
                  <Link
                    key={catItem?._id}
                    href={`${process.env.NEXT_PUBLIC_HYPER_TXT}${catItem.slug}`}
                  >
                    <div
                      role="button"
                      className="p-2 hover:bg-slate-300 hover:transition-all hover:duration-700 hover:ease-out"
                    >
                      {catItem?.categoryName}
                    </div>
                  </Link>
                ))
              ) : (
                <div role="button" className="p-2 ">
                  No Datas!
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const NavbarBrand = ({ brandName, category, brand }) => {
  return (
    <>
      <NavMailHead />
      <div className="grid grid-cols-[2fr_3fr_1.5fr] p-2 items-center bg-white text-navText font-semibold">
        <div className="w-[70%] items-center">
          <Link href={`/${brandName?.brand}`}>
            <Image src={brand?.brandLogo} alt="logo" width={100} height={0} />
          </Link>
        </div>
        <div className="">
          <NavbarMenus category={category} brandName={brandName.brand} />
        </div>
        <div className="flex items-center gap-4 mx-auto">
          <Link
            href={`tel:7550052019`}
            className="flex items-center py-2 px-3 bg-blue-600 text-white rounded-2xl"
          >
            <Icons.phone className="mr-2" /> {brand?.contactNumber}
          </Link>

          <Link
            href={`https://wa.me/${brand?.contactNumber}`}
            className="flex items-center py-2 px-3 bg-green-600 text-white rounded-2xl"
          >
            <Icons.whatsApp size={24} className="mr-2" /> WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarBrand;
