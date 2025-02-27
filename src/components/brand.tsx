import Image from "next/image";
import HighlightText from "./highlight-text";
import Link from "next/link";

const Brand = ({short}: {short?: boolean}) => {
  const text = `Vynox ${short ? "" : "VPN"}`;
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-10"
      />
      <HighlightText
        text={text}
        highlightWords={["VPN"]}
        className="text-xl font-semibold"
      />
    </Link>
  );
};

export default Brand;
