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

function AccordionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which is the best home appliance service center in Chennai?",
      answer:
        "We are one of the trusted and leading home appliance service centers in Chennai, specializing in repair and maintenance of TVs, washing machines, refrigerators, air conditioners, and microwave ovens. Our certified technicians handle all major brands and provide reliable doorstep service at affordable prices. Customers choose us for our quick response, genuine spare parts, and transparent service process.",
    },
    {
      question: "Where can I find doorstep TV repair service in Chennai?",
      answer:
        "You can find professional doorstep TV repair service with us anywhere in Chennai. Our experts repair LED, LCD, Plasma, Smart TVs, and 4K Ultra HD models. Instead of carrying your TV to a shop, our technician visits your home, diagnoses the issue, and provides same-day service with original parts for long-lasting performance.",
    },
    {
      question: "How do I book a home appliance repair service in Chennai?",
      answer:
        "Service booking with us takes just a few minutes. You can call our dedicated customer care number or fill out the online service request form. Once booked, our support team assigns a technician near your location who will arrive at your doorstep for a free inspection and provide a cost estimate before starting the repair.",
    },
    {
      question:
        "Can I get 100% genuine spare parts for appliance and TV repairs in Chennai?",
      answer:
        "Yes, we always use 100% genuine spare parts for every repair. Whether it is a TV panel replacement, refrigerator compressor, washing machine motor, or AC gas refilling, we ensure original components are installed. This guarantees durability, smooth functioning, and protects your appliance warranty.",
    },
    {
      question: "Who provides multi-brand appliance repair in Chennai?",
      answer:
        "We provide expert multi-brand repair services in Chennai for all popular brands like Samsung, LG, Sony, Panasonic, Whirlpool, IFB, Haier, Godrej, TCL, VU, Mi, and OnePlus. Our technicians are trained across different models and technologies, from basic LED TVs to advanced OLEDs and inverter washing machines, ensuring complete brand-specific solutions.",
    },
    {
      question: "Do appliance repair services in Chennai provide warranty?",
      answer:
        "Yes, every repair service we offer comes with a service warranty. Depending on the appliance and the repair type, we provide warranty on spare parts as well as on the service work done. This ensures our customers enjoy peace of mind, knowing that their repaired TV, washing machine, or refrigerator is covered.",
    },
    {
      question:
        "How fast can I get same-day TV or appliance repair in Chennai?",
      answer:
        "In most cases, we provide same-day repair service across all Chennai locations. Whether you need TV service in Porur, AC repair in Velachery, or refrigerator service in T. Nagar, our nearest technician will be dispatched to your address. Same-day repair is available for common issues like TV display problems, washing machine drum not spinning, refrigerator cooling issues, and AC water leakage.",
    },
    {
      question: "How much does TV repair service include in Chennai?",
      answer:
        "TV repair service in Chennai includes complete inspection, diagnosis, and repair at your doorstep. Our technicians handle issues such as blank screen, no sound, poor picture quality, motherboard problems, and connectivity errors. We provide service for LED, LCD, OLED, Plasma, and Smart TVs across all major brands with original spare parts and service warranty.",
    },
    {
      question:
        "Do you repair all TV brands like Samsung, LG, Sony, and Panasonic in Chennai?",
      answer:
        "Yes, we repair all major TV brands including Samsung, LG, Sony, Panasonic, TCL, VU, Mi, Philips, OnePlus, and Haier. Whether it is a Smart TV, OLED, or 4K Ultra HD model, our technicians provide specialized repair solutions at your doorstep. We also stock brand-specific spare parts to ensure original replacements and long-lasting performance.",
    },
    {
      question:
        "Why should I choose your service center for appliance repair in Chennai?",
      answer:
        "Customers prefer our service center because we provide professional multi-brand repair at fair prices with genuine spare parts. Our technicians are experienced, our customer care is available 24/7, and we offer doorstep service across Chennai. With same-day repair options, service warranty, and transparent process, we make appliance repair simple, reliable, and hassle-free.",
    },
  ];
  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="px-4 mb-4">
      <h2 className="text-center text-4xl text-blue-600 font-bold">FAQs</h2>
      <section>
        <ul className="space-y-4 text-gray-800">
          {faqs.map((faq, idx) => (
            <li key={idx} className="border-b pb-2">
              <button
                type="button"
                className="w-full text-left font-semibold py-2 focus:outline-none flex justify-between items-center"
                onClick={() => toggle(idx)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === idx ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "max-h-full opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                } text-gray-700`}
                style={{
                  transitionProperty: "max-height, opacity, margin-top",
                }}
              >
                {openIndex === idx && <div>{faq.answer}</div>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default HomeCom;
