import ContactUsPage from "@/app/components/contact";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

const BrandContactUs = async ({ params }) => {
  const getBrand = await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/brand`, {
      brandName: params?.brand,
    })
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  if (getBrand?.length == 0) notFound();

  return (
    <div>
      <ContactUsPage />
    </div>
  );
};

export default BrandContactUs;
