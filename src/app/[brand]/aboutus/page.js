import AboutContent from "@/app/components/about";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";

const BrandAboutUs = async ({ params }) => {
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

  console.log(params);
  return (
    <div>
      <AboutContent name={params?.brand} isHome={true} />
    </div>
  );
};

export default BrandAboutUs;
