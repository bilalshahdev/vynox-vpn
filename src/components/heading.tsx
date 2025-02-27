import { ReactNode } from "react";

const Heading = ({
  heading,
  subheading,
  isJsx = false,
}: {
  heading: string | ReactNode;
  subheading?: string;
  isJsx?: boolean;
}) => {
  const divClasses = `${
    isJsx ? "max-w-screen-md md:gap-4" : "max-w-screen-lg md:gap-8"
  } mx-auto flex flex-col gap-4  text-center my-4 md:my-8`;
  const headingClasses = `${
    isJsx ? "md:text-3xl" : "md:text-5xl"
  } text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 leading-tight`;
  return (
    <div className={divClasses}>
      <h2 className={headingClasses}>{heading}</h2>
      {subheading && <h6 className="text-muted-foreground">{subheading}</h6>}
    </div>
  );
};

export default Heading;
