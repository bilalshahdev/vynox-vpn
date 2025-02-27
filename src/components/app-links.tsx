import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";
import { Button } from "./ui/button";
import { appLinks } from "@/constants/data";
import Link from "next/link";

const AppLinks = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Link
        href={appLinks.playstore}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button variant={"signature"} className="w-full">
          <div className="flex items-center gap-2">
            <BiLogoPlayStore /> Download Now
          </div>
        </Button>
      </Link>

      <Link
        href={appLinks.appstore}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button className="w-full">
          <div className="flex items-center gap-2">
            <BiLogoApple /> Download Now
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default AppLinks;
