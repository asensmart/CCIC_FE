"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import homeBanner from "@/assets/images/Homebanner.jpg";
import homeBannerMobile from "@/assets/images/HomebannerMobile.jpg";
import { Icons } from "@/assets/icons/icons";
import axios from "axios";

const BannerContent = () => {
  const form = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setNumber(onlyDigits);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/post/smtp/sendmail`, {
        name: name,
        email: email,
        number: number,
        message: message,
      })
      .then(
        (result) => {
          setNumber("");
          setEmail("");
          setName("");
          setmessage("");
          console.log("result --->", result?.data?.message);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("error.text --->", error.text);
          alert("Message Not Sent!");
        }
      );
  };

  useEffect(() => {
    // This runs only on the client
    setIsMobile(window.outerWidth <= 769);
  }, []);
  return (
    <>
      <div
        className="relative w-full h-[700px] lg:h-[600px] flex flex-col justify-center"
      // style={{
      //   backgroundImage: `url(${homeBanner.src})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
      >
        <Image
          src={isMobile ? homeBannerMobile : homeBanner}
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
            Fast, Affordable & Trusted TV Service Center in Chennai
          </h1>
          <p>
            TV, AC, Washing Machine & Refrigerator Repair - Same Day Doorstep
            Service
          </p>
        </div>

        {/* Overlay Form */}
        <div className="flex items-center justify-center z-30">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="shadow-lg px-6 py-4 w-full max-w-md mx-4"
          >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                title="Please enter exactly 10 digits"
                name="phone"
                placeholder="Phone"
                maxLength="10"
                value={number}
                onChange={(e) => checkInput(e)}
                className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                cols="30"
                rows="3"
                id="message"
                name="message"
                placeholder="Enter Message*"
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                value={message}
                className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                required
              ></textarea>
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
    </>
  );
};

export default BannerContent;
