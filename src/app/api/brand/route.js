import axios from "axios";

export async function GET(req, res) {

  const data = await req.json();
  console.log("data --->", data);

  const brandAPI = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${req?.data?.brandName}`
    )
    // .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return Response.json({ data: brandAPI });
}

export async function POST(req) {
  const data = await req.json();

  const brandAPI = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${data?.brandName}`
    )
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));

  return Response.json({ data: brandAPI });
}
