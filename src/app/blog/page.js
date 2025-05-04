import React from "react";
import BlogPage from "../components/blogs/blogs";
import MainNavbar from "../components/shared/Nav/Navbar";

const Blogs = async () => {
  const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
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
