
import ExperienceCard from "./ExperienceCard";
import ikenLogo from "../../assets/iken-logo.png";
import itiLogo from "../../assets/iti-logo.png";

const AllExperiences = () => {
  const experiences = [
    {
      companyName: "IKEN Technology",
      position: "React Native Intern",
      duration: "Oct 2025 - Present",
      location: "Cairo, Egypt",
      description: [
        "Collaborated within an Agile team using Azure DevOps for task management and sprint planning.",
        "Contributed to the development of real mobile applications for multiple clients, collaborating closely with backend and QA teams to ensure efficient and high-quality project delivery.",
      ],
      logo: ikenLogo,
    },
    {
      companyName: "ITI (Information Technology Institute)",
      position: "Full Stack Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "New Administrative Capital, Egypt",
      description: [
        "Mastered client-side technologies (HTML, CSS, JavaScript) to build responsive and interactive user interfaces.",
        "Developed skills in MySQL for database management, SQL queries, and data handling.",
        "Gained proficiency in PHP for server-side scripting and dynamic website development, and learned the basics of the Laravel framework to create scalable web applications.",
      ],
      logo: itiLogo,
      certificateUrl:
        "https://drive.google.com/file/d/1HCTE2cyRyJzA0a1-7JCu6uYzil-765ol/view?usp=sharing",
    },
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  );
};

export default AllExperiences;
