import React from "react";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt";
import { FaTools } from "@react-icons/all-files/fa/FaTools";
import { FaShieldAlt } from "@react-icons/all-files/fa/FaShieldAlt";
import { FaMoneyCheckAlt } from "@react-icons/all-files/fa/FaMoneyCheckAlt";
// import {
//   FaPhoneAlt,
//   FaCalendarAlt,
//   FaTools,
//   FaShieldAlt,
//   FaMoneyCheckAlt,
// } from "@react-icons/all-files/fa";

const steps = [
  {
    icon: <FaPhoneAlt className="text-blue-600 text-2xl md:text-3xl" />,
    title: "Call or Enquire Online",
    description: (
      <>
        <span role="img" aria-label="phone">
          📞
        </span>{" "}
        Dial our customer care number{" "}
        <a href="tel:7550052019" className="font-bold text-blue-700">
          7550052019
        </a>{" "}
        or submit an online service request form on our website. We provide 24/7
        support to help you anytime.
      </>
    ),
  },
  {
    icon: <FaCalendarAlt className="text-blue-600 text-2xl md:text-3xl" />,
    title: "Schedule a Convenient Slot",
    description:
      "Choose your preferred time and location in Chennai. We provide same-day doorstep service for TVs, ACs, washing machines, and refrigerators.",
  },
  {
    icon: <FaTools className="text-blue-600 text-2xl md:text-3xl" />,
    title: "Technician Visit & Diagnosis",
    description:
      "Our certified technician visits your home, inspects the appliance, and provides a transparent cost estimate before starting the repair.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-2xl md:text-3xl" />,
    title: "Genuine Repair with Warranty",
    description:
      "We use 100% original spare parts to ensure long-lasting performance. We provide a warranty with every service to ensure complete satisfaction.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-blue-600 text-2xl md:text-3xl" />,
    title: "Pay After Service Completion",
    description:
      "No advance payments! Pay only once you are fully satisfied with the service. We offer secure & easy payment options (cash, UPI, or card).",
  },
];

const BookService = () => {
  return (
    <div className="bg-white rounded-lg px-8 pt-2 pb-4 mx-3 md:mx-8 shadow-lg mb-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center flex items-center justify-center gap-2">
        <div>
          <FaTools className="text-blue-600" />
        </div>{" "}
        <div>How to Book Our Service</div>
      </h2>
      <p className="text-gray-700 mb-6 text-lg text-center">
        Booking your home appliance repair service in Chennai is quick and
        hassle-free. Just follow these simple steps:
      </p>
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex lg:items-center items-start gap-4 bg-blue-50 rounded-md p-4 shadow-sm"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-blue-200">
              {step.icon}
            </div>
            <div>
              <div className="font-semibold text-blue-800 text-lg mb-1 items-center gap-2">
                <p className="text-blue-600 font-bold">Step {idx + 1}:</p>
                {step.title}
              </div>
              <div className="text-gray-800 text-base">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookService;
