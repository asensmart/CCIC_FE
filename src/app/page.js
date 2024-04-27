import Script from "next/script";
import HomeCom from "./components/home/HomeCom";

// export async function generateMetadata() {
//   // export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   // const id = params.id;

//   // fetch data
//   // const product = await fetch(`https://.../${id}`).then((res) => res.json());
//   // const product = "Home Page";

//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: "Home Page",
//     // openGraph: {
//     //   images: ["/some-specific-page-image.jpg", ...previousImages],
//     // },
//   };
// }

export const metadata = {
  title: "Home Page",
  description: "this is my des",
};

export default async function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "product.name",
    image: "product.image",
    description: "product.description",
  };

  const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return (
    <>
      <Script
        id="1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeCom brandData={brandData} />
    </>
  );
}
