import axios from "axios";

export async function GET(req, res) {
  const areas = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/get/sitemapData`
  );

  return Response.json({ data: areas?.data });
}
