import { notFound } from "next/navigation";
import { Brand } from "../components/brand/brand";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const brand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${params?.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    title: brand?.metaTitle,
    description: brand?.metaDescription,
    keywords: [brand?.metaKeywords],
    metadataBase: new URL(process.env.NEXT_PUBLIC_HYPER_TXT),
    appLinks: {
      web: {
        url: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
        should_fallback: true,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params?.brand}`,
    },
    openGraph: {
      images: [brand?.titleBackgroundImage],
    },
  };
}

const Brands = async ({ params }) => {
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

  if (getBrand.length == 0) notFound();

  const data = {
    getBrand: getBrand,
    getAreasByBrand: getAreasByBrand,
  };

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: getBrand?.brandName,
    description: getBrand?.metaDescription,
    brand: {
      "@type": "Brand",
      name: getBrand?.brandName,
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
      reviewCount: 86,
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
    ],
    "@type": "BreadcrumbList",
    "@context": "http://schema.org",
  };

  const FaqldJson = {
    mainEntity: getBrand?.faqs,
    "@type": "FAQPage",
    "@context": "http://schema.org",
  };

  const OrganizationldJson = {
    "@context": "http://schema.org",
    "@type": "Organization",
    url: `${process.env.NEXT_PUBLIC_HYPER_TXT}/${params.brand}`,
    name: `${process.env.NEXT_PUBLIC_HYPER_TXT}`,
    description: `${getBrand?.description}`,
    logo: `${getBrand?.brandLogo}`,
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
      <Brand data={data} />
    </>
  );
};

export default Brands;
