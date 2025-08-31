"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Icons } from "@/assets/icons/icons";

const OurServices = ({ brand }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <h1 className="text-center text-4xl text-orangeText font-bold">
        <span className="text-black">Our</span> Services
      </h1>
      <Slider {...settings} className="text-orangeText pe-8 h-[700px]">
        {brand?.map((item) => (
          <div
            key={item?._id}
            className="h-[100%] pe-5 ms-5 my-5 text-black flex flex-col transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-700 hover:-translate-y-4"
          >
            <div className="relative shadow-lg  hover:shadow-gray-400 border border-borderClr mx-1 rounded-2xl">
              {/* <div className="relative shadow-lg hover:shadow-[0_5px_5px_0px] hover:shadow-orangeText border border-borderClr mx-1 rounded-2xl"> */}
              <div className="relative border-b border-borderClr w-[100%]">
                <Image
                  src={item?.sideThumbnail}
                  alt={"brand image"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-2xl w-[100%] h-[300px]"
                />
                <div className="flex justify-center">
                  <div className="absolute -bottom-8 shadow-2xl rounded-xl p-3 bg-white w-32 h-20 flex items-center justify-center">
                    <Image
                      src={item?.brandLogo}
                      alt={"brand logo"}
                      width={70}
                      height={0}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center py-8 px-3">
                <div className="h-[155px] overflow-hidden mt-2">
                  <h3 className="font-bold text-2xl">{item?.brandName}</h3>
                  <p
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: item?.moreInfo }}
                  ></p>
                </div>
                <div className="flex justify-between items-end mt-3 px-3">
                  <Link href={item?.slug}>
                    <button className="py-2 px-3 text-orangeText rounded-2xl border border-orangeText hover:bg-orangeText hover:text-white hover:transition-all hover:ease-in hover:duration-200">
                      Read More...
                    </button>
                  </Link>
                  <Link href={`https://wa.me/${item?.contactNumber}`}>
                    <div className="flex flex-col justify-center items-center text-whatsapp hover:text-green-500">
                      <div>
                        <Icons.whatsApp size={35} />
                      </div>
                      <div className="text-orangeText">Contact Us</div>
                    </div>
                  </Link>
                </div>
              </div>
              <p className="absolute bottom-0 right-0 bg-orangeText rounded-br-2xl text-white p-1 flex items-center">
                <span className="mr-1">{item?.overallRating}</span>{" "}
                <Icons.star color="#ffff00" size={15} />
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurServices;
