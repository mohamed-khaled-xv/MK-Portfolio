

import { FaRegFilePdf } from "react-icons/fa";

const AllExperiences = () => {
  return (
    <div className="bg-[#232d3f] rounded-xl p-6 mt-8 shadow-lg border border-lightBrown max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <div>
          <span className="font-bold text-lg text-white">ITI (Information Technology Institute)</span>
          <div className="italic text-lightBrown text-sm">PHP Developer internship</div>
        </div>
        <div className="text-right md:text-left">
          <div className="text-xs text-lightBrown">Jun 2024 - Aug 2024</div>
          <div className="text-xs text-lightBrown">New Administrative Capital, Egypt</div>
        </div>
      </div>
      <ul className="list-disc ml-6 text-white text-base space-y-2">
        <li>Mastered client-side technologies (HTML, CSS, JavaScript) to build responsive and interactive user interfaces.</li>
        <li>Developed skills in MySQL for database management, SQL queries, and data handling.</li>
        <li>Gained proficiency in PHP for server-side scripting and dynamic website development, and learned the basics of the Laravel framework to create scalable web applications.</li>
      </ul>
      <div className="flex gap-4 mt-4 justify-center">
        <a
          href="https://drive.google.com/file/d/1HCTE2cyRyJzA0a1-7JCu6uYzil-765ol/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-primaryblue rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-primaryblue transition-all duration-500 cursor-pointer text-white"
        >
          <FaRegFilePdf className="text-lg" />
          Preview Certificate
        </a>
      </div>
    </div>
  );
};

export default AllExperiences;
