"use client";
import { Icons } from "@/assets/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import logo from "@/assets/images/logo.png";
import autoprefixer from "autoprefixer";
import { useRouter } from "next/navigation";

const MainMobNav = ({ menus, data, brandName, isMainHome, brandColor }) => {

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="lg:hidden block sticky top-0 bg-white shadow-lg z-50">
        <div className="grid grid-cols-[1fr_5fr]">
          <div
            onClick={toggleDrawer}
            className="text-black flex items-center p-2"
            role="button"
          >
            <Icons.menuDrawer className={`w-[100%] h-[90%]`} />
          </div>
          <div className="text-black flex justify-center me-12 items-center py-2">
            <div
              onClick={() =>
                !isMainHome
                  ? router.push(`/${brandName?.slice(1)}`)
                  : router.push("/")
              }
            >
              {brandName != undefined ? (
                // style={{ color: brandColor }}
                <p className="font-bold text-3xl text-black" >
                  {data[0]?.brandName?.toUpperCase()}
                </p>
              ) : (
                <Image
                  src={logo}
                  alt={`${data[0]?.brandName} logo`}
                  title={`${data[0]?.brandName} logo`}
                  width={autoprefixer}
                  height={autoprefixer}
                  className="w-[80%] ms-4"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div className="text-black p-4 border-b">
          {brandName == undefined ? (<Image
            src={logo}
            alt="logo"
            width={autoprefixer}
            height={autoprefixer}
            className="w-[80%] ms-4"
          />) : (<div className="text-3xl font-bold text-center">{data[0]?.brandName?.toUpperCase()}</div>)}
        </div>
        <div className="text-black">
          {menus?.map((menu) =>
            menu?.name === "Brands" ? (
              <MobileLinkNav key={menu?.id} menu={menu} data={data} />
            ) : menu?.name === "Category" ? (
              <MobileLinkNav
                key={menu?.id}
                menu={menu}
                data={data}
                brandName={brandName}
              />
            ) : (
              <Link
                key={menu?.id}
                href={
                  isMainHome
                    ? menu?.slug
                    : data[0] && menu?.name === "Home"
                      ? `/${data[0]?.brandName}`
                      : data[0]
                        ? `/${data[0]?.brandName}${menu?.slug}`
                        : menu?.slug
                }
              // href={
              //   brandName && menu?.name === "Home"
              //     ? router.push(`/${brandName.brand}`)
              //     : router.push(menu?.slug)
              // }
              >
                <div
                  href={menu?.slug}
                  className="px-2 py-2 text-xl hover:bg-blue-600 hover:text-white transition-all hover:transition-all ease-in-out hover:ease-in-out duration-200 hover:duration-200"
                >
                  {menu?.name}
                </div>
              </Link>
            )
          )}
        </div>
      </Drawer>
    </>
  );
};

const MobileLinkNav = ({ menu, data, brandName }) => {
  return (
    <div className="space-y-2 ">
      <div
        className="group flex flex-col gap-2 rounded-lg text-black"
        tabIndex="1"
      >
        <div className="cursor-pointer ">
          <div className="flex items-center justify-between text-xl hover:text-white hover:bg-blue-600 p-2">
            <div>{menu?.name !== "Category" ? "Brands" : "Category"}</div>
            <div>
              <Icons.dropDownIcon
                size={24}
                className="transition-all group-focus:-rotate-180"
              />
            </div>
          </div>
        </div>
        <div className="px-2 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus-visible:invisible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
          {data?.length !== 0 ? (
            data?.map((link) => (
              <Link
                key={link?._id}
                // href={`${process.env.NEXT_PUBLIC_HYPER_TXT}${link?.slug}`}
                href={
                  menu?.name !== "Category"
                    ? `${process.env.NEXT_PUBLIC_HYPER_TXT}${link?.slug}`
                    : `${process.env.NEXT_PUBLIC_HYPER_TXT}${brandName}${link?.slug}`
                }
                className="hover:text-blue-600"
              >
                <div className="font-bold text-xl">
                  {menu?.name !== "Category"
                    ? link?.brandName?.toUpperCase()
                    : link?.categoryName?.toUpperCase()}
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
    </div>
  );
};

export default MainMobNav;
