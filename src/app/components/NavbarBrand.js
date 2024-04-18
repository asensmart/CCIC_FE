"use client";
import React, { useState } from "react";
import { menus } from "../datas/catMenus";
import Link from "next/link";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";

const NavbarMenus = ({ brandName }) => {
  // console.log("props --->", brandName);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 flex">
      {menus.map((item) => {
        return item.mName !== "Catagory" ? (
          <Link href={item.path} key={item?.id}>
            <p className="m-1">{item.mName}</p>
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
              {item.mName} <RiArrowDropDownLine size={24} />
            </div>
            <div
              className={`absolute bg-red-300 w-32 ${
                isOpen ? "block" : "hidden"
              } hover:transition-all hover:duration-300 hover:ease-in-out rounded-md`}
            >
              {item.subMenus.length > 0 ? (
                item.subMenus.map((subMenu) => (
                  <Link key={subMenu?.id} href={`/${brandName}${subMenu.path}`}>
                    <div
                      role="button"
                      className="p-2 hover:bg-slate-300 hover:transition-all hover:duration-700 hover:ease-out"
                    >
                      {subMenu.mName}
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

const NavbarBrand = ({ brandName }) => {
  // console.log("brandName 111 --->", brandName);
  return (
    <>
      <div className="flex p-2 justify-between">
        <div>mail</div>
        <div>icons</div>
      </div>
      <div className="grid grid-cols-[2fr_3fr_1.5fr] p-2 items-center">
        <div>
          <Link href={`/${brandName.brand}`}>Logo</Link>
        </div>
        <div className="">
          <NavbarMenus brandName={brandName.brand} />
        </div>
        <div className="flex items-center gap-4 mx-auto">
          <div>Call Number</div>
          <div>Whatsapp Number</div>
        </div>
      </div>
    </>
  );
};

export default NavbarBrand;
