import Link from "next/link";
import React from "react";
import { Icons } from "@/assets/icons/icons";

const Footer = () => {
  const QLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 11, name: "About Us", link: "/aboutus" },
    { id: 2, name: "Contact Us", link: "/contactus" },
    { id: 3, name: "Privacy Policy", link: "/privacypolicy" },
    { id: 4, name: "Disclaimer", link: "/disclaimer" },
  ];
  return (
    <>
      <div className="py-4 bg-gradient-to-r from-slate-600 to-slate-600">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 py-4 px-6">
          <div className="flex justify-start items-center">
            <section>
              <b>Authorized Service Center in Chennai</b> – Customer Care for
              Exclusive Brand Products We provide expert service for LED TVs,
              Smart TVs, and 4K TVs, as well as home appliances including
              washing machines, refrigerators, and microwave ovens. Same-day
              home visits available.
            </section>
          </div>
          <div className="mx-0">
            <h3 className="font-bold text-xl">QUICK LINKS</h3>
            <ul className="list-disc ms-5">
              {QLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">CONTACT US</h3>
            <a
              href="https://maps.app.goo.gl/EZ25fEBQjzQypbJy6"
              className="flex items-center justify-start py-1 hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
            >
              <span className="mr-2">
                <Icons.location size={28} />
              </span>
              Chennai, Tamil Nadu
            </a>
            <a
              href="tel:+917550052019"
              className="flex items-center justify-start py-1 hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
            >
              <span className="mr-2">
                <Icons.phone size={24} />
              </span>
              +91 – 7550052019
            </a>
            <a
              href="mailto:customercareinchennai@gmail.com"
              className="flex items-center justify-start py-1 hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
            >
              <span className="mr-2">
                <Icons.mailIcon size={24} />
              </span>
              customercareinchennai@gmail.com
            </a>
            <div className="flex items-center py-1 space-x-3">
              <a
                href="https://www.instagram.com/am_service24x7/?igsh=bmt6OGwwdDFkNjZt#/"
                target="_blank"
                className="hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
              >
                <Icons.instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
              >
                <Icons.facebook size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                className="font-bold text-[24px] bg-slate-500 px-2 rounded hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
              >
                X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
              >
                <Icons.linkedin size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="hover:text-blue-500 transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
              >
                <Icons.youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-borderClr px-3 py-2 text-black text-sm">
        © 2022 Customer Care Chennai . All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
