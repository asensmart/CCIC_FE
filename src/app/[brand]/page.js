import NavbarBrand from "../components/NavbarBrand";
import { Brand } from "../components/brand/brand";

const Brands = async ({ params }) => {
  const getBrand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/brand?slug=/${params.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const getAreasByBrand = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get/areaNamesByBrandName?brandName=${params.brand}`
  )
    .then((res) => res.json())
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err);
    });

  const data = {
    getBrand: getBrand,
    getAreasByBrand: getAreasByBrand,
  };

  return <Brand data={data} />;
};

export default Brands;
