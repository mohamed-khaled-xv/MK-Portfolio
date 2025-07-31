import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { SiReduxsaga } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

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


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center relative group cursor-pointer"
          >
            {/* Pulsing background effect */}
            <div className="absolute -inset-x-2 -inset-y-3 rounded-2xl bg-primaryblue opacity-20 animate-pulse group-hover:bg-successgreen group-hover:animate-pulse transition-all duration-1000"></div>
            
            <item.icon className="text-7xl text-orange group-hover:text-successgreen transition-colors duration-300 relative z-10" />
            <p className="text-center mt-4 text-orange group-hover:text-successgreen transition-colors duration-300 relative z-10">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
