import React from "react";
import Heading from "../heading";
import { featuresTexts, features } from "@/constants/data";
import AppLinks from "../app-links";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div id="features" className="pt-10">
      <Heading
        heading={
          featuresTexts.heading
        }
        subheading={featuresTexts.subheading}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {features.map((feature: SecurityFeature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <AppLinks />
      </div>
    </div>
  );
};

export default FeaturesSection;

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
