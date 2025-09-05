"use client";
import React from "react";
import about1 from "./../../../../assets/images/About1.jpg";
import about2 from "./../../../../assets/images/About2.jpg";
import about3 from "./../../../../assets/images/About3.jpg";
import about4 from "./../../../../assets/images/About4.jpg";
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
      img: about4,
      alt: "AC Repair in Chennai",
      title: "AC Repair in Chennai",
      description:
        "Split, Window & Inverter AC repair. Cooling issues, gas filling, PCB repair & installation. Quick & affordable.",
    },
    {
      id: 3,
      img: about3,
      alt: "Washing Machine Repair in Chennai",
      title: "Washing Machine Repair in Chennai",
      description:
        "Front-load, top-load & semi-automatic washing machine service. Fixing leakage, noise & error codes.",
    },
    {
      id: 4,
      img: about2,
      alt: "Refrigerator Repair in Chennai",
      title: "Refrigerator Repair in Chennai",
      description:
        "Single-door, double-door & inverter fridge repair. Cooling issues, compressor replacement & gas filling.",
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl text-blue-600 font-bold">
        <span className="text-black text-center">Our</span> Services
      </h1>
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
