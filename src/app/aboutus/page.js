import AboutContent from "../components/about";
import MainNavbar from "../components/shared/Nav/Navbar";

const AboutUs = async () => {
  const brandData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get/brands`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return (
    <>
      <MainNavbar brandData={brandData} />
      <AboutContent name={"customercareinchennai.com"} isHome={true} />
    </>
  );
};

export default AboutUs;
