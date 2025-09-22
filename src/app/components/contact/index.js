"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import Image from "next/image";
import contactBanner from "@/assets/images/HomeContactBanner 22-09.jpg";
import contactBannerMob from "@/assets/images/HomeContactBanner 22-09.jpg";
import contactImg from "@/assets/images/contactSideImg.jpg";

const ContactUsPage = () => {
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
    <div className="bg-white">
      <Image
        alt="about banner image"
        className="hidden lg:block w-[100%]"
        src={contactBanner}
      />

      <Image
        alt="about banner image"
        className="object-cover block lg:hidden w-[100%]"
        src={contactBannerMob}
      />
      <div className="mt-4">
        <h1 className="text-orangeText text-4xl font-bold text-center">
          HAVE SOME QUESTION?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] ">
          <div className="flex justify-center">
            <Image src={contactImg} alt="about image" width={500} />
          </div>
          <div className="text-black p-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative lg:mx-28 md:mx-3 mx-1 mt-3 rounded-lg p-6"
            >
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name*"
                  name="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="border border-borderClr p-2 my-2 rounded-lg"
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone*"
                  title="Please enter exactly 10 digits"
                  name="phone"
                  maxLength="10"
                  value={number}
                  onChange={(e) => checkInput(e)}
                  className="border border-borderClr p-2 my-2 rounded-lg"
                />
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-borderClr p-2 my-2 rounded-lg"
                />
                <label>Message</label>

                <textarea
                  placeholder="Enter Message*"
                  name="message"
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  value={message}
                  required
                  className="border border-borderClr p-2 my-2 rounded-lg resize-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-lg "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
