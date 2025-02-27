import Image from "next/image";
import PhoneEllipseImg from "../../../public/images/phone-ellipse.png";
import VpnBenefits from "../vpn-benefits";

const VpnBenefitsSection = () => {
  return (
    <div className="flex items-center gap-8">
      {/* Left Image Section */}
      <div className="hidden md:block w-full">
        <Image alt="Hero Image" src={PhoneEllipseImg} />
      </div>

      {/* Right Text Section */}
      <VpnBenefits />
    </div>
  );
};

export default VpnBenefitsSection;
