import { Icons } from "@/assets/icons/icons";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-white flex items-center justify-center">
      <div>
        <div className="text-black text-3xl font-bold">404 NotFound</div>
        <Link href={"/"} className="text-center text-xl">
          <div className="text-blue-500 hover:text-blue-600 underline  transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300">
            Return to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
