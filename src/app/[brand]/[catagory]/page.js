import Link from "next/link";

const CatagoryPage = ({ params }) => {
  return (
    <>
      <div>CatagoryPage</div>
      <Link href={`${params.catagory}/service-center-in-chennai`}>
        Service Center in Chennai{" "}
      </Link>
    </>
  );
};

export default CatagoryPage;
