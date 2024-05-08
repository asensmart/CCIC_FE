import { ServiceAreaPage } from "@/app/components/brand/category/serviceArea/serviceArea";
import axios from "axios";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const serviceArea = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/areaName?brandName=${params?.brand}&categoryName=${params?.category}&slug=/${params?.serviceArea}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    title: serviceArea[0]?.metaTitle,
    description: serviceArea[0]?.metaDescription,
    keywords: [serviceArea[0]?.metaKeywords],
    metadataBase: new URL(process.env.NEXT_PUBLIC_HYPER_TXT),
    appLinks: {
      web: {
        url: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
        should_fallback: true,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.brand}/${params?.category}/${params?.serviceArea}`,
    },
    openGraph: {
      images: [serviceArea[0]?.titleBackgroundImage],
    },
  };
}

const ServiceArea = async ({ params }) => {
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

  const getAreasByBrand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/areaNamesByBrandName?brandName=${params?.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const getServices = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/get/areaName?brandName=${params?.brand}&categoryName=${params?.category}&slug=/${params?.serviceArea}`
  );

  if (!getBrand || getServices?.data?.data.length === 0) notFound();

  const data = {
    getBrand: getBrand,
    getAreasByBrand: getAreasByBrand,
    getServices: getServices?.data?.data[0],
  };

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: data?.getServices?.brandName,
    description: data?.getServices?.metaDescription,
    brand: {
      "@type": "Brand",
      name: data?.getServices?.brandName,
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
      reviewCount: 56,
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
      {
        item: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.brand}/${params?.category}/${params?.serviceArea}`,
        "@type": "ListItem",
        name: params?.serviceArea,
        position: "4",
      },
    ],
    "@type": "BreadcrumbList",
    "@context": "http://schema.org",
  };

  const FaqldJson = {
    mainEntity: data?.getServices?.faqs,
    "@type": "FAQPage",
    "@context": "http://schema.org",
  };

  const OrganizationldJson = {
    "@context": "http://schema.org",
    "@type": "Organization",
    url: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params.brand}/${params.category}`,
    name: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
    description: `${data?.getServices?.metaDescription}`,
    logo: `${data?.getServices?.serviceAreaLogo}`,
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
      <ServiceAreaPage data={data} />
    </>
  );
};

export default ServiceArea;
