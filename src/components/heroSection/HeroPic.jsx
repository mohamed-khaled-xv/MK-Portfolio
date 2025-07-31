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
            src="../../public/images/Profile_Resume.png"
            alt="Mohamed Khaled"
            className="max-h-[450px] w-auto relative z-10 rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Simple visible test elements - no blur, solid colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Test visible circles */}
        <div className="absolute top-[20%] left-[20%] w-16 h-16 bg-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-[60%] right-[20%] w-20 h-20 bg-orange rounded-full animate-bounce"></div>
        <div className="absolute bottom-[30%] left-[30%] w-12 h-12 bg-blue-500 rounded-full animate-ping"></div>
        
        {/* Test geometric shapes */}
        <div className="absolute top-[10%] right-[30%] w-8 h-8 bg-cyan rotate-45 animate-spin"></div>
        <div className="absolute bottom-[40%] right-[10%] w-6 h-6 bg-orange animate-pulse"></div>
        
        {/* Test lines */}
        <div className="absolute top-[30%] left-[10%] w-1 h-20 bg-cyan animate-pulse"></div>
        <div className="absolute bottom-[50%] right-[40%] w-20 h-1 bg-orange animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
