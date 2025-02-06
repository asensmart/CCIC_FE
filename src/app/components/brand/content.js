import { Icons } from "@/assets/icons/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrandContent = ({ data, serviceArea }) => {
  return (
    <div className="lg:mt-16 mt-4">
      <h2 className="hidden lg:block text-center text-4xl font-bold text-[#F86E4E]">
        <span className="underline">
          {/* {data?.getServices?.brandName.toUpperCase()} */}{" "}
        </span>{" "}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] py-5 px-2 bg-white">
        <div
          className="sm:mb-11 sm:flex sm:justify-center"
          style={{ height: "fit-content" }}
        >
          {serviceArea ? (
            <Image
              src={data?.serviceAreaLogo}
              alt={data?.logoAltName}
              title={data?.logoAltName}
              width={500}
              height={0}
              priority
            />
          ) : (
            <Image
              src={data?.sideThumbnail}
              alt={data?.sideImageAltName}
              title={data?.sideImageAltName}
              width={500}
              height={0}
              priority
              className="h-[30%]"
            />
          )}
        </div>
        <div className="text-black p-2">
          <div
            dangerouslySetInnerHTML={{ __html: data?.moreInfo }}
            className="mt-3"
          ></div>
          <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}>
            <button
              className={`flex items-center bg-green-600 text-white hover:bg-green-400 p-3 rounded-3xl`}
            >
              <Icons.whatsApp size={30} />
              <span className="ms-2 text-base font-bold">WhatsApp with Us</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandContent;
