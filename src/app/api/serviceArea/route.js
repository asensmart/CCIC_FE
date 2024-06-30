import axios from "axios";

export async function POST(req) {
  const data = await req.json();

  const areaAPI = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/get/areaName?brandName=${data?.brand}&categoryName=${data?.category}&slug=/${data?.serviceArea}`
    )
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));

  return Response.json({ data: areaAPI });
}
