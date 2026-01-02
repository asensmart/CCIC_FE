"use client";
import React, { useState } from "react";

function AccordionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which is the best home appliance service center in Chennai?",
      answer:
        "We are one of the trusted and leading home appliance service centers in Chennai, specializing in repair and maintenance of TVs, washing machines, refrigerators, air conditioners, and microwave ovens. Our certified technicians handle all major brands and provide reliable doorstep service at affordable prices. Customers choose us for our quick response, genuine spare parts, and transparent service process.",
    },
    {
      question: "Where can I find doorstep TV repair service in Chennai?",
      answer:
        "You can find professional doorstep TV repair service with us anywhere in Chennai. Our experts repair LED, LCD, Plasma, Smart TVs, and 4K Ultra HD models. Instead of carrying your TV to a shop, our technician visits your home, diagnoses the issue, and provides same-day service with original parts for long-lasting performance.",
    },
    {
      question: "How do I book a home appliance repair service in Chennai?",
      answer:
        "Service booking with us takes just a few minutes. You can call our dedicated customer care number or fill out the online service request form. Once booked, our support team assigns a technician near your location who will arrive at your doorstep for a free inspection and provide a cost estimate before starting the repair.",
    },
    {
      question:
        "Can I get 100% genuine spare parts for appliance and TV repairs in Chennai?",
      answer:
        "Yes, we always use 100% genuine spare parts for every repair. Whether it is a TV panel replacement, refrigerator compressor, washing machine motor, or AC gas refilling, we ensure original components are installed. This guarantees durability, smooth functioning, and protects your appliance warranty.",
    },
    {
      question: "Who provides multi-brand appliance repair in Chennai?",
      answer:
        "We provide expert multi-brand repair services in Chennai for all popular brands like Samsung, LG, Sony, Panasonic, Whirlpool, IFB, Haier, Godrej, TCL, VU, Mi, and OnePlus. Our technicians are trained across different models and technologies, from basic LED TVs to advanced OLEDs and inverter washing machines, ensuring complete brand-specific solutions.",
    },
    {
      question: "Do appliance repair services in Chennai provide warranty?",
      answer:
        "Yes, every repair service we offer comes with a service warranty. Depending on the appliance and the repair type, we provide warranty on spare parts as well as on the service work done. This ensures our customers enjoy peace of mind, knowing that their repaired TV, washing machine, or refrigerator is covered.",
    },
    {
      question:
        "How fast can I get same-day TV or appliance repair in Chennai?",
      answer:
        "In most cases, we provide same-day repair service across all Chennai locations. Whether you need TV service in Porur, AC repair in Velachery, or refrigerator service in T. Nagar, our nearest technician will be dispatched to your address. Same-day repair is available for common issues like TV display problems, washing machine drum not spinning, refrigerator cooling issues, and AC water leakage.",
    },
    {
      question: "How much does TV repair service include in Chennai?",
      answer:
        "TV repair service in Chennai includes complete inspection, diagnosis, and repair at your doorstep. Our technicians handle issues such as blank screen, no sound, poor picture quality, motherboard problems, and connectivity errors. We provide service for LED, LCD, OLED, Plasma, and Smart TVs across all major brands with original spare parts and service warranty.",
    },
    {
      question:
        "Do you repair all TV brands like Samsung, LG, Sony, and Panasonic in Chennai?",
      answer:
        "Yes, we repair all major TV brands including Samsung, LG, Sony, Panasonic, TCL, VU, Mi, Philips, OnePlus, and Haier. Whether it is a Smart TV, OLED, or 4K Ultra HD model, our technicians provide specialized repair solutions at your doorstep. We also stock brand-specific spare parts to ensure original replacements and long-lasting performance.",
    },
    {
      question:
        "Why should I choose your service center for appliance repair in Chennai?",
      answer:
        "Customers prefer our service center because we provide professional multi-brand repair at fair prices with genuine spare parts. Our technicians are experienced, our customer care is available 24/7, and we offer doorstep service across Chennai. With same-day repair options, service warranty, and transparent process, we make appliance repair simple, reliable, and hassle-free.",
    },
  ];
  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="px-4 mb-4">
      <h2 className="text-center text-4xl text-blue-600 font-bold">FAQs</h2>
      <section>
        <ul className="space-y-4 text-gray-800">
          {faqs.map((faq, idx) => (
            <li key={idx} className="border-b pb-2">
              <button
                type="button"
                className="w-full text-left font-semibold py-2 focus:outline-none flex justify-between items-center"
                onClick={() => toggle(idx)}
              >
                <span>{faq.question}</span>
                <span>{openIndex === idx ? "-" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx
                    ? "max-h-full opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                } text-gray-700`}
                style={{
                  transitionProperty: "max-height, opacity, margin-top",
                }}
              >
                {openIndex === idx && <div>{faq.answer}</div>}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AccordionFAQ;
