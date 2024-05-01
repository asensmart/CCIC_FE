import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

const BookService = ({ whatsAppNum }) => {
  // whatsAppNum ? whatsAppNum : (whatsAppNum = "7550052019");
  return (
    <div className="flex justify-center pb-2">
      <div className="border-4 border-l-orangeText shadow-lg rounded-lg p-3">
        <h2 className="text-2xl">Book a Service Today!</h2>
        <p>We are Wating For You</p>
        <div className="flex justify-center items-center">
          <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUM}`}>
            <button className="flex justify-center items-center px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-600">
              <Icons.whatsApp size={42} className="text-whatsapp" />{" "}
              <span className="font-bold text-xl text-white">
                Get More Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookService;
