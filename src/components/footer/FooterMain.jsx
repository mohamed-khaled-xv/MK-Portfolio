import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div>
      {/* White separator line */}
      <div className="w-full h-[2px] bg-white"></div>
      {/* Footer section with darker background */}
      <div className="bg-darkestgray px-4 pt-2">
        <div className="max-w-[1200px] mx-auto text-center mt-2 mb-4">
        <p className="text-sm text-lightgrey">
          Built with <span className="text-cyan font-semibold">React.js</span> • <span className="text-cyan font-semibold">Vite</span> • <span className="text-cyan font-semibold">Tailwind CSS</span>
        </p>
      </div>
      <p className="max-w-[1200px] mx-auto text-center mt-2 pb-5 text-sm text-lightBrown">
        © 2025 MK | All Rights Reserved.
      </p>
      </div>
    </div>
  );
};

export default FooterMain;
