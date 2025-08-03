import Image from "next/image";
import aboutImg from "@/assets/images/aboutimg.jpg";
import Link from "next/link";
import autoprefixer from "autoprefixer";

const HomeAbout = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-black">
        Trusted LED, LCD & Smart TV Repair Services in Chennai
      </h1>
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
        <div className="text-black text-xl p-2">
          <section>
            Is your TV not turning on, showing a blank screen, or having
            audio-video issues? You are at the right place! At
            customercareinchennai.com, we help you find verified TV service
            centre’s in Chennai for LED TVs, LCD TVs, UHD TVs and Smart TVs–
            fast, affordable, and reliable.
          </section>
          <br />
          <br />
          <Link href={"/aboutus"}>
            <span className="px-4 py-2 bg-[#F86E4E] rounded-3xl text-white">
              Read More
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-black">
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
      </div>
    </>
  );
};

export default HomeAbout;
