import React from "react";
import Heading from "../heading";
import { getVpnData, securityFeatures } from "@/constants/data";
import AppLinks from "../app-links";
import Image from "next/image";
import { Button } from "../ui/button";

const GetVpnSection = () => {
  return (
    <div>
      <Heading heading={"How to get and use Vynox VPN?"} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {getVpnData.map((getVpn: GetVpn) => (
          <GetVpnCard key={getVpn.id} getVpn={getVpn} />
        ))}
      </div>
      <div className="flex flex-col  items-center">
        <Button variant={"signature"}>Start VPN Free trial Now</Button>
      </div>
    </div>
  );
};

export default GetVpnSection;

const GetVpnCard = ({ getVpn }: { getVpn: GetVpn }) => {
  const { id, title, description, icon: Icon } = getVpn;
  return (
    <div className="relative flex flex-col p-8 rounded-lg shadow-lg">
      <h2 className="absolute text-9xl top-0 right-4 font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-transparent">
        {id}
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="p-4 rounded-full border-2 border-foreground bg-muted-foreground/50">
          <Icon size={24} />
        </div>
      </div>
      <div className="flex flex-col justify-center h-full gap-4 my-8">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
