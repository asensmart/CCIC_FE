import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

const NavMailHead = () => {
  const iconData = [
    // {
    //   id: 1,
    //   icon: <Icons.facebook size={18} color="black" />,
    //   link: "https://www.facebook.com",
    // },
    {
      id: 2,
      icon: <Icons.instagram size={18} color="black" />,
      link: "https://www.instagram.com/am_service24x7?igsh=bmt6OGwwdDFkNjZt",
    },
    // {
    //   id: 3,
    //   icon: <Icons.twitter size={18} color="black" />,
    //   link: "https://www.twitter.com",
    // },
    {
      id: 4,
      icon: <Icons.google size={18} color="black" />,
      link: "https://www.customercareinchennai.com/",
    },
  ];
  return (
    <div className="flex p-2 justify-between bg-mailHead">
      <Link
        href={`mailto:customercareinchennai@gmail.com`}
        className="flex items-center justify-evenly text-black"
      >
        <Icons.mailIcon className="mr-2" size={24} />{" "}
        customercareinchennai@gmail.com
      </Link>
      {/* <div className="grid grid-cols-4 gap-3 items-center">
        {iconData.map((icon) => (
          <Link href={icon.link} key={icon.id} target="_blank">
            {icon.icon}
          </Link>
        ))}
      </div> */}
      <div className="flex items-center py-1 space-x-3">
        <a
          href="https://www.instagram.com/am_service24x7/?igsh=bmt6OGwwdDFkNjZt#/"
          target="_blank"
          className="text-black"
        >
          <Icons.instagram size={18} />
        </a>
        <a href="https://facebook.com" target="_blank" className="text-black">
          <Icons.facebook size={18} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          className="font-bold text-[18px] bg-slate-200 px-2 rounded text-black"
        >
          X
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-black">
          <Icons.linkedin size={18} />
        </a>
        <a href="https://youtube.com" target="_blank" className="text-black">
          <Icons.youtube size={18} />
        </a>
      </div>
    </div>
  );
};

export default NavMailHead;
