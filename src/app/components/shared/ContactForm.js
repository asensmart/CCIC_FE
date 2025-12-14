"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { Icons } from "@/assets/icons/icons";

const ContactForm = ({ Title }) => {
  const form = useRef();
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
          // console.log("result --->", result?.data?.message);
          alert("Message Sent Successfully!");
        },
        (error) => {
          // console.log("error.text --->", error.text);
          alert("Message Not Sent!");
        }
      );
  };
  return (
    <>
      <div className="text-3xl font-bold text-center pt-4">{Title}</div>

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
        className="relative mx-3 md:mx-40 lg:m-0 lg:absolute rounded-lg shadow-md lg:top-2 lg:left-4 p-6"
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
  );
};

export default ContactForm;
