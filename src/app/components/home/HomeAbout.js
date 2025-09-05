import Image from "next/image";
import aboutImg from "@/assets/images/HomeAbuotImg.jpg";
import Link from "next/link";
import autoprefixer from "autoprefixer";

const HomeAbout = () => {
  const aboutData = [
    {
      title: "Expert Technicians in Chennai",
      description:
        "Our certified and experienced technicians in Chennai specialize in repairing Samsung, LG, Panasonic, Mi, VU, TCL, Sony, Toshiba, Hisense, OnePlus, Haier, BPL, Onida, and Redmi TVs and appliances, ensuring accurate diagnosis and reliable service.",
    },
    {
      title: "Same-Day Doorstep Service",
      description:
        "We provide same-day doorstep repair in Chennai for TVs, washing machines, refrigerators, and AC, delivering quick and hassle-free solutions.",
    },
    {
      title: "Genuine Spare Parts & Reliable Service",
      description:
        "We use 100% original spare parts for all brands to guarantee long-lasting performance, quality service, and customer satisfaction.",
    },
  ];

  return (
    <>
      <h1 className="mt-4 text-center md:text-3xl text-xl font-bold text-black">
        Chennai Home Appliance Service -TV, AC, Washing Machine & Refrigerator
        Repair
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] px-2 bg-white">
        <div className="sm:flex sm:justify-center flex items-center">
          <Image
            src={aboutImg}
            alt="about Image"
            // className="dark:invert"
            width={500}
            height={autoprefixer}
            priority
          />
        </div>
        <div className="text-black text-xl p-2 flex items-center">
          {/* <section>
            Is your TV not turning on, showing a blank screen, or having
            audio-video issues? You are at the right place! At
            customercareinchennai.com, we help you find verified TV service
            centre’s in Chennai for LED TVs, LCD TVs, UHD TVs and Smart TVs–
            fast, affordable, and reliable.
          </section> */}
          <div>
            {aboutData.map((data, index) => (
              <section key={index} className="mb-2">
                <h3 className="font-bold text-xl">{data.title}</h3>
                <p className="text-base">{data.description}</p>
              </section>
            ))}
          </div>
          {/* <br />
          <br />
          <Link href={"/aboutus"}>
            <span className="px-4 py-2 bg-blue-600 rounded-3xl text-white">
              Read More
            </span>
          </Link> */}
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 text-black">
        <section>
          <h2 className="text-center font-bold text-xl">
            Expert TV Repair Services for All Leading Brands
          </h2>
          <section className="px-4">
            <p>
              Our network includes authorized and experienced technicians for
              major brands such as:
            </p>
            <ul className="list-disc pl-5">
              <li>LG TV Service Center in Chennai</li>
              <li>TCL TV Service Center in Chennai</li>
              <li>Samsung TV Service Center in Chennai</li>
              <li>Panasonic TV Service Center in Chennai</li>
              <li>MI TV Service Center in Chennai</li>
              <li>Vu TV Service Center in Chennai</li>
              <li>Sony TV Service Center in Chennai</li>
              <li>Toshiba TV Service Center in Chennai</li>
              <li>Hisense TV Service Center in Chennai</li>
              <li>OnePlus TV Service Center in Chennai</li>
              <li>Haier TV Service Center in Chennai</li>
              <li>BPL TV Service Center in Chennai</li>
              <li>Onida TV Service Center in Chennai</li>
              <li>Redmi TV Service Center in Chennai</li>
            </ul>
            <br />
            <p>
              Get access to genuine spare parts, warranty support, and doorstep
              repair options across Chennai.
            </p>
          </section>
        </section>
        <section>
          <h2 className="text-center font-bold text-xl">
            Common TV Problems We Fix
          </h2>
          <section className="px-4">
            <p>
              Our listed service centers handle all major TV issues, including:
            </p>
            <ul className="list-disc pl-5">
              <li>TV not powering on</li>
              <li>No display / Blank screen</li>
              <li>Lines on screen / Screen damage</li>
              <li>No sound or distorted audio</li>
              <li>HDMI, AV port, or remote control issues</li>
              <li>Smart TV app or connectivity problems</li>
              <li>TV Automatically Turns On/Off</li>
              <li>Horizontal Line Across the Screen</li>
              <li>Sound Works, But No Picture</li>
              <li>Picture Visible, But No Sound</li>
              <li>
                TV installation and uninstallation services for all models
              </li>
            </ul>
            <br />
            <p>
              Get access to genuine spare parts, warranty support, and doorstep
              repair options across Chennai.
            </p>
          </section>
        </section>
      </div> */}
    </>
  );
};

export default HomeAbout;
