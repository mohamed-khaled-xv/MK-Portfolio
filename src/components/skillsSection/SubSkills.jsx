import { FaCode, FaReact, FaJs, FaGitAlt, FaDatabase, FaMobile } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNodedotjs } from "react-icons/si";
import { BiCodeBlock } from "react-icons/bi";

const SubSkills = () => {
  return (
    <div className="relative py-8 sm:py-6 md:py-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkblue/10 via-cyan/5 to-primaryblue/10"></div>
      
      {/* Floating programming-related icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute text-cyan/40 animate-float" style={{top: '20%', left: '15%', animationDelay: '0s'}}>
          <FaReact className="text-2xl" />
        </div>
        <div className="absolute text-lightcyan/50 animate-drift" style={{top: '45%', left: '75%', animationDelay: '1s'}}>
          <FaJs className="text-xl" />
        </div>
        <div className="absolute text-primaryblue/60 animate-float-reverse" style={{top: '65%', left: '25%', animationDelay: '2s'}}>
          <BiCodeBlock className="text-lg" />
        </div>
        <div className="absolute text-cyan/40 animate-float" style={{top: '30%', left: '60%', animationDelay: '0.5s'}}>
          <SiTypescript className="text-lg" />
        </div>
        <div className="absolute text-lightcyan/50 animate-drift" style={{top: '70%', left: '45%', animationDelay: '3s'}}>
          <FaGitAlt className="text-xl" />
        </div>
        <div className="absolute text-primaryblue/40 animate-float-reverse" style={{top: '15%', left: '40%', animationDelay: '1.5s'}}>
          <SiTailwindcss className="text-lg" />
        </div>
        <div className="absolute text-cyan/30 animate-float" style={{top: '50%', left: '30%', animationDelay: '2.5s'}}>
          <FaDatabase className="text-lg" />
        </div>
        <div className="absolute text-lightcyan/40 animate-drift" style={{top: '80%', left: '65%', animationDelay: '4s'}}>
          <FaMobile className="text-xl" />
        </div>
        <div className="absolute text-primaryblue/50 animate-float-reverse" style={{top: '25%', left: '80%', animationDelay: '3.5s'}}>
          <SiNodedotjs className="text-lg" />
        </div>
      </div>

      {/* Central decorative line with code symbols */}
      <div className="relative flex items-center justify-center">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent max-w-xs"></div>
        <div className="mx-4 flex items-center justify-center w-8 h-8 bg-gradient-to-r from-cyan to-primaryblue rounded-full animate-pulse-slow">
          <FaCode className="text-white text-sm" />
        </div>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent max-w-xs"></div>
      </div>

      {/* Subtle animated code brackets pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none text-cyan">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono animate-pulse"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${40 + Math.sin(i) * 15}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          >
            {i % 3 === 0 ? '{' : i % 3 === 1 ? '}' : '</>'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSkills;
