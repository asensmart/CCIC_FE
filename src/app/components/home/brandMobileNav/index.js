import MainMobNav from "../mainMobilePage/index.js";

const BrandMobileNav = async ({ menus, data, brandName, brandColor }) => {
  return <MainMobNav menus={menus} data={data} brandName={brandName} brandColor={brandColor} />;
};

export default BrandMobileNav;
