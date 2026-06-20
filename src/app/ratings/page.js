
import HomeRatings from "../components/home/homeRatings";
import axios from "axios";
import React from "react";

const getRatingsData = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get/ratings`);
    
    return res?.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const Page = async () => {
  const ratingsData = await getRatingsData();
  
  return (
    <HomeRatings data={ratingsData} />
  );
};

export default Page;
