import React from "react";
import { Icons } from "@/assets/icons/icons";
import Link from "next/link";

const ServiceAreaBrand = () => {
  return (
    <div className="py-4">
      <h2 className="text-center text-4xl text-black font-bold">
        Service <span className="text-blue-600">Area</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-4 text-base text-black mx-8">
        {[
          "Samsung Service Centre",
          "LG Service Centre",
          "MI Service Centre",
          "VU Service Centre",
        ].map((brand, i) => {
          const brandName = brand.split(" ")[0].toLowerCase();
          return (
            <div key={i} className="mt-1">
              <Link href={`/${brandName}`}>
                <h3 className={"flex text-2xl"}>
                  <span className="flex items-start md:items-center pt-1 md:pt-0">
                    <Icons.location className=" text-blue-600" />
                  </span>
                  <span className="text-left">{brand}</span>
                </h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceAreaBrand;
