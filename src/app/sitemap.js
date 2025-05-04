import axios from "axios";

export default async function sitemap() {
  let mapData = [];
  let areas = [];

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/get/sitemapData`
    );
    areas = response?.data?.data || [];
  } catch (error) {
    console.error("Error fetching sitemap data:", error);
  }

  const defaultData = [
    {
      url: "https://customercareinchennai.com/",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: "https://customercareinchennai.com/aboutus",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: "https://customercareinchennai.com/contactus",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: "https://customercareinchennai.com/blog",
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
  ];

  mapData = [...defaultData, ...areas];

  if (process.env.NODE_ENV === "development") {
    console.log("mapData --->", mapData);
  }

  return mapData;
}
