import Script from "next/script";
import HomeCom from "./components/home/HomeCom";

export const metadata = {
  applicationName: "AM Service",
  title: "Best Home Appliance Repair in Chennai | TV Repair Service Center",
  // title: "AM Service Solution - customer care in Chennai",
  description:
    "Affordable LCD, LED, UHD & Smart TV repair in Chennai. Expert technicians provide doorstep service. Fast, reliable support for all major TV brands.",
  // "Looking for TV Repair Service in Chennai? Get LCD, LED, UHD, and Smart TVs TV service in Chennai at affordable price in Chennai. Our experienced technicians will come to service your TV at your doorstep.",
  keywords: [
    "home appliance repair in chennai",
    "tv service center in chennai",
    "samsung tv service center in chennai",
    "lg tv service center in chennai",
    "mi tv service center in chennai",
    "sony tv service center in chennai",
    "panasonic tv service center in chennai",
    "vu tv service center in chennai",
    "tcl tv service center in chennai",
  ],
  alternates: {
    canonical: `https://www.customercareinchennai.com/`,
  },
};

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://www.customercareinchennai.com",
    logo: "https://www.customercareinchennai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30572b80.png&w=1080&q=75",
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

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best home appliance service center in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are one of the trusted and leading home appliance service centers in Chennai, specializing in repair and maintenance of TVs, washing machines, refrigerators, air conditioners, and microwave ovens. Our certified technicians handle all major brands and provide reliable doorstep service at affordable prices. Customers choose us for our quick response, genuine spare parts, and transparent service process.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I find doorstep TV repair service in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can find professional doorstep TV repair service with us anywhere in Chennai. Our experts repair LED, LCD, Plasma, Smart TVs, and 4K Ultra HD models. Instead of carrying your TV to a shop, our technician visits your home, diagnoses the issue, and provides same-day service with original parts for long-lasting performance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a home appliance repair service in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Service booking with us takes just a few minutes. You can call our dedicated customer care number or fill out the online service request form. Once booked, our support team assigns a technician near your location who will arrive at your doorstep for a free inspection and provide a cost estimate before starting the repair.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get 100% genuine spare parts for appliance and TV repairs in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we always use 100% genuine spare parts for every repair. Whether it is a TV panel replacement, refrigerator compressor, washing machine motor, or AC gas refilling, we ensure original components are installed. This guarantees durability, smooth functioning, and protects your appliance warranty.",
        },
      },
      {
        "@type": "Question",
        name: "Who provides multi-brand appliance repair in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide expert multi-brand repair services in Chennai for all popular brands like Samsung, LG, Sony, Panasonic, Whirlpool, IFB, Haier, Godrej, TCL, VU, Mi, and OnePlus. Our technicians are trained across different models and technologies, from basic LED TVs to advanced OLEDs and inverter washing machines, ensuring complete brand-specific solutions.",
        },
      },
      {
        "@type": "Question",
        name: "Do appliance repair services in Chennai provide warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every repair service we offer comes with a service warranty. Depending on the appliance and the repair type, we provide warranty on spare parts as well as on the service work done. This ensures our customers enjoy peace of mind, knowing that their repaired TV, washing machine, or refrigerator is covered.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can I get same-day TV or appliance repair in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, we provide same-day repair service across all Chennai locations. Whether you need TV service in Porur, AC repair in Velachery, or refrigerator service in T. Nagar, our nearest technician will be dispatched to your address. Same-day repair is available for common issues like TV display problems, washing machine drum not spinning, refrigerator cooling issues, and AC water leakage.",
        },
      },
      {
        "@type": "Question",
        name: "How much does TV repair service include in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TV repair service in Chennai includes complete inspection, diagnosis, and repair at your doorstep. Our technicians handle issues such as blank screen, no sound, poor picture quality, motherboard problems, and connectivity errors. We provide service for LED, LCD, OLED, Plasma, and Smart TVs across all major brands with original spare parts and service warranty.",
        },
      },
      {
        "@type": "Question",
        name: "Do you repair all TV brands like Samsung, LG, Sony, and Panasonic in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we repair all major TV brands including Samsung, LG, Sony, Panasonic, TCL, VU, Mi, Philips, OnePlus, and Haier. Whether it is a Smart TV, OLED, or 4K Ultra HD model, our technicians provide specialized repair solutions at your doorstep. We also stock brand-specific spare parts to ensure original replacements and long-lasting performance.",
        },
      },
      {
        "@type": "Question",
        name: "Why should I choose your service center for appliance repair in Chennai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Customers prefer our service center because we provide professional multi-brand repair at fair prices with genuine spare parts. Our technicians are experienced, our customer care is available 24/7, and we offer doorstep service across Chennai. With same-day repair options, service warranty, and transparent process, we make appliance repair simple, reliable, and hassle-free.",
        },
      },
    ],
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
      <Script
        id="2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <HomeCom />
      {/* <HomeCom brandData={brandData} /> */}
    </>
  );
}
