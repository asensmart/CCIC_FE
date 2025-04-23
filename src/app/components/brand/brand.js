"use client";
import Image from "next/image";
import { Accordian } from "../shared/Faq";
import BookService from "../shared/BookService";
import ServiceAreas from "../shared/ServiceAreas";
import RatingCom from "../shared/RatingCom";
import ContactForm from "../shared/ContactForm";
import BrandContent from "./content";

export const Brand = ({ data }) => {

  return (
    <div className="relative bg-white text-black">
      {/* Home Banner */}
      <Image
        src={data?.getBrand?.titleBackgroundImage}
        alt={data?.getBrand?.titleImageAltName}
        title={data?.getBrand?.titleImageAltName}
        // className="dark:invert"
        className="object-cover h-32 md:h-[100%] w-[100%]"
        width={900}
        height={0}
        priority
      />

      {/* Contact Form */}
      <ContactForm />

      {/* Content */}
      <BrandContent data={data?.getBrand} />

      {/* Rating */}
      <RatingCom data={data?.getBrand} />

      {/* Service Area */}
      <ServiceAreas data={data?.getAreasByBrand} />

      {/* Book A service Today */}
      <BookService whatsAppNum={data?.getBrand?.contactNumber} />

      {/* FAQ */}
      <Accordian accData={data?.getBrand?.faqs} />
    </div>
  );
};
