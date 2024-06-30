import axios from "axios";

export async function POST(req) {
  const data = await req.json();

  const brandAPI = await axios
    .get(
      `
      ${process.env.NEXT_PUBLIC_API_URL}/get/areaNamesByBrandName?brandName=${data?.brandName}
      `    )
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));

  //   console.log("brandAPI --->", brandAPI);

  return Response.json({ data: brandAPI });
}
