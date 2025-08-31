import Script from "next/script";
import HomeCom from "./components/home/HomeCom";

export const metadata = {
  applicationName: "AM Service",
  title: "Best LED/LCD/UHD/Smart TV Repair Service Center in Chennai | Call us",
  // title: "AM Service Solution - customer care in Chennai",
  description:
    "Looking for TV Repair Service in Chennai? Get LCD, LED, UHD, and Smart TVs TV service in Chennai at affordable price in Chennai. Our experienced technicians will come to service your TV at your doorstep.",
  keywords: [
    "television repair",
    "tv repair near me",
    "tv repair",
    "tv repair shop near me",
    "led tv repair near me",
    "led tv repair",
    "tv fix near me",
    "tv repair shops in my area",
    "tv servicing",
    "tv home service repair",
    "doorstep led tv repair",
    "tv repair near me now",
    "on site tv repair",
    "best tv repair service center Chennai",
    "tv repair and service",
    "tv service center near me",
    "Tv home service repair",
    "tv installation near me",
    "tv wall mount installation",
    "tv installation service near me",
    "tv mounting",
    "Tv uninstallation service near me",
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
    logo: "https://customercareinchennai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30572b80.png&w=1080&q=75",
    name: "AM Service Solution",
    description:
      "Looking for TV Repair Service in Chennai? Get LCD, LED, UHD, and Smart TVs TV service in Chennai at affordable price in Chennai. Our experienced technicians will come to service your TV at your doorstep.",
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
