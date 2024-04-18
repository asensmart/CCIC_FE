import NavbarBrand from "../components/NavbarBrand";

export default function RootLayout({ children, params }) {
  return (
    <>
      <NavbarBrand brandName={params} />
      {children}
    </>
  );
}
