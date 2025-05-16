"use client";
import Image from "next/image";
import React from "react";

const BlogPage = ({ data }) => {
  return (
    <div className="bg-gray-100 text-black p-4">
      <Image
        // src={img}
        src={data?.banner}
        alt={data?.blogTitle}
        width={1000}
        height={1000}
        className="w-full h-full rounded-lg mb-4"
        // className="w-full h-full object-cover rounded-lg mb-4"
      />
      <h1 className="text-center text-4xl font-bold underline mt-10">
        {data?.blogTitle}
      </h1>
      <p className="text-gray-500 text-end">
        {" "}
        Created On:{" "}
        {new Date(data?.createdAt.toString()).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div
        className="mt-5 text-gray-800"
        dangerouslySetInnerHTML={{ __html: data?.moreInfo }}
      ></div>
    </div>
  );
};

export default BlogPage;
