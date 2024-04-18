import Image from "next/image";
import aboutImg from "@/assets/images/aboutimg.jpg";
import Link from "next/link";

const HomeAbout = () => {
  return (
    <div className="grid grid-cols-[1.5fr_2fr] py-10 px-2 bg-white">
      <div>
        <Image
          src={aboutImg}
          alt="about Image"
          // className="dark:invert"
          width={500}
          // height={24}
          priority
        />
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold text-[#F86E4E]">
          About Us
        </h2>
        <div className="text-black">
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
          {/* provide the highest possible level of technical support that our
          customers can expect in all dealings with us. <br />
          <br />
          Our mission is to provide the best possible service to our customers,
          serving the dual purpose of reducing their costs and enhancing their
          productivity. Additionally, we want to make sure that we send our
          technicians to your place at a time which is convenient for you.
          <br /> <br /> If you require service support for your products, we
          will arrange a convenient and safe pick-up service solution at your
          home. Our technical experts will assist in diagnosing the problem on
          call or through online service and then set up the service
          accordingly. For all products, please visit our website and scroll
          down to our Contact us section. Here you can reach out to a dedicated
          support team anywhere in Chennai who will be happy to help you find
          the most convenient service center near you. */}
          <br />
          <br />
          <Link href={'/aboutus'}>
            <span className="px-4 py-2 bg-[#F86E4E] rounded-3xl text-white">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
