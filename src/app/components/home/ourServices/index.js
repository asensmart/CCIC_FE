"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { RiWhatsappFill } from "@react-icons/all-files/ri/RiWhatsappFill";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const OurServices = () => {
  var settings = {
    dots: false,
    infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {},
  });

  return (
    <div className="bg-white">
      <h1 className="text-center text-4xl text-orangeText font-bold">
        Our Services
      </h1>
      <div ref={sliderRef} className="keen-slider p-2">
        <div className="keen-slider__slide text-black flex flex-col">
          <div>img</div>
          <div>des</div>
        </div>
        {/* <div className="keen-slider__slide">2</div>
      <div className="keen-slider__slide">3</div>
      <div className="keen-slider__slide">3</div>
      <div className="keen-slider__slide">3</div>
      <div className="keen-slider__slide">3</div>
      <div className="keen-slider__slide">3</div> */}
      </div>
    </div>
  );
};

export default OurServices;
