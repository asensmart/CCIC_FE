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
        brand: "home",
      })
      .then(
        (result) => {
          setNumber("");
          setEmail("");
          setName("");
          setmessage("");
          // console.log("result --->", result?.data?.message);
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
      <div className=" font-bold pt-4 text-black">
        <p className="text-black mr-5 text-right text-xl lg:text-2xl"><Link href={`/ratings`}><span className="flex justify-end items-center">(<span className="hover:underline">Ratings 4.9</span> <Icons.star className="text-yellow-400" /> )</span> </Link></p>
        <p className="text-[2rem] text-center">{"TV Repair Service Center Chennai"}</p>
      </div>

      {/* Phone Button */}
      <div className="flex justify-center mt-6">
        <a
          href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}
          className="bg-black hover:bg-gray-800 transition-color text-white px-8 py-3 font-bold rounded-full flex items-center gap-3 transition-colors duration-200 shadow-lg"
        >
          <Icons.phone className="text-white text-2xl" />
          <span className="text-white font-bold text-lg">
            {process.env.NEXT_PUBLIC_PHONE_NUM}
          </span>
        </a>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative mx-3 md:mx-40 lg:m-0 lg:mt-40 lg:absolute rounded-lg shadow-md lg:top-2 lg:left-4 p-6 text-black"
      >
        <div className="flex flex-col">
          <div className="text-3xl font-bold text-center text-black mb-2" >
            Book Service
          </div>
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-black p-2 my-2 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone*"
            title="Please enter exactly 10 digits"
            name="phone"
            maxLength="10"
            value={number}
            onChange={(e) => checkInput(e)}
            className="border border-black p-2 my-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black p-2 my-2 rounded-lg"
          />
          <textarea
            placeholder="Enter Message*"
            name="message"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            value={message}
            required
            className="border border-black p-2 my-2 rounded-lg resize-none"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Info Section */}
      <div className="px-4 pt-8">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Contact Info</h2>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          {/* Available timing card*/}
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-black">Working Hours</h3>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}><Icons.phone className="text-black text-2xl" /></a>
            </div>
            <p className="text-black mb-4">Available: 8 AM to 8 PM (All 7 days)</p>
            <button className="w-full bg-black text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              View more
            </button>
          </div>

          {/* 24/7 Phone Support Card */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-black">Emergency Service 24/7</h3>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}><Icons.whatsApp className="text-black text-3xl" /></a>

            </div>
            <p className="text-black mb-4">Available: 24/7 WhatsApp</p>
            <button className="w-full bg-black text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              View more
            </button>
          </div>
        </div>
      </div>


      {/* <form
        ref={form}
        onSubmit={sendEmail}
        className="relative mx-3 md:mx-40 mt-3 lg:m-0 lg:absolute rounded-lg shadow-lg lg:top-2 lg:left-4 p-6 bg-blue-300"
      >
        <div className="flex flex-col">
          <div className="text-center text-xl font-bold underline">
            Contact Us
          </div>
          <input
            type="text"
            placeholder="Name*"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-black p-2 my-2 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone*"
            title="Please enter exactly 10 digits"
            name="phone"
            maxLength="10"
            value={number}
            onChange={(e) => checkInput(e)}
            className="border border-black p-2 my-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black p-2 my-2 rounded-lg"
          />
          <textarea
            placeholder="Enter Message*"
            name="message"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
            value={message}
            required
            className="border border-black p-2 my-2 rounded-lg resize-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-lg "
          >
            Send Message
          </button>
        </div>
      </form> */}
    </>

    // <>
    //   <div
    //     className="relative w-full h-[700px] lg:h-[600px] flex flex-col justify-center"
    //   // style={{
    //   //   backgroundImage: `url(${homeBanner.src})`,
    //   //   backgroundSize: "cover",
    //   //   backgroundPosition: "center",
    //   //   backgroundRepeat: "no-repeat",
    //   // }}
    //   >
    //     <Image
    //       src={isMobile ? homeBannerMobile : homeBanner}
    //       alt="banner"
    //       fill
    //       priority
    //       className="object-cover w-full h-auto justify-self-end"
    //       // sizes="(max-width: 768px) 100vw, 1200px"
    //       style={{ zIndex: 1 }}
    //     />
    //     {/* Overlay color */}
    //     <div
    //       className="absolute inset-0 opacity-[0.9] md:opacity-[0.8]"
    //       style={{
    //         backgroundColor: "#3d3d3d",
    //         // opacity: 0.8,
    //         zIndex: 20,
    //         pointerEvents: "visibleFill",
    //       }}
    //     />
    //     {/* Content */}
    //     <div className="text-white text-center pt-11 md:pt-8 px-4 z-30">
    //       <h1 className="text-2xl md:text-4xl font-extrabold">
    //         Fast, Affordable & Trusted TV Service Center in Chennai
    //       </h1>
    //       <p>
    //         TV, AC, Washing Machine & Refrigerator Repair - Same Day Doorstep
    //         Service
    //       </p>
    //     </div>

    //     {/* Overlay Form */}
    //     <div className="flex items-center justify-center z-30">
    //       <form
    //         ref={form}
    //         onSubmit={sendEmail}
    //         className="shadow-lg px-6 py-4 w-full max-w-md mx-4"
    //       >
    //         <h2 className="text-2xl font-bold mb-4 text-center text-white">
    //           Book a Service
    //         </h2>
    //         <div className="mb-3">
    //           {/* <label
    //             htmlFor="name"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Name
    //           </label> */}
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             placeholder="Name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
    //             required
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
    //             required
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <input
    //             type="tel"
    //             id="phone"
    //             title="Please enter exactly 10 digits"
    //             name="phone"
    //             placeholder="Phone"
    //             maxLength="10"
    //             value={number}
    //             onChange={(e) => checkInput(e)}
    //             className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
    //             required
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <textarea
    //             cols="30"
    //             rows="3"
    //             id="message"
    //             name="message"
    //             placeholder="Enter Message*"
    //             onChange={(e) => {
    //               setmessage(e.target.value);
    //             }}
    //             value={message}
    //             className="mt-1 p-2 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-600 focus:ring-blue-600"
    //             required
    //           ></textarea>
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 transition"
    //         >
    //           Submit
    //         </button>
    //       </form>
    //     </div>

    //     {/* Appoinment Booking */}
    //     <div className="z-30">
    //       <p className="text-base text-center text-white font-bold mb-2">
    //         <b>To Book Your Appointment</b>
    //       </p>
    //       <Link href={`tel:7550052019`}>
    //         <div className="flex items-center text-white gap-1 justify-center cursor-pointer animate-bounce text-2xl">
    //           <span>Call</span> <Icons.phone size={20} />
    //           <span className="font-bold">7550052019</span>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </>
  );
};

export default BannerContent;
