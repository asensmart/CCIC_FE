"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import img from "../../../assets/img1.png";
import Link from "next/link";

const BlogsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function fetchBlogs() {
      axios
        .get(`https://api.customercareinchennai.com/api/v1/get/getAllBlogs`)
        .then((res) => {
          setLoading(true);
          setData(res?.data?.data);
          setLoading(false);
        });
    }
    fetchBlogs();
  }, []);

  // useEffect(() => {
  //   function fetchBlogs() {
  //     axios
  //       .post(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, { name: "getBlogs" })
  //       .then((res) => {
  //         setLoading(true);
  //         setData(res?.data?.data);
  //         setLoading(false);
  //       });
  //   }
  //   fetchBlogs();
  // }, []);

  return (
    <div className="bg-gray-100 p-4 min-h-screen ">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">Blogs</h1>
      {!loading && (
        <>
          <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data?.map((blog) => (
              <Link
                key={blog?._id}
                href={`/blog/${blog?._id}?${Date.now()}`}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={blog?.thumbnail}
                  // src={img}
                  alt={"thumbnail"}
                  width={100}
                  height={100}
                  className="w-[100%] h-[50%] object-contain"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-black">
                    {blog.name}
                  </h2>
                  <div className="text-gray-600 text-sm line-clamdiv-3">
                    {blog?.shortDescription}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogsPage;
