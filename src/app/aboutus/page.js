import axios from "axios";
import AboutContent from "../components/about";
import MainNavbar from "../components/shared/Nav/Navbar";

const AboutUs = async () => {
  const brandData = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => {
      return res?.data?.data;
    })
    .catch((err) => console.log(err));

  return (
    <>
      <MainNavbar brandData={brandData} isMainHome={true} />
      <AboutContent name={"www.customercareinchennai.com"} isHome={true} />
    </>
  );
};

export default AboutUs;
