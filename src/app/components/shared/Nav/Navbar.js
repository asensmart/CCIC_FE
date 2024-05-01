"use client";
import React, { useEffect, useState } from "react";
import MainMobNav from "../../home/mainMobilePage.js";
import Navbar from "../../Navbar.js";
import { menus } from "@/app/datas/Navmenus.js";

const MainNavbar = ({ brandData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(brandData);
  }, [brandData]);

  return (
    <div>
      {/* Mobile Nav */}
      <MainMobNav menus={menus} data={data} />

      {/* Desktop Nav */}
      <div className="shadow-lg z-50 sticky top-0 lg:block hidden">
        <Navbar menus={menus} data={data} />
      </div>
    </div>
  );
};

export default MainNavbar;
