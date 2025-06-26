import axios from "axios";

export async function POST(req) {
  const data = await req.json();

  const catAPI = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/get/areaNamesByCategoryName?categoryName=${data?.category}`
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => console.log(err));

  return Response.json({ data: catAPI });
}
