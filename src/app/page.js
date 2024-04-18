"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import homeBanner from "@/assets/images/homebanner.webp";
import HomeAbout from "./components/home/HomeAbout";
import OurServices from "./components/home/ourServices";
import { Icons } from "@/assets/icons/icons";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const titleData = [
    {
      id: 1,
      title: "Expert Technicians",
      description: "Our engineers are skilled to repair and Service",
      icon: <Icons.userIcon size={48} color="#F86E4E" />,
    },
    {
      id: 2,
      title: "Fast Problem Solving",
      description: "Carry same day visit you will find Technical Support 24/7",
      icon: <Icons.settings size={48} color="#F86E4E" />,
    },
    {
      id: 3,
      title: "Innovative Products",
      description:
        'We Create innovative products and back them with "customer care Chennai',
      icon: <Icons.navigation size={48} color="#F86E4E" />,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Home Banner */}
      <Image
        src={homeBanner}
        alt="banner"
        // className="dark:invert"
        width={"100%"}
        // height={24}
        priority
      />
      <div className="grid grid-cols-3 py-16 px-2 bg-white text-black">
        {titleData.map((data) => (
          <div key={data.id} className="flex items-center justify-center gap-3">
            <div className="p-3 rounded bg-mailHead">{data.icon}</div>
            <div className="">
              <div className="font-bold text-xl">{data.title}</div>
              <div>{data.description}</div>
            </div>
          </div>
        ))}
      </div>
      {/* About Us */}
      <HomeAbout />
      {/* Our Services */}
      <OurServices />
    </>
  );
}
