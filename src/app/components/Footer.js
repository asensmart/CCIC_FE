import Link from "next/link";
import React from "react";

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
      <div className="py-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 py-4 px-6">
          {/* <div>
            Customer care in chennai service center exclusive brand products led
            tv smart tv 4k tv. home appliances washing machine refrigerator
            microwave oven service @ home visit same day.
          </div> */}
          <div className="flex justify-center items-center">
            <section>
              <b>Authorized Service Center in Chennai</b> – Customer Care for
              Exclusive Brand Products We provide expert service for LED TVs,
              Smart TVs, and 4K TVs, as well as home appliances including
              washing machines, refrigerators, and microwave ovens. Same-day
              home visits available.
            </section>
          </div>
          <div className="mx-auto">
            <h3 className="font-bold text-xl">QUICK LINKS</h3>
            <ul className="list-disc ms-5">
              {QLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  className="hover:text-black transition-all hover:transition-all ease-in-out hover:ease-in-out duration-500 hover:duration-500"
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl">CONTACT US</h3>
            <p>Customer care in chennai Tamil Nadu</p>
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
