import { Icons } from '@/assets/icons/icons';
import Link from 'next/link';
import React from 'react'

const ServiceAreas = ({data}) => {
  return (
    <div className={"px-2 pb-3 align_me"}>
      <h2 className="text-center">
        Service <span>Area</span>{" "}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {data?.map((value, i) => (
          <div key={i}>
            <Link
              href={`/${value?.brandName}/${value?.categoryName}${value?.slug}`}
            >
              <h3 className={"flex items-center"}>
                <span>
                  <Icons.location style={{ color: `${value.color}` }} />
                </span>
                <span>{value.serviceAreaName}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceAreas