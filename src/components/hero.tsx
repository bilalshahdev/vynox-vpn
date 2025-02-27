import Image from "next/image";
import HeroImg2 from "../../public/images/hero-img-2.png";
import Vector from "../../public/images/hero-vector.png";
import AppLinks from "./app-links";
import HighlightText from "./highlight-text";

const Hero = () => {
  return (
    <>
      <div className="relative grid grid-cols-1 mt-4 md:mt-0 space-y-0 md:space-y-0 md:grid-cols-2 overflow-hidden">
        {/* Background Vector Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={Vector}
            alt="Background Vector"
            layout="fill"
            objectFit="cover"
            className="opacity-50" // Adjust opacity if needed
          />
        </div>

        {/* Left Section: Hero Text */}
        <div className="flex flex-col gap-4 md:gap-8 justify-center relative z-10">
          <HighlightText
            text="Huge Global Network of Fast Vynox VPN"
            highlightWords={["Global", "Network", "Vynox", "VPN"]}
            className="text-3xl md:text-6xl font-semibold leading-tight"
          />
          <p className="text-l md:text-2xl">
            See VynoxVPN everywhere to make it easier for you when you move
            locations.
          </p>
          <AppLinks />
        </div>

        {/* Right Section: Hero Image */}
        <div className="relative z-10 hidden md:block">
          <Image alt="Hero Image" src={HeroImg2} />
        </div>
      </div>
    </>
  );
};

export default Hero;
