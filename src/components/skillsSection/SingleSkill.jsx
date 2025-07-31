import PropTypes from "prop-types";
import { useState } from "react";

const SingleSkill = ({ imgSvg, text }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHover = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      // Reset animation after 3 seconds
      setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
    }
  };

  return (
    <div 
      className={`transition-all duration-[2000ms] ${isAnimating ? '-translate-y-36' : 'translate-y-0'}`}
      onMouseEnter={handleHover}
    >
      <div className="flex flex-col items-center gap-2 relative">
        {/* Pulsing sharp border using absolute ring, perfectly centered */}
        <div
          className={`absolute left-[50%] top-[38%] -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] rounded-full z-0 ${isAnimating ? 'pulse-border-green' : 'pulse-border'} group-hover:pulse-border-gray`}
          style={{
            border: `4px solid ${isAnimating ? '#22c55e' : '#22d3ee'}`,
            boxSizing: "border-box",
          }}
        ></div>
        <div className={`bg-white h-[100px] w-[100px] flex items-center justify-center rounded-full hover:scale-105 transform transition-all duration-500 text-6xl border-4 relative z-10 ${isAnimating ? 'text-successgreen border-white' : 'text-cyan hover:text-darkgray border-lightcyan'}`}>
          {imgSvg}
        </div>
        <p className={`font-bold relative z-10 transition-colors duration-[2000ms] ${isAnimating ? 'text-successgreen' : 'text-white'}`}>{text}</p>
      </div>

    </div>
  );
};

SingleSkill.propTypes = {
  imgSvg: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleSkill;