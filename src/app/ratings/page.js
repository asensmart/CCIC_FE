
"use client";

import HomeRatings from "../components/home/homeRatings";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [ratingsData, setRatingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRatingsData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get/ratings`);
        setRatingsData(res?.data);
      } catch (err) {
        console.log(err);
        setRatingsData([]);
      } finally {
        setLoading(false);
      }
    };

    getRatingsData();
  }, []);

  if (loading) {
    return <div>Loading ratings...</div>;
  }

  return (
    <HomeRatings data={ratingsData} />
  );
};

export default Page;
