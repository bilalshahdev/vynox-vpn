import AppLinks from "../app-links";
import Faqs from "../faqs";

const FaqSection = () => {
  return (
    <div id="faqs" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 pt-20">
      <div>
        <div className="max-w-screen-md md:gap-4 mx-auto flex flex-col gap-4 my-4 md:my-8">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50 leading-tight">
            Have questions? <br/>We have answers!
          </h2>
          <h6 className="text-muted-foreground">
            Want to know more? You can email us anytime at @web.support@lorem.pk
          </h6>

          <AppLinks />
        </div>
      </div>
      <div className="md:col-span-2">
        <Faqs />{" "}
      </div>
    </div>
  );
};

export default FaqSection;
