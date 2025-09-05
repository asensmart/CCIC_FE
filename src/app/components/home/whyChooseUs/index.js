import Image from "next/image";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import React from "react";
import whyChooseImg from "@/assets/images/whyChooseUs.webp";

const features = [
  {
    title: "Expert Technicians in Chennai",
    desc: "Our certified and experienced team specializes in TV repair, AC service, washing machine repair, and refrigerator repair for top brands like Samsung, LG, Panasonic, Mi, VU, TCL, Sony, Onida, Haier, and more.",
  },
  {
    title: "Fast & Same-Day Appliance Repair",
    desc: "We provide quick and dependable doorstep service in Chennai for all your TVs, ACs, refrigerators, and washing machines.",
  },
  {
    title: "100% Genuine Spare Parts",
    desc: "Every repair uses original spare parts to ensure long-lasting performance and high-quality service with warranty.",
  },
  {
    title: "Affordable & Transparent Pricing",
    desc: "Get reliable appliance repair in Chennai at fair prices with no hidden costs.",
  },
  {
    title: "Doorstep Service",
    desc: "Doorstep Service Across All Chennai Areas – We serve T. Nagar, Anna Nagar, Velachery, Tambaram, Adyar, Porur, and nearby areas. ",
  },
  {
    title: "24/7 Customer Support",
    desc: "Our dedicated team is available around the clock to make your appliance repair experience in Chennai smooth and hassle-free.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-4 pb-4 bg-white">
      <div className="mb-3">
        <h2 className="text-center text-3xl font-bold text-blue-600">
          Why Choose Us
        </h2>
        <p className="text-black text-center text-xl">
          Trusted Multi-Brand Home Appliance Repair in Chennai
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: image & Card - hidden on desktop */}
        <div className="lg:hidden">
          <div className="flex-1 flex flex-col items-center relative w-full">
            <Image
              src={whyChooseImg}
              alt="Office"
              width={500}
              height={350}
              className="rounded-lg object-cover w-full max-w-md"
              priority
            />
          </div>
        </div>
        {/* Left: Text & Features */}
        <div className="flex-1">
          {/* <a
            href="#why-choose-us"
            className="text-sm text-blue-600 underline mb-2 inline-block"
          >
            WHY CHOOSE US
          </a> */}
          <p className="text-gray-600 mb-6">
            When it comes to home appliance repair in Chennai, we are a reliable
            multi-brand service center providing professional and efficient
            solutions. Here’s what makes us the preferred choice for our
            customers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div>
                  <FaCheckCircle size={18} className="text-blue-500 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image & Card - hidden on mobile/tab view */}
        <div className="hidden lg:block">
          <div className="flex-1 flex flex-col items-center relative w-full">
            <Image
              src={whyChooseImg}
              alt="Office"
              width={500}
              height={350}
              className="rounded-lg object-cover w-full max-w-md"
              priority
            />
            <div
              className="absolute top-[5%] left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2"
              style={{ minWidth: "300px" }}
            >
              <FaUserTie className="text-blue-600 text-xl" />
              <span className="font-semibold text-gray-800 text-sm">
                We&apos;re Best Technician in Chennai
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
