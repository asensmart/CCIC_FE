import axios from "axios";

export default async function sitemap() {
  var mapData = [];
  const areas = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap`
  );

  const defaultData = [
    {
      url: "https://customercareinchennai.com/",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://customercareinchennai.com/aboutus",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://customercareinchennai.com/contactus",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  mapData = [...defaultData, ...areas?.data?.data];

  return mapData;
}
