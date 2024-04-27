"use client";
import { Icons } from "@/assets/icons/icons";
import autoprefixer from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";

export const Brand = ({ data }) => {
  // console.log("data getBrand --->", data.getBrand);
  // console.log("data getAreasByBrand --->", data.getAreasByBrand);

  return (
    <div className="bg-white text-black">
      {/* Home Banner */}
      <Image
        src={data?.getBrand?.titleBackgroundImage}
        alt="banner"
        // className="dark:invert"
        className="object-cover h-32 md:h-[100%] w-[100%]"
        width={600}
        height={0}
        priority
      />

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-center text-4xl font-bold text-[#F86E4E]">
          <span className="underline">
            {data?.getBrand?.brandName.toUpperCase()}
          </span>{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] py-5 px-2 bg-white">
          <div className="sm:mb-11 sm:flex sm:justify-center">
            <Image
              src={data?.getBrand?.sideThumbnail}
              alt="Brand Image"
              width={500}
              height={0}
              priority
            />
          </div>
          <div className="text-black p-2">
            <div
              dangerouslySetInnerHTML={{ __html: data?.getBrand?.moreInfo }}
              className="mt-3"
            ></div>
            <Link href={`https://wa.me/${data?.getBrand?.contactNumber}`}>
              <button
                className={`flex items-center bg-green-600 text-white hover:bg-green-400 p-3 rounded-3xl`}
              >
                <Icons.whatsApp size={30} />
                <span className="ms-2 text-base font-bold">
                  WhatsApp with Us
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div>
        <section className="">
          <h2 className="text-center fw-bold mt-3">Rating and comments</h2>
          <div className="mb-3">
            <div className="d-flex align-items-center">
              <Rating
                style={{ maxWidth: 200 }}
                value={5}
                // onChange={}
              />
              <span className="ms-3">{data?.length} Ratings</span>
            </div>
            <textarea
              className="p-2 w-100 textAreaBox"
              rows="1"
              placeholder="Add a comment"
              value={"comment"}
              // onChange={(e) => setComment(e.target.value)}
            />
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary"
                // onClick={() => ratingHandler(brandData._id, rating, comment)}
              >
                Add comment
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="">
            {/* {data?.map((item, index) => (
              <div className="p-2 border-bottom" key={index}>
                <p className="d-flex align-items-center">
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
            ))} */}
          </div>
        </section>
      </div>
    </div>
  );
};
