import React from "react";
import MainNavbar from "../components/shared/Nav/Navbar";
import ContactUsPage from "../components/contact";
import axios from "axios";

const ContactUs = async () => {
  const brandData = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));
  return (
    <>
      <MainNavbar brandData={brandData} isMainHome={true} />
      <ContactUsPage />
    </>
  );
};

export default ContactUs;
