"use client";
import React, { useEffect, useState } from "react";
import { menus } from "../datas/Navmenus";
import Link from "next/link";
import { Icons } from "@/assets/icons/icons";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import NavMailHead from "./navHead/navMailHead";
import autoprefixer from "autoprefixer";

const NavbarManus = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-2 py-3 flex">
      {menus.map((item) => {
        return item.mName !== "Brands" ? (
          <Link href={item.path} key={item?.id} className="mx-2">
            <p>{item.mName}</p>
          </Link>
        ) : (
          <div
            className="relative mx-2"
            onMouseLeave={() => setIsOpen(false)}
            key={item?.id}
          >
            <div
              role="button"
              className=" flex items-center"
              onMouseOver={() => setIsOpen(true)}
            >
              {item.mName} <Icons.dropDownIcon size={24} />
            </div>
            <div
              className={`absolute bg-white border shadow-lg w-36 ${
                isOpen ? "block" : "hidden"
              } hover:transition-all hover:duration-300 hover:ease-in-out rounded-md`}
            >
              {data.length > 0 ? (
                data.map((subMenu) => (
                  <Link key={subMenu?._id} href={`${subMenu?.slug}`}>
                    <div
                      role="button"
                      className="p-2 hover:bg-slate-300 hover:transition-all hover:duration-700 hover:ease-out"
                    >
                      {subMenu.brandName}
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

const Navbar = ({ data }) => {
  return (
    <>
      <NavMailHead />

      <div className="shadow-lg z-50 sticky grid grid-cols-[2fr_3fr_1.5fr] p-2 items-center bg-white text-navText font-semibold">
        <div className="w-[70%] items-center">
          <Image
            src={logo}
            alt="logo"
            width={autoprefixer}
            height={autoprefixer}
          />
        </div>
        <div className="">
          <NavbarManus data={data} />
        </div>
        <div className="flex items-center gap-4 mx-auto">
          <Link
            href={`tel:7550052019`}
            className="flex items-center py-2 px-3 bg-blue-600 text-white rounded-2xl"
          >
            <Icons.phone className="mr-2" /> 7550052019
          </Link>

          <Link
            href={`https://wa.me/7550052019`}
            className="flex items-center py-2 px-3 bg-green-600 text-white rounded-2xl"
          >
            <Icons.phone className="mr-2" /> WhatsApp
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
