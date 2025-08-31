import Image from "next/image";
import aboutBanner from "@/assets/images/aboutbanner.jpg";
import aboutImg from "../../../assets/images/HomeAbuotImg.jpg";

const AboutContent = ({ name, isHome }) => {
  return (
    <div className="bg-white">
      <Image alt="about banner image" src={aboutBanner} />
      <div className="mt-4">
        <h1 className="text-orangeText text-4xl font-bold text-center">
          About Customer Care Chennai
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
          <div className="flex justify-center">
            <Image src={aboutImg} alt="about image" width={500} />
          </div>
          <div className="text-black p-4">
            {isHome ? (
              <>
                <div>
                  Welcome to <b>{name}</b>, your one-stop shop for{" "}
                  <b> 24/7 online repair services</b>. We offer same-day visits
                  for television and home appliance repair at your doorstep. Our
                  superior customer service team and reliability have earned us
                  a reputation for excellence. All of our staff are highly
                  trained service engineers who are capable of diagnosing,
                  troubleshooting, and replacing parts in your home right in
                  front of you. We offer onsite estimates and repair costs for{" "}
                  <b>LCD, LED, UHD, and Smart TVs.</b>
                </div>
                <br />
                <div>
                  We are committed to listening to our valued customers and
                  ensuring that their interests are always at the forefront of
                  all that we do. We pledge to provide the highest possible
                  level of technical support that our customers can expect in
                  all dealings with us.
                </div>
                <br />
                <div>
                  Our mission is to provide the best possible service to our
                  customers, serving the dual purpose of reducing their costs
                  and enhancing their productivity. Additionally, we want to
                  make sure that we send our technicians to your place at a time
                  which is convenient for you.
                </div>
                <br />
                <div>
                  If you require service support for your products, we will
                  arrange a convenient and safe pick-up service solution at your
                  home. Our technical experts will assist in diagnosing the
                  problem on call or through online service and then set up the
                  service accordingly. For all products, please visit our
                  website and scroll down to our &#34;Contact us&#34; section.
                  Here you can reach out to a dedicated support team anywhere in
                  Chennai who will be happy to help you find the most convenient
                  service center near you.
                </div>
              </>
            ) : (
              <>
                <div>
                  Welcome to the <b>{name}</b> product repair service center! We
                  offer 24/7 same-day service for televisions and home
                  appliances. Our superior customer service team and reliability
                  has earned us a reputation for excellence. All of our staff
                  are highly trained service engineers who are capable of
                  diagnosing, troubleshooting, and replacing parts in your home
                  right in front of you.
                </div>
                <br />
                <div>
                  Whatever the problem with your <b>{name}</b> device, we are
                  here to help. We offer onsite estimates and repair costs for
                  <b>
                    {name} LCD, {name} LED, {name} UHD, and {name} Smart TVs
                  </b>
                  . We are committed to listening to our valued customers and
                  ensuring that their interests are always at the forefront of
                  all that we do. We pledge to provide the highest possible
                  level of technical support that our customers can expect in
                  all dealings with us.
                </div>
                <br />
                <div>
                  Our mission is to provide the best possible service to our
                  customers, serving the dual purpose of reducing their costs
                  and enhancing their productivity. Additionally, we want to
                  make sure that we send our technicians to your place at a time
                  which is convenient for you. If you require service support
                  for your
                  <b> {name}</b> products, we will arrange a convenient and safe
                  pick-up service solution at your home. Our technical experts
                  will assist in diagnosing the problem on call or through
                  online service and then set up the service accordingly.
                </div>
                <br />
                <div>
                  For all products, please head to our website and scroll down
                  to our &#34;Contact us&#34; section. Here you can reach out to
                  a dedicated support team anywhere in Chennai who will be happy
                  to help you find the most convenient service center near you.
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
