import React from "react";
import Heading from "../heading";
import { securityFeatures } from "@/constants/data";
import AppLinks from "../app-links";
import Image from "next/image";

const SecurityFeatures = () => {
  return (
    <div>
      <Heading
        heading={
          "Get free VPN that comes with advanced privacy and security tools"
        }
        subheading="Avast Free Antivirus is more than just an antivirus — it also includes these specialist tools:"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {securityFeatures.map((feature: SecurityFeature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <AppLinks />
      </div>
    </div>
  );
};

export default SecurityFeatures;

const FeatureCard = ({ feature }: { feature: SecurityFeature }) => {
  const { title, description, icon } = feature;
  return (
    <div className="flex flex-col items-center bg-secondary p-8 rounded-lg shadow-lg text-center">
      <div className="w-16 h-16 flex justify-center items-center">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
    </div>
  );
};
