import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaNodeJs, FaJava, FaPython, FaReact
} from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";
import { SiReactquery, SiReduxsaga, SiSqlite, SiTypescript, SiRedux } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";

const skills = [
  // Programming Languages
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Python", icon: FaPython },
  { skill: "Java", icon: FaJava },

  // Frameworks & Libraries
  { skill: "ReactJS", icon: FaReact },
  { skill: "React Native", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "Redux Saga", icon: SiReduxsaga },
  { skill: "React Query", icon: SiReactquery },
  { skill: "Node.js", icon: FaNodeJs },

  // Styling
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },

  // Databases
  { skill: "MongoDB", icon: DiMongodb },
  { skill: "SQLite", icon: SiSqlite },
  { skill: "MySQL", icon: DiMysql },
  { skill: "Firebase", icon: IoLogoFirebase },

  // Tools & Version Control
  { skill: "Git/Github", icon: FaGitAlt },
];


const AllSkills = () => {
  const skillSet = [...skills, ...skills, ...skills]; // Triplicate to ensure seamless looping

  return (
    <div className="w-full py-4 bg-transparent select-none">
      <motion.div
        className="flex gap-8"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30, // Adjust duration for speed
          ease: "linear",
        }}
      >
        {skillSet.map((item, index) => (
          <div key={index} className="min-w-[120px]">
            <SingleSkill text={item.skill} imgSvg={<item.icon size={40} />} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllSkills;
