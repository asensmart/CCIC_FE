"use client";
import { Icons } from "@/assets/icons/icons";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HomeAbout from "./HomeAbout.js";
import OurServices from "./ourServices/index.js";
import Link from "next/link";
import homeBanner from "./../../../assets/images/Homebanner.png";
import MainNavbar from "../shared/Nav/Navbar.js";
import axios from "axios";

const HomeCom = () => {
  const titleData = [
    {
      id: 1,
      title: "Expert Technicians",
      description: "Our engineers are skilled to repair and Service",
      icon: <Icons.userIcon size={48} color="#F86E4E" />,
    },
    {
      id: 2,
      title: "Fast Problem Solving",
      description: "Carry same day visit you will find Technical Support 24/7",
      icon: <Icons.settings size={48} color="#F86E4E" />,
    },
    {
      id: 3,
      title: "Innovative Products",
      description:
        'We Create innovative products and back them with "customer care Chennai',
      icon: <Icons.navigation size={48} color="#F86E4E" />,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
      .then((res) => {
        // console.log("brandData --->", res?.data?.data);
        setData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white">
      <MainNavbar brandData={data} />

      {/* Home Banner */}
      <Image
        src={homeBanner}
        alt="banner"
        // className="dark:invert"
        className="object-center h-32 md:h-[100%] w-[100%]"
        width={0}
        height={0}
        priority
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-1 py-12 px-2 bg-white text-black">
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
      </div>
      {/* About Us */}
      <HomeAbout />
      {/* Our Services */}
      <OurServices brand={data} />

      <div className="text-black px-4">
        <h2 className="font-bold text-xl">
          Why Choose CustomerCareInChennai.com for TV Repair?
        </h2>
        <section>
          <ul className="list-disc pl-5">
            <li>Verified Technicians – Trusted TV specialists only</li>
            <li>Doorstep TV Service – Quick and safe home visits</li>
            <li>Affordable Prices – No hidden charges</li>
            <li>Same-Day Repairs Available</li>
          </ul>
        </section>
        <br />
        <br />
        <h2 className="font-bold text-xl">
          Contact Us for Immediate TV Repair Support
        </h2>
        <section>
          <p>
            Need quick help with your TV? Call us or use the online form to book
            a service request. We’ll connect you with the best TV service expert
            near you in Chennai.
          </p>
        </section>
      </div>
      <br />
      <br />
      <div className="px-4 mb-4">
        <h2 className="text-center text-4xl text-orangeText font-bold">FAQs</h2>
        <section>
          <ul class="list-decimal list-inside space-y-4 text-gray-800">
            <li>
              <strong>Do you provide TV repair at home in Chennai?</strong>
              <br />
              Yes, we send trusted technicians right to your doorstep for quick
              and safe TV repairs.
            </li>

            <li>
              <strong>What brands of TVs do you repair?</strong>
              <br />
              We repair all major brands like LG, TCL, Samsung, Panasonic, MI,
              Vu, Sony, Toshiba, Hisense, OnePlus, Haier, BPL, Onida, Redmi.
            </li>

            <li>
              <strong>How do I book a service?</strong>
              <br />
              Booking is simple! Just call us or fill out the form on our
              website — our expert technician will arrive at your doorstep on
              time for a hassle-free service.
            </li>

            <li>
              <strong>Is the repair cost affordable?</strong>
              <br />
              Yes, we offer clear pricing with no hidden charges — quality
              service at fair rates.
            </li>

            <li>
              <strong>
                Do you provide TV wall mounting or installation services?
              </strong>
              <br />
              Yes, we offer TV wall mounting, installation, and uninstallation
              services all across Chennai. Our experts ensure safe setup for
              LED, LCD, and Smart TVs of all sizes at your preferred time.
            </li>
          </ul>
        </section>
      </div>

      {/* Google map */}
      <div className="px-8 pb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.873167427027!2d80.25033647457748!3d13.107220411891435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265be4ae880e3%3A0xf80ff8e6ef0f422b!2sCustomer%20Care%20Chennai!5e0!3m2!1sen!2sin!4v1708047958396!5m2!1sen!2sin"
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
          <div className="fixed bottom-24 right-3 text-white p-4 bg-blue-500 rounded-full">
            <Icons.phone size={24} />
          </div>
        </Link>
        <Link href={`https://wa.me/7550052019`}>
          <div className="fixed bottom-4 right-3 text-green-400 p-4 bg-sky-800 rounded-full">
            <Icons.whatsApp size={28} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeCom;
