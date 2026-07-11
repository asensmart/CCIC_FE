"use client";
import React from "react";
import about1 from "./../../../../assets/images/About1.png";
import about2 from "./../../../../assets/images/About2.png";
import about3 from "./../../../../assets/images/About3.png";
import about4 from "./../../../../assets/images/About4.png";
import Image from "next/image";

const OurServices = () => {
  const serviceData = [
    {
      id: 1,
      img: about1,
      alt: "TV Repair in Chennai",
      title: "TV Repair in Chennai",
      description:
        "LED, LCD, Smart, UHD & QLED TV repair for all brands. Same-day doorstep service with genuine spare parts.",
    },
    {
      id: 2,
      img: about2,
      alt: "All Brand LED TV Repair Service in Chennai",
      title: "All Brand LED TV Repair Service in Chennai",
      description:
        "Expert LED TV Repair Service for Samsung, LG, Sony, Mi, OnePlus, TCL, Vu and more. Same-day doorstep service for display, sound, power and motherboard issues.",
    },
    {
      id: 3,
      img: about4,
      alt: "Smart TV Repair Service Center in Chennai",
      title: "Smart TV Repair Service Center in Chennai",
      description:
        "Professional Smart TV repair for Android TV, Google TV and WebOS TVs. Fix Wi-Fi connectivity, software issues, screen freezing, app errors and more.",
    },
    {
      id: 4,
      img: about3,
      alt: "TV Panel and Motherboard TV Repair Service in Chennai",
      title: "TV Panel and Motherboard TV Repair Service in Chennai",
      description:
        "Advanced chip-level TV repair for motherboard, power supply board, T-Con board and panel issues. Genuine spare parts with warranty support.",
    },
  ];
  return (
    <>
      <h2 className="text-center text-4xl text-blue-600 font-bold">
        <span className="text-black text-center">Our</span> Services
      </h2>
      <p className="text-black text-center">What We Offer</p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 py-4 px-4 justify-items-center">
        {serviceData?.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm h-full"
          >
            <Image
              src={service?.img}
              alt="Service Card"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-6 h-full">
              <h3 className="text-xl font-bold mb-2 text-black">
                {service?.title}
              </h3>
              <p className="text-gray-700">{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurServices;
