import Heading from "../heading";
import locationsMap from "../../../public/images/locations-map.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { serversText } from "@/constants/data";

const ServersSection = () => {
  return (
    <div id="servers" className="pt-10">
      <Heading
        heading={serversText.heading}
        subheading={serversText.subheading}
      />
      <div className="py-8">
        <Image src={locationsMap} alt="Locations Map" />
      </div>
      <div className="flex flex-col  items-center">
        <Button variant={"signature"}>See all Servers</Button>
      </div>
    </div>
  );
};

export default ServersSection;
