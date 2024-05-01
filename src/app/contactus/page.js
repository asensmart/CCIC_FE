import React from "react";
import MainNavbar from "../components/shared/Nav/Navbar";
import ContactUsPage from "../components/contact";

const ContactUs = async () => {
  const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
  return (
    <>
      <MainNavbar brandData={brandData} />
      <ContactUsPage />
    </>
  );
};

export default ContactUs;
