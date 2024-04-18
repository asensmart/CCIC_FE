"use client";
import React, { useEffect, useState } from "react";
import { menus } from "../datas/Navmenus";
import Link from "next/link";
import { Icons } from "@/assets/icons/icons";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

const NavbarManus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/get/brands")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

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
              className={`absolute bg-white border w-36 ${
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
              {/* {item.subMenus.length > 0 ? (
                item.subMenus.map((subMenu) => (
                  <Link key={subMenu?.id} href={`${subMenu.path}`}>
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
              )} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const iconData = [
    {
      id: 1,
      icon: <Icons.facebook size={18} color="black" />,
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <Icons.instagram size={18} color="black" />,
      link: "https://www.insta.com",
    },
    {
      id: 3,
      icon: <Icons.twitter size={18} color="black" />,
      link: "https://www.insta.com",
    },
    {
      id: 4,
      icon: <Icons.google size={18} color="black" />,
      link: "https://www.insta.com",
    },
  ];
  return (
    <>
      <div className="flex p-2 justify-between bg-mailHead">
        <Link
          href={`mailto:customercareinchennai@gmail.com`}
          className="flex items-center justify-evenly text-black"
        >
          <Icons.mailIcon className="mr-2" size={24} />{" "}
          customercareinchennai@gmail.com
        </Link>
        <div className="grid grid-cols-4 gap-3 items-center">
          {iconData.map((icon) => (
            <Link href={icon.link} key={icon.id}>
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[2fr_3fr_1.5fr] p-2 items-center bg-white text-navText font-semibold">
        <div className="w-[70%] items-center">
          <Image src={logo} alt="logo" />
        </div>
        <div className="">
          <NavbarManus />
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
