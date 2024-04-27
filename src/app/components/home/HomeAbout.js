import Image from "next/image";
import aboutImg from "@/assets/images/aboutimg.jpg";
import Link from "next/link";
import autoprefixer from "autoprefixer";

const HomeAbout = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-[#F86E4E]">
        <span className="text-black">About</span> Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] py-5 px-2 bg-white">
        <div className="sm:mb-11 sm:flex sm:justify-center">
          <Image
            src={aboutImg}
            alt="about Image"
            // className="dark:invert"
            width={500}
            height={autoprefixer}
            priority
          />
        </div>
        <div className="text-black p-2">
          Welcome to <b>customercareinchennai.com</b> , your one-stop shop for
          <b>24/7 online repair services</b>. We offer same-day visits for
          television and home appliance repair at your doorstep. Our superior
          customer service team and reliability have earned us a reputation for
          excellence. All of our staff are highly trained service engineers who
          are capable of diagnosing, troubleshooting, and replacing parts in
          your home right in front of you. We offer onsite estimates and repair
          costs for <b>LCD, LED, UHD, and Smart TVs</b>. <br /> <br /> We are
          committed to listening to our valued customers and ensuring that their
          interests are always at the forefront of all that we do. We pledge
          to...
          <br />
          <br />
          <Link href={"/aboutus"}>
            <span className="px-4 py-2 bg-[#F86E4E] rounded-3xl text-white">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
