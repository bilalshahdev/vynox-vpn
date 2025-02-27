import { BiLogoApple, BiLogoPlayStore } from "react-icons/bi";
import { Button } from "./ui/button";

const AppLinks = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <Button variant={"signature"} className="w-full">
        <div className="flex items-center gap-2">
          <BiLogoPlayStore /> Download Now
        </div>
      </Button>
      <Button className="w-full">
        <div className="flex items-center gap-2">
          <BiLogoApple /> Download Now
        </div>
      </Button>
    </div>
  );
};

export default AppLinks;
