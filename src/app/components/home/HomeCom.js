"use client";
import { Icons } from "@/assets/icons/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HomeAbout from "./HomeAbout.js";
import Link from "next/link";
import MainNavbar from "../shared/Nav/Navbar.js";
import axios from "axios";
import BrandServices from "./brandServices/index.js";
import OurServices from "./ourServices/index.js";
import BannerContent from "./banner/index.js";
import BookService from "./bookService/index.js";
import WhyChooseUs from "./whyChooseUs/index.js";
import BookCallService from "../shared/BookService.js";
import BrandContent from "./brandContent/index.js";
import ServiceAreaBrand from "./homeServiceBrand/index.js";
import AccordionFAQ from "./AccordionFAQ.js";

const HomeCom = () => {
  const titleData = [
    {
      id: 1,
      title: "Expert Technicians",
      description: "Our engineers are skilled to repair and Service",
      icon: <Icons.userIcon size={48} color="#2563eb" />,
    },
    {
      id: 2,
      title: "Fast Problem Solving",
      description: "Carry same day visit you will find Technical Support 24/7",
      icon: <Icons.settings size={48} color="#2563eb" />,
    },
    {
      id: 3,
      title: "Innovative Products",
      description:
        'We Create innovative products and back them with "customer care Chennai',
      icon: <Icons.navigation size={48} color="#2563eb" />,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white">
      <MainNavbar brandData={data} isMainHome={true} />
      {/* Banner Section */}
      <BannerContent />

      {/* About Us */}
      <HomeAbout />

      {/*  Our Services */}
      <OurServices />

      {/* Brnad Services */}
      <BrandServices brand={data} />

      {/* Brand with Content */}
      {/* <BrandContent /> */}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How to Book Service */}
      <BookService />

      {/* // Place this component here: */}
      <AccordionFAQ />

      {/* Book Call Service */}
      <BookCallService />

      {/* Brand Service Area */}
      <ServiceAreaBrand brand={data} />

      <div className="px-8 pb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1755428840471!5m2!1sen!2sin"
          width={0}
          height={300}
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* Whatsapp icon for mobile */}
      <div className="lg:hidden block">
        <Link href={`tel:7550052019`}>
          <div className="fixed bottom-24 right-3 text-white p-4 bg-blue-600 rounded-full">
            <Icons.phone size={24} />
          </div>
        </Link>
        <Link href={`https://wa.me/7550052019`}>
          <div className="fixed bottom-4 right-3 text-white p-4 bg-green-600 rounded-full">
            <Icons.whatsApp size={28} />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default HomeCom;
