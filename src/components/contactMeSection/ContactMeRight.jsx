import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      {/* Modern animated contact icons */}
      <div className="flex gap-6 items-center justify-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan to-primaryblue rounded-full flex items-center justify-center animate-pulse-slow">
          <HiMail className="text-white text-2xl" />
        </div>
        <div className="w-20 h-20 bg-gradient-to-r from-lightcyan to-cyan rounded-full flex items-center justify-center animate-bounce" style={{animationDuration: '2s'}}>
          <HiPhone className="text-white text-3xl" />
        </div>
        <div className="w-16 h-16 bg-gradient-to-r from-primaryblue to-deepcyan rounded-full flex items-center justify-center animate-pulse" style={{animationDuration: '1.5s'}}>
          <HiLocationMarker className="text-white text-2xl" />
        </div>
      </div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
