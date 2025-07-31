import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative lg:bg-darkestgray sm:absolute sm:top-[100%] text-center sm:left-0 sm:right-0 sm:mx-auto lg:text-md sm:text-xl sm:bg-darkestgray/40 sm:backdrop-blur-3xl sm:w-full">
      {links.map((link, index) => {
        return (
          <li key={index} className="group sm:border-b sm:border-bordergray sm:py-2 lg:border-none lg:py-0">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 sm:group-hover:w-[20%] lg:group-hover:w-[100%] h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
