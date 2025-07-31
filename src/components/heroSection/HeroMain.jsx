import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="md:pt-40 sm:pt-28 pb-16 overflow-visible">
      <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4 overflow-visible">
        <HeroPic />
        <HeroText />
      </div>
    </div>
  );
};

export default HeroMain;
