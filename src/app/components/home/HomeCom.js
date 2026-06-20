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
import ContactForm from "../shared/ContactForm.js";
import HomeParaContent from "./HomeParaContent.js";

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
      {/* <ContactForm Title={"Test"} BrandName={"Test Brand"} /> */}

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

      {/* Home Para Content */}
      <HomeParaContent />

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
      question: "Which is the best TV service center in Chennai?",
      answer:
        "AM Service Solution is a trusted TV service center in Chennai, providing professional repair services for all major TV brands. We offer doorstep service, experienced technicians, genuine spare parts, affordable pricing, and warranty-supported repairs.",
    },
    {
      question: "Where can I find doorstep TV repair service in Chennai?",
      answer:
        "You can book a doorstep TV repair service with AM Service Solution anywhere in Chennai. Our technicians visit your home, diagnose the issue, and provide quick repair solutions without the need to transport your TV.",
    },
    {
      question: "How do I book a TV repair service in Chennai?",
      answer:
        "Booking a TV repair service is simple. You can call us, send a WhatsApp message, or submit a service request through our website. Our customer support team will schedule a technician visit at your convenient time.",
    },
    {
      question: "Do you use genuine spare parts for TV repairs?",
      answer:
        "Yes. We use 100% genuine and high-quality compatible spare parts for TV repairs, including LED backlights, power boards, motherboards, display panels, speakers, and other components to ensure long-lasting performance.",
    },
    {
      question: "Do you repair all TV brands in Chennai?",
      answer:
        "Yes. We provide multi-brand TV repair services for Samsung, LG, Sony, Panasonic, Mi, OnePlus, TCL, VU, Haier, Toshiba, Onida, Philips, Acer, Motorola, Realme, Kodak, and many other TV brands.",
    },
    {
      question: "Do you provide warranty on TV repairs?",
      answer:
        "Yes. Most TV repair services come with a service warranty. The warranty period depends on the type of repair and spare parts replaced. Our team will provide warranty details before completing the service.",
    },
    {
      question: "How quickly can I get my TV repaired in Chennai?",
      answer:
        "We offer same-day TV repair service in most areas of Chennai. Depending on the issue and spare part availability, many repairs can be completed during the first visit itself.",
    },
    {
      question: "How much does TV repair service cost in Chennai?",
      answer:
        "The cost depends on the TV brand, screen size, and fault. Common issues such as backlight replacement, motherboard repair, power board repair, sound problems, and display issues are charged based on the diagnosis. We provide transparent pricing with no hidden charges.",
    },
    {
      question: "What TV problems do you repair?",
      answer:
        "We repair all types of TV problems for LED, LCD, Smart TV, Android TV, OLED, and QLED televisions. Our experienced technicians can fix issues such as no power, no display, dark screen, backlight failure, vertical or horizontal lines on the screen, sound problems, motherboard faults, power board failures, HDMI port issues, Wi-Fi connectivity problems, Smart TV software errors, screen flickering, and TVs that restart automatically. We provide accurate fault diagnosis and reliable repair solutions using genuine spare parts to restore your TV's performance.",
    },
    {
      question: "Why should I choose AM Service Solution for TV repair in Chennai?",
      answer:
        "AM Service Solution is one of the trusted TV repair service providers in Chennai, offering professional doorstep repair services for all major TV brands. Our skilled technicians have extensive experience in diagnosing and repairing LED, LCD, Smart, Android, OLED, and QLED TVs. We focus on providing fast response times, same-day service support, genuine spare parts, transparent pricing, and warranty-backed repairs. With a commitment to quality workmanship and customer satisfaction, we ensure reliable and cost-effective TV repair solutions that help extend the life of your television.",
    },
    {
      question: "Do you provide TV repair services across all areas of Chennai?",
      answer:
        "Yes, AM Service Solution provides doorstep TV repair services across Chennai and surrounding areas. Our service coverage includes Anna Nagar, Adyar, Alwarpet, Ambattur, Aminjikarai, Arumbakkam, Ashok Nagar, Avadi, Ayanavaram, Besant Nagar, Choolaimedu, Chromepet, Ekkaduthangal, Guindy, Injambakkam, Iyyappanthangal, Kattupakkam, Kelambakkam, Kodambakkam, Kolathur, Korattur, Kottivakkam, Kovilambakkam, Kundrathur, Madambakkam, Madhavaram, Madipakkam, Maduravoyal, Mambalam, Manali, Medavakkam, Mogappair, MRC Nagar, Mudichur, Mylapore, Nandanam, Nanganallur, Neelankarai, Nolambur, OMR, ECR, Padi, Pallavaram, Pallikaranai, Perambur, Perungalathur, Perungudi, Poonamallee, Porur, Purasawalkam, Ramapuram, Red Hills, Royapettah, Royapuram, Saidapet, Saligramam, Selaiyur, Sholinganallur, Siruseri, Sowcarpet, T Nagar, Tambaram, Teynampet, Thirumangalam, Thirumullaivoyal, Thiruvanmiyur, Thoraipakkam, Tiruvottiyur, Triplicane, Vadapalani, Valasaravakkam, Vanagaram, Velachery, Vepery, Villivakkam, Virugambakkam, West Mambalam, West Tambaram, Navalur, Semmencherry, Karapakkam, Urapakkam, Maraimalai Nagar, Puzhal, Manapakkam, Gerugambakkam, Pattabiram, Tondiarpet, Washermanpet, Ennore, Mugalivakkam, Hasthinapuram, Sembakkam, Pozhichalur, Chitlapakkam, Santhome, Foreshore Estate, Adambakkam, Taramani, Periyar Nagar, Otteri, Kellys, Shenoy Nagar, and George Town. Whether you need LED TV repair, Smart TV repair, Android TV service, backlight replacement, motherboard repair, display issue fixing, or screen-related troubleshooting, our technicians can provide fast and reliable doorstep service throughout Chennai.",
    },
    {
      question: "What are the most common TV problems that require professional repair?",
      answer:
        "Some of the most common TV problems include a TV not turning on, no picture but sound, no sound but picture, dark or dim display, backlight failure, vertical or horizontal lines on the screen, screen flickering, color distortion, HDMI port issues, Smart TV connectivity problems, Wi-Fi not working, automatic restarting, remote control not responding, and display panel issues. These problems can occur due to faulty backlights, damaged power boards, motherboard failures, software errors, or internal component defects. Our experienced technicians can quickly diagnose the issue and provide the appropriate repair solution to restore your TV's performance and viewing quality.",
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
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx
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
