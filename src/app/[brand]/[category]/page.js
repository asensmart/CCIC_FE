import { Category } from "@/app/components/brand/category/category";
import axios from "axios";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const category = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/category?slug=/${params?.brand}/${params?.category}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    title: category?.metaTitle,
    description: category?.metaDescription,
    keywords: [category?.metaKeywords],
    metadataBase: new URL(process.env.NEXT_PUBLIC_HYPER_TXT),
    appLinks: {
      web: {
        url: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
        should_fallback: true,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.brand}/${params?.category}`,
    },
    openGraph: {
      images: [category?.titleBackgroundImage],
    },
  };
}

const CategoryPage = async ({ params }) => {
  const getBrand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${params?.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const getAreasByCategory = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/areaNamesByCategoryName?categoryName=${params?.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const getCatDataByBrand = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/get/category?slug=/${params?.brand}/${params?.category}`
  );

  if (!getBrand || !getCatDataByBrand?.data?.data) notFound();

  const data = {
    getBrand: getBrand,
    getAreasByCategory: getAreasByCategory,
    getCategory: getCatDataByBrand?.data?.data,
  };

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: data?.getCategory?.brandName,
    description: data?.getCategory?.metaDescription,
    brand: {
      "@type": "Brand",
      name: data?.getCategory?.brandName,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: getBrand?.overallRating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: "customer care in chennai",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: getBrand?.overallRating,
      reviewCount: 78,
    },
  };

  const BreadCrumsldJson = {
    itemListElement: [
      {
        item: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
        "@type": "ListItem",
        name: "Home",
        position: "1",
      },
      {
        item: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.brand}`,
        "@type": "ListItem",
        name: params?.brand,
        position: "2",
      },
      {
        item: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.brand}/${params?.category}`,
        "@type": "ListItem",
        name: params?.category,
        position: "3",
      },
    ],
    "@type": "BreadcrumbList",
    "@context": "http://schema.org",
  };

  const FaqldJson = {
    mainEntity: data?.getCategory?.faqs,
    "@type": "FAQPage",
    "@context": "http://schema.org",
  };

  const OrganizationldJson = {
    "@context": "http://schema.org",
    "@type": "Organization",
    url: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params.brand}/${params.category}`,
    name: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
    description: `${data?.getCategory?.description}`,
    logo: `${data?.getCategory?.categoryLogo}`,
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `${process.env.NEXT_PUBLIC_PHONE_NUM}`,
        contactType: "customer service",
      },
    ],
  };

  return (
    <>
      <Script
        id="1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadCrumsldJson) }}
      />
      <Script
        id="3"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FaqldJson) }}
      />
      <Script
        id="4"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationldJson) }}
      />
      <Category data={data} />
    </>
  );
};

export default CategoryPage;
