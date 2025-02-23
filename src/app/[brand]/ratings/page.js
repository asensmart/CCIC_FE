import Ratings from "@/app/components/shared/rating/Ratings";
import axios from "axios";
import React from "react";

const page = async ({ params }) => {
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

  const data = {
    getBrand: getBrand,
  };

  return (
    <div className="bg-white">
      <Ratings data={data} />
    </div>
  );
};

export default page;
