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
      <MainNavbar brandData={data} />
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
      question: "Do you provide TV repair at home in Chennai?",
      answer:
        "Yes, we send trusted technicians right to your doorstep for quick and safe TV repairs.",
    },
    {
      question: "What brands of TVs do you repair?",
      answer:
        "We repair all major brands like LG, TCL, Samsung, Panasonic, MI, Vu, Sony, Toshiba, Hisense, OnePlus, Haier, BPL, Onida, Redmi.",
    },
    {
      question: "How do I book a service?",
      answer:
        "Booking is simple! Just call us or fill out the form on our website — our expert technician will arrive at your doorstep on time for a hassle-free service.",
    },
    {
      question: "Is the repair cost affordable?",
      answer:
        "Yes, we offer clear pricing with no hidden charges — quality service at fair rates.",
    },
    {
      question: "Do you provide TV wall mounting or installation services?",
      answer:
        "Yes, we offer TV wall mounting, installation, and uninstallation services all across Chennai. Our experts ensure safe setup for LED, LCD, and Smart TVs of all sizes at your preferred time.",
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
                    ? "max-h-40 opacity-100 mt-2"
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
