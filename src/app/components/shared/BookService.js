import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

const BookCallService = ({ whatsAppNum }) => {
  // whatsAppNum ? whatsAppNum : (whatsAppNum = "7550052019");
  return (
    <div className="flex justify-center pb-2">
      <div className="border-4 border-l-blue-600 shadow-lg rounded-lg p-3">
        <h2 className="text-2xl text-black text-center">
          Book a Service Today!
        </h2>
        <p className="text-black text-center">We are Wating For You</p>
        <div className="flex justify-center items-center mt-2">
          <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}>
            <button className="flex justify-center items-center px-3 py-2 rounded-full bg-green-600 hover:bg-green-700">
              <Icons.whatsApp size={36} className="text-white me-2" />{" "}
              <span className="font-bold text-base text-white">
                Get More Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCallService;
