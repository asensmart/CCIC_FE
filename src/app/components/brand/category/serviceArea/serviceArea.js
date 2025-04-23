"use client";
import Image from "next/image";
import { Accordian } from "../../../shared/Faq";
import ContactForm from "../../../shared/ContactForm";
import RatingCom from "../../../shared/RatingCom";
import ServiceAreas from "../../../shared/ServiceAreas";
import BookService from "../../../shared/BookService";
import BrandContent from "../../content";

export const ServiceAreaPage = ({ data }) => {
  return (
    <div className="relative bg-white text-black">
      {/* Home Banner */}
      <Image
        src={data?.getServices?.titleBackgroundImage}
        alt="banner"
        // className="dark:invert"
        className="object-cover h-32 md:h-[100%] w-[100%]"
        width={900}
        height={0}
        priority
      />

      {/* Contact Form */}
      <ContactForm />

      {/* Content */}
      <BrandContent data={data?.getServices} serviceArea={true} />

      {/* Rating */}
      <RatingCom data={data?.getBrand} />

      {/* Service Area */}
      <ServiceAreas data={data?.getAreasByBrand} />

      {/* Book A service Today */}
      <BookService whatsAppNum={data?.getServices?.contactNumber} />

      {/* FAQ */}
      <Accordian accData={data?.getServices?.faqs} />
    </div>
  );
};
