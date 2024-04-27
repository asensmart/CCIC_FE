export async function GET(req, res) {
  // for Query
  // const brandName = req.nextUrl.searchParams.get('brandName'); // query string name

  const brandAPI = await fetch(
    "https://api.customercareinchennai.com/api/v1/get/brands"
  )
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return Response.json({ data: brandAPI });
}

export async function POST(req) {
  // for body request
  const data = await req.json();
  console.log(data);

  return Response.json({ message: "post success" });
}
