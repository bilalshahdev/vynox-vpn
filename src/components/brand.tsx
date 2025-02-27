import Image from "next/image";
import HighlightText from "./highlight-text";

const Brand = ({ short }: { short?: boolean }) => {
  const text = `Vynox ${short ? "" : "VPN"}`;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="flex items-center gap-2 cursor-pointer"
    >
      <Image
        src="/images/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-10 dark:block hidden"
      />
      <Image
        src="/images/logo.png"
        alt="logo"
        width={100}
        height={100}
        className="w-10 invert dark:hidden"
      />
      <HighlightText
        text={text}
        highlightWords={["VPN"]}
        className="text-xl font-semibold"
      />
    </button>
  );
};

export default Brand;
