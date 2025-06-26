import React from "react";
import BlogPage from "../components/blogs/blogs";
import MainNavbar from "../components/shared/Nav/Navbar";
import axios from "axios";

const Blogs = async () => {
  const brandData = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));
  return (
    <>
      <MainNavbar brandData={brandData} />
      <BlogPage />
    </>
  );
};

export default Blogs;
