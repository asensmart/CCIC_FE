import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

const ServiceAreas = ({ data, paramData }) => {

  return (
    <div className={"px-2 pb-3 align_me"}>
      <h2 className="text-center">
        Service <span>Area</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2]">
        {data?.map((value, i) => (
          <div key={i} className="mt-1">
            <Link
              href={`/${paramData?.brand}/${value?.categorySlug}${value?.slug}`}
              // href={`/${value?.brandName}/${value?.categoryName}${value?.slug}`}
            >
              <h3 className={"flex"}>
                <span className="flex items-start md:items-center pt-1 md:pt-0">
                  <Icons.location
                    className="text-[14px] md:text-[18px]"
                    style={{ color: `${value.color}` }}
                  />
                </span>
                <span className="text-[14px] sm:text-[18px] text-left">
                  {value.serviceAreaName}
                </span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;
