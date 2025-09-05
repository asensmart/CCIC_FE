"use client";
import React from "react";
import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import Image from "next/image";

const ServiceAreaBrand = ({ brand }) => {
  return (
    <div className={"px-8 pb-3 align_me "}>
      <p className="text-center text-4xl text-black font-bold">
        Service <span className="text-blue-600">Area</span>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2]">
        {brand?.map((item) => (
          <div key={item?._id} className="mt-1">
            <Link href={`${item?.slug}`}>
              <h3 className={"flex"}>
                <span className="flex items-start md:items-center pt-1 md:pt-0">
                  <Icons.location className="text-[14px] md:text-[18px] text-blue-600" />
                </span>
                <span className="text-[14px] sm:text-[18px] text-left text-black">
                  {item?.brandName?.toUpperCase()} Service Centre
                </span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreaBrand;
