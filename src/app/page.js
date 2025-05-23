import Script from "next/script";
import HomeCom from "./components/home/HomeCom";
import axios from "axios";

export const metadata = {
  applicationName: "AM Service",
  title:
    "TV Repair and Service in Chennai | 24/7 Expert Technicians | Doorstep fix",
  // title: "AM Service Solution - customer care in Chennai",
  description:
    "Need a TV repair service in Chennai? We provide expert doorstep repairs for LED, LCD & Smart TVs. Same-day visits. Call now for quick service.",
  // "Welcome to customercareinchennai.com, your one-stop shop for 24/7 online repair services.",
  keywords: [
    "customer care in chennai",
    "samsung service centre",
    "lg service centre",
    "TV service center",
  ],
  alternates: {
    canonical: `https://customercareinchennai.com/`,
  },
};

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://customercareinchennai.com",
    logo: "https://customercareinchennai.com/static/media/logo2.a837981714d81b444b02.png",
    name: "AM Service Solution",
    description:
      "Customer care in chennai service center exclusive brand products led tv smart tv 4k tv. home appliances washing machine refrigerator microwave oven service @ home visit same day.",
    address:
      "No. 142, Govindan St, Shanthi Nagar, Arundati Nagar, Jamalia, Chennai, Tamil Nadu 600012",
    telephone: "+91 7550052019",
    areaServed: "chennai, porur, tamilnadu",
    location:
      "No. 142, Govindan St, Shanthi Nagar, Arundati Nagar, Jamalia, Chennai, Tamil Nadu 600012",
  };

  // const brandData = await axios
  //   // .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
  //   .get(`${process.env.NEXT_PUBLIC_BASE_URL}/brands`)
  //   .then((res) => {
  //     return res?.data;
  //   })
  //   .catch((err) => console.log(err));

  // console.log("brandData --->", brandData?.data?.length);

  return (
    <>
      <Script
        id="1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeCom />
      {/* <HomeCom brandData={brandData} /> */}
    </>
  );
}
