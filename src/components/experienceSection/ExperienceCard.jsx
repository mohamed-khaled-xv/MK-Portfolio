import { PiCertificate } from "react-icons/pi";
import PropTypes from "prop-types";

const ExperienceCard = ({
  companyName,
  position,
  duration,
  location,
  description,
  certificateUrl,
  logo,
}) => {
  return (
    <div className="bg-[#232d3f] rounded-xl p-6 mt-8 shadow-lg border border-lightBrown max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
        {/* Company Logo and Info */}
        <div className="flex mt-[-12px] gap-4 items-start">
          {logo && (
            <img
              src={logo}
              alt={companyName}
              className="w-12 h-12 object-contain rounded-lg"
            />
          )}
          <div>
            <span className="font-bold text-lg text-white">{companyName}</span>
            <div className="italic text-lightBrown text-sm">{position}</div>
          </div>
        </div>

        {/* Duration and Location */}
        <div className="text-right md:text-left">
          <div className="text-xs text-lightBrown">{duration}</div>
          <div className="text-xs text-lightBrown">{location}</div>
        </div>
      </div>

      {/* Description */}
      <ul className="list-disc ml-6 text-white text-base space-y-2">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>{description}</li>
        )}
      </ul>

      {/* Certificate Button */}
      {certificateUrl && (
        <div className="flex gap-4 mt-4 justify-center">
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primaryblue rounded-full py-2 px-4 text-lg flex gap-2 items-center hover:bg-primaryblue transition-all duration-500 cursor-pointer text-white"
          >
            Preview Certificate
            <PiCertificate className="text-[28px]" />
          </a>
        </div>
      )}
    </div>
  );
};

ExperienceCard.propTypes = {
  companyName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  certificateUrl: PropTypes.string,
  logo: PropTypes.string,
};

export default ExperienceCard;
