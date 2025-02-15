import axios from "axios";

export async function GET(req, res) {
  // for Query
  // const brandName = req.nextUrl.searchParams.get('brandName'); // query string name

  const brandAPI = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));

  return Response.json({ data: brandAPI });
}
