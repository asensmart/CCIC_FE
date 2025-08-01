import axios from "axios";

export default async function sitemap() {
  var mapData = [];
  const areas = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/get/sitemapData`
  );

  const defaultData = [
    {
      url: "https://customercareinchennai.com/",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://customercareinchennai.com/aboutus",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://customercareinchennai.com/contactus",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://customercareinchennai.com/blog",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];

  mapData = [...defaultData, ...areas?.data];

  return mapData;
}
