"use client";
import { Rating } from "@smastrom/react-rating";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
import Ratings from "./rating/Ratings";
import Link from "next/link";

const RatingCom = ({ data }) => {
  console.log("rating data ==>", data);

  const [rating, setRating] = useState(5); // Initial value
  const [comment, setComment] = useState(""); // Initial value
  const [ratData, setRatData] = useState([]); // Initial value
  const [reFetch, setReFetch] = useState(false); // Initial value

  useEffect(() => {
    if (data?._id) {
      const ratingData = async () => {
        // console.log("enter fun --->", data?._id);
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/get/ratings/${data?._id}`
        )
          .then((res) => res.json())
          .then((res) => {
            // console.log("res data --->", res?.data);
            setRatData(res?.data);
          })
          .catch((err) => console.log(err));
      };
      ratingData();
    }
  }, [data?._id, reFetch]);

  const ratingHandler = async (id, rating, comment) => {
    const postData = {
      rating: rating,
      comment: comment,
      brandId: id,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/post/postRating`, postData)
      .then((res) => {
        setReFetch(!reFetch);
        setComment("");
        setRating(5);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-2">
      <section className="">
        <h2 className="text-2xl text-center font-bold mt-3">
          Rating and comments
        </h2>
        <div className="mb-3">
          <div className="flex items-center">
            <Rating
              style={{ maxWidth: 200 }}
              value={rating}
              onChange={setRating}
            />
            <span className="ms-3">{ratData?.length} Ratings</span>
          </div>
          <textarea
            className="p-2 w-[100%] textAreaBox"
            rows="1"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
              onClick={() => ratingHandler(data?._id, rating, comment)}
            >
              Add comment
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          {ratData?.slice(0, 3)?.map((item, index) => (
            <div className="p-2 border-b" key={index}>
              <p className="flex items-center">
                <Rating
                  style={{ maxWidth: 250, width: 120 }}
                  value={item?.rating}
                  readOnly
                />{" "}
                <span className="ms-2" style={{ fontSize: 12 }}>
                  {format(new Date(item?.createdAt), "hh:mma dd-MM-yyyy")}
                </span>
              </p>
              <p>{item?.comment}</p>
            </div>
          ))}

          <Link
            href={`${process.env.NEXT_PUBLIC_HYPER_TXT}/${data?.slug}/ratings`}
            className="flex justify-center m-3"
            style={{
              visibility: ratData?.length < 3 ? "hidden" : "visible",
            }}
          >
            <button
              type="button"
              className="py-3 px-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
            >
              See All Review
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RatingCom;
