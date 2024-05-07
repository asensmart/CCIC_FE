"use client";
import axios from "axios";
import React, { useRef, useState } from "react";

const ContactForm = () => {
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
          console.log("result --->", result?.data?.message);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("error.text --->", error.text);
          alert("Message Not Sent!");
        }
      );
  };
  return (
    <form
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
    </form>
  );
};

export default ContactForm;
