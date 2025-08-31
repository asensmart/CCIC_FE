"use client";
import Image from "next/image";
import { Accordian } from "../../shared/Faq";
import ContactForm from "../../shared/ContactForm";
import RatingCom from "../../shared/RatingCom";
import ServiceAreas from "../../shared/ServiceAreas";
import BookService from "../../shared/BookService";
import BrandContent from "../content";

export const Category = ({ data, paramData }) => {
  return (
    <div className="relative bg-white text-black">
      {/* Home Banner */}
      <Image
        src={data?.getBrand?.titleBackgroundImage}
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
      <BrandContent data={data?.getCategory} />

      {/* Rating */}
      <RatingCom data={data?.getBrand} />

      {/* FAQ */}
      <Accordian accData={data?.getCategory?.faqs} />

      {/* Book A service Today */}
      <BookService whatsAppNum={data?.getBrand?.contactNumber} />

      {/* Service Area */}
      <ServiceAreas data={data?.getAreasByCategory} paramData={paramData} />

      {/* Google map */}
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
    </div>
  );
};
