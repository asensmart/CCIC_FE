"use client";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const HomeRatings = ({ data }) => {
  const [ratData, setRatData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setRatData(data);
    } else if (data && typeof data === "object" && "data" in data && Array.isArray(data.data)) {
      setRatData(data.data);
    } else {
      setRatData([]);
    }
  }, [data]);

  return (
    <div className="pt-5 bg-white">
      <Link
        href={`/`}
        className="flex justify-start ms-4"
      >
        <button
          type="button"
          className="py-3 ps-5 pe-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
        >
          &larr; Back
        </button>
      </Link>
      {ratData && ratData.length > 0 ? (
        ratData.map((item, index) => (
          <div className="p-2 border-b" key={item?._id || index}>
            <p className="flex items-center">
              <Rating
                style={{ maxWidth: 250, width: 120 }}
                value={item?.rating || 0}
                readOnly
              />
              <span className="ms-2 text-black" style={{ fontSize: 12 }}>
                {item?.createdAt
                  ? format(new Date(item.createdAt), "hh:mma dd-MM-yyyy")
                  : ""}
              </span>
            </p>
            <p className="text-black">{item?.comment}</p>
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">No ratings found.</div>
      )}
    </div>
  );
};

export default HomeRatings;
