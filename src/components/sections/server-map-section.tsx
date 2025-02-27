import Heading from "../heading";
import locationsMap from "../../../public/images/locations-map.png";
import Image from "next/image";
import { Button } from "../ui/button";

const ServerMapSection = () => {
  return (
    <div>
      <Heading
        heading={"Our Global Fast Server Network"}
        subheading="You get 5 locations to choose from on a free version, no traffic, bandwidth or time limits. Our servers provide high speeds
(same level as premium paid VPNs) with no registration or any personal data collection."
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

export default ServerMapSection;
