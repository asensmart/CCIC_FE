"use client";
import { Icons } from "@/assets/icons/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HomeAbout from "./HomeAbout.js";
import OurServices from "./ourServices/index.js";
import Link from "next/link";
import homeBanner from "./../../../assets/images/Homebanner.jpg";
import homeBannerMobile from "./../../../assets/images/HomebannerMobile.jpg";
import about1 from "./../../../assets/images/About1.jpg";
import about2 from "./../../../assets/images/About2.jpg";
import about3 from "./../../../assets/images/About3.jpg";
import about4 from "./../../../assets/images/About4.jpg";
import MainNavbar from "../shared/Nav/Navbar.js";
import axios from "axios";

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
      <div
        className="relative w-full h-[600px] lg:h-[600px] flex flex-col justify-center"
        // style={{
        //   backgroundImage: `url(${homeBanner.src})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Image
          src={window.outerWidth <= 769 ? homeBannerMobile : homeBanner}
          alt="banner"
          fill
          priority
          className="object-cover w-full h-auto justify-self-end"
          // sizes="(max-width: 768px) 100vw, 1200px"
          style={{ zIndex: 1 }}
        />
        {/* Overlay color */}
        <div
          className="absolute inset-0 opacity-[0.9] md:opacity-[0.8]"
          style={{
            backgroundColor: "#3d3d3d",
            // opacity: 0.8,
            zIndex: 20,
            pointerEvents: "visibleFill",
          }}
        />
        {/* Content */}
        <div className="text-white text-center pt-11 md:pt-8 px-4 z-30">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Home Appliance Repair Service in Chennai
          </h1>
          <p>
            TV, AC, Washing Machine & Refrigerator Repair - Same Day Doorstep
            Service
          </p>
        </div>

        {/* Overlay Form */}
        <div className="flex items-center justify-center z-30">
          <form className="shadow-lg px-6 py-4 w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              Book a Service
            </h2>
            <div className="mb-3">
              {/* <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Appoinment Booking */}
        <div className="z-30">
          <p className="text-base text-center text-white font-bold mb-2">
            <b>To Book Your Appointment</b>
          </p>
          <Link href={`tel:7550052019`}>
            <div className="flex items-center text-white gap-1 justify-center cursor-pointer animate-bounce text-2xl">
              <span>Call</span> <Icons.phone size={20} />
              <span className="font-bold">7550052019</span>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-1 py-12 px-2 bg-white text-black">
        {titleData.map((data) => (
          <div
            key={data?.id}
            className="flex items-center justify-start lg:mb-0 sm:mb-4 gap-3"
          >
            <div className="p-3 rounded bg-mailHead">{data?.icon}</div>
            <div className="">
              <div className="font-bold text-xl">{data?.title}</div>
              <div>{data?.description}</div>
            </div>
          </div>
        ))}
      </div> */}

      {/* About Us */}
      <HomeAbout />
      
      <h1 className="text-center text-4xl text-blue-600 font-bold">
        <span className="text-black text-center">Our</span> Services
      </h1>
      <p className="text-black text-center">What We Offer</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-8 px-4">
        {serviceData?.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm"
          >
            <Image
              src={service?.img}
              alt="Service Card"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black">
                {service?.title}
              </h3>
              <p className="text-gray-700">{service?.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Services */}
      <OurServices brand={data} />

      {/* // Place this component here: */}
      <AccordionFAQ />
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
