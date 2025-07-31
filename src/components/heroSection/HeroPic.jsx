import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center relative"
    >
      <div className="relative">
        {/* Pulsing gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan via-lightcyan to-primaryblue rounded-2xl animate-pulse-slow"></div>
        {/* Static content container */}
        <div className="relative p-1">
          <img
            src="/images/Profile_Resume.jpg"
            alt="Mohamed Khaled"
            className="max-h-[450px] w-auto relative z-10 rounded-xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
