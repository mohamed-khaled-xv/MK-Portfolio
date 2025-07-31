import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

const titles = ["React Native Developer","Frontend Developer"];

import PropTypes from "prop-types";

function TypingEffect({ texts, speed = 80, pause = 1200 }) {
  TypingEffect.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number,
    pause: PropTypes.number,
  };
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setDisplay(texts[index].substring(0, subIndex));
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts, speed, pause]);

  return (
    <span className="font-bold text-primaryblue text-2xl md:text-3xl lg:text-4xl transition-all duration-500">
      {display}
      <span className="animate-blink">|</span>
    </span>
  );
}

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center sm:my-10">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-special text-transparent bg-clip-text bg-gradient-to-r from-primaryblue via-cyan to-lightblue mb-2"
      >
        Hi, I&#39;m Mohamed Khaled
      </motion.h1>
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="min-h-[2.5rem]"
      >
        <TypingEffect texts={titles} />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 mt-6 sm:mt-0 md:mt-10 md:self-start sm:self-center"
      >
        <a
          href="#projects"
          className="border border-primaryblue rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-primaryblue transition-all duration-500 cursor-pointer text-white whitespace-nowrap"
        >
          My Projects
          <FaFolderOpen className="text-xl" />
        </a>
        <a
          href="https://drive.google.com/file/d/1UhBh0um6v2HNUiimgBRFLpZLh91ecs_0/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primaryblue rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-primaryblue transition-all duration-500 cursor-pointer text-white whitespace-nowrap"
        >
          Preview Resume
          <FaRegFilePdf className="text-xl" />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
