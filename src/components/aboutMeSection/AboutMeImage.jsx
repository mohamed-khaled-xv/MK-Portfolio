
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const timeline = [
  { icon: <FaLaptopCode size={40} />, label: "Website Development" },
  { icon: <FaMobileAlt size={40} />, label: "Mobile Development" },
];

const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] flex flex-col items-center justify-center self-end mt-32">
      {timeline.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center mb-16 w-full">
          <div className="flex items-center justify-center mb-2">
            {item.icon}
          </div>
          <span className="text-white text-2xl font-body font-bold whitespace-nowrap text-center">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default AboutMeImage;
