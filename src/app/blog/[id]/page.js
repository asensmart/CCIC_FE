import axios from "axios";
import BlogPage from "@/app/components/blogs/blog";
import MainNavbar from "@/app/components/shared/Nav/Navbar";
import { notFound } from "next/navigation";

export async function generateMetadata({ params, searchParams }) {
  const blogId = searchParams?.blog_id;
  const blog = await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/getBlog`, {
      id: blogId,
      // id: params?.id,
    })
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    title: blog?.metaTitle,
    description: blog?.metaDescription,
    keywords: [blog?.metaKeywords],
    metadataBase: new URL(process.env.NEXT_PUBLIC_HYPER_TXT),
    appLinks: {
      web: {
        url: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
        should_fallback: true,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${blogId}`,
      // canonical: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.id}`,
    },
    openGraph: {
      images: [blog?.banner],
    },
  };
}

const BlogIndex = async ({ params, searchParams }) => {
  const blogId = searchParams?.blog_id;

  const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  const getBlog = await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/getBlog`, {
      id: blogId,
      // id: params?.id,
    })
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return !getBlog ? (
    notFound()
  ) : (
    <>
      <MainNavbar brandData={brandData} />
      <BlogPage data={getBlog} />
    </>
  );
};

export default BlogIndex;
