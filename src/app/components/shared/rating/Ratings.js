"use client";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Ratings = ({ data }) => {
  const [ratData, setRatData] = useState([]); // Initial value

  useEffect(() => {
    if (data?.getBrand?._id) {
      const ratingData = async () => {
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/get/ratings/${data?.getBrand?._id}`
        )
          .then((res) => res.json())
          .then((res) => {
            setRatData(res?.data);
          })
          .catch((err) => console.log(err));
      };
      ratingData();
    }
  }, [data?.getBrand?._id]);

  return (
    <div className="pt-5">
      <Link
        href={`${process.env.NEXT_PUBLIC_HYPER_TXT}/${data?.getBrand?.slug}`}
        className="flex justify-start ms-4"
      >
        <button
          type="button"
          className="py-3 ps-5 pe-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
        >
          &larr; Back
        </button>
      </Link>
      {ratData?.map((item, index) => (
        <div className="p-2 border-b" key={index}>
          <p className="flex items-center">
            <Rating
              style={{ maxWidth: 250, width: 120 }}
              value={item?.rating}
              readOnly
            />{" "}
            <span className="ms-2 text-black" style={{ fontSize: 12 }}>
              {format(new Date(item?.createdAt), "hh:mma dd-MM-yyyy")}
            </span>
          </p>
          <p className="text-black">{item?.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
