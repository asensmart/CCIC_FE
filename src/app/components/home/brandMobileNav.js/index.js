import MainMobNav from "../mainMobilePage.js/index.js";

const BrandMobileNav = async ({ menus, data, brandName }) => {
  return <MainMobNav menus={menus} data={data} brandName={brandName} />;
};

export default BrandMobileNav;
