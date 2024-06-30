import axios from "axios";

export async function GET(req, res) {
  // for Query
  // const brandName = req.nextUrl.searchParams.get('brandName'); // query string name

  //   console.log("req -->", req.data);

  const data = await req.json();
  console.log("data --->", data);

  const brandAPI = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${req?.data?.brandName}`
      // "https://api.customercareinchennai.com/api/v1/get/brands"
    )
    // .then((res) => res.json())
    .then((res) => {
      console.log("res data -->", res.data);
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
