import Image from "next/image";
import React from "react";
import testImg from "@/assets/images/aboutimg.jpg";
import { FaBolt } from "@react-icons/all-files/fa/FaBolt";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { FaCogs } from "@react-icons/all-files/fa/FaCogs";
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaHeadset } from "@react-icons/all-files/fa/FaHeadset";
// import {
//   FaBolt,
//   FaUserTie,
//   FaCogs,
//   FaMoneyCheckAlt,
//   FaMapMarkerAlt,
//   FaHeadset,
// } from "react-icons/fa";

const WhyChooseUs = () => {
  const icons = [
    <FaBolt key="bolt" size={48} color="#1a237e" />,
    <FaUserTie key="userTie" size={48} color="#1a237e" />,
    <FaCogs key="cogs" size={48} color="#1a237e" />,
    <FaMoneyCheckAlt key="moneyCheckAlt" size={48} color="#1a237e" />,
    <FaMapMarkerAlt key="mapMarkerAlt" size={48} color="#1a237e" />,
    <FaHeadset key="headset" size={48} color="#1a237e" />,
  ];

  const features = [
    {
      title: "Fast & Same-Day Appliance Repair",
      desc: "Quick and dependable doorstep service for all your TVs, ACs, refrigerators, and washing machines.",
      img: testImg,
    },
    {
      title: "Expert Technicians in Chennai",
      desc: "Certified and experienced team specializing in TV, AC, washing machine, and refrigerator repair for top brands like Samsung, LG, Panasonic, Mi, VU, TCL, Sony, Onida, Haier, and more.",
      img: null,
    },
    {
      title: "100% Genuine Spare Parts",
      desc: "Every repair uses original spare parts for long-lasting performance and warranty.",
      img: testImg,
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "Reliable appliance repair at fair prices with no hidden costs.",
      img: null,
    },
    {
      title: "Doorstep Service Across All Chennai Areas",
      desc: "Serving T. Nagar, Anna Nagar, Velachery, Tambaram, Adyar, Porur, and nearby areas.",
      img: testImg,
    },
    {
      title: "24/7 Customer Support",
      desc: "Dedicated team available around the clock for a smooth and hassle-free experience.",
      img: null,
    },
  ];

  return (
    <section
      className="font-sans px-4"
      //   style={{
      //     padding: "1rem 1rem",
      //     // maxWidth: "900px",
      //     margin: "0 auto",
      //     fontFamily: "Segoe UI, Arial, sans-serif",
      //   }}
    >
      <h2
        className="md:text-2xl text-xl font-bold text-center mb-8 text-blue-600"
        // style={{
        //   color: "#1a237e",
        //   fontWeight: "700",
        //   marginBottom: "2rem",
        //   fontSize: "2rem",
        //   textAlign: "center",
        // }}
      >
        Why Choose Us - Trusted Multi-Brand Home Appliance Repair in Chennai
      </h2>
      <div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-slate-200"
            style={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
              //   background: "#f5f7fa",
              borderRadius: "1rem",
              padding: "1.5rem 1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                flex: "0 0 60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icons[idx]}
            </div>
            <div style={{ flex: "1 1 0" }}>
              <h3
                style={{
                  color: "#1a237e",
                  fontWeight: "600",
                  marginBottom: "0.7rem",
                  fontSize: "1.2rem",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#333", fontSize: "1rem", marginBottom: 0 }}>
                {feature.desc}
              </p>
            </div>
            {/* {feature.img && (
              <div style={{ flex: "0 0 120px", minWidth: "120px" }}>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "0.7rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                />
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
