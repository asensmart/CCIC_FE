import { Icons } from "@/assets/icons/icons";
import Link from "next/link";
import React from "react";

const NavMailHead = () => {
  const iconData = [
    {
      id: 1,
      icon: <Icons.facebook size={18} color="black" />,
      link: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: <Icons.instagram size={18} color="black" />,
      link: "https://www.instagram.com",
    },
    {
      id: 3,
      icon: <Icons.twitter size={18} color="black" />,
      link: "https://www.twitter.com",
    },
    {
      id: 4,
      icon: <Icons.google size={18} color="black" />,
      link: "https://www.google.com",
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
      <div className="grid grid-cols-4 gap-3 items-center">
        {iconData.map((icon) => (
          <Link href={icon.link} key={icon.id}>
            {icon.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavMailHead;
