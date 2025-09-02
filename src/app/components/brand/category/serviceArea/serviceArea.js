"use client";
import Image from "next/image";
import { Accordian } from "../../../shared/Faq";
import ContactForm from "../../../shared/ContactForm";
import RatingCom from "../../../shared/RatingCom";
import ServiceAreas from "../../../shared/ServiceAreas";
import BookService from "../../../shared/BookService";
import BrandContent from "../../content";

export const ServiceAreaPage = ({ data, paramData }) => {
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

      {/* FAQ */}
      {data?.getServices?.enableFaq && (
        <Accordian accData={data?.getServices?.faqs} />
      )}

      {/* Book A service Today */}
      <BookService whatsAppNum={data?.getServices?.contactNumber} />

      {/* Service Area */}
      <ServiceAreas data={data?.getAreasByBrand} paramData={paramData} />

      {/* Google map */}
      {(() => {
        //   const gMap = `<iframe
        //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62215.613877026364!2d79.88701779142359!3d12.941372966841147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f2c66c981c67%3A0x2e697ce6d307cfbe!2sSriperumbudur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1756628408502!5m2!1sen!2sin"
        //   width="600"
        //   height="450"
        //   style="border:0;"
        //   allowfullscreen=""
        //   loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
        // ></iframe>`;
        const gMap = data?.getServices?.gMap;
        const match = gMap?.match(/src="([^"]+)"/);
        const srcValue = match ? match[1] : null;
        if (!srcValue) return null;
        return (
          <div className="px-8 pb-8">
            <iframe
              src={srcValue}
              width="100%"
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        );
      })()}
    </div>
  );
};
