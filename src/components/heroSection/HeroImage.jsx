const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className=" h-full w-full">
        <img
          src="/images/Profile_Resume.jpg"
          alt="Mohamed Khaled"
          className="w-auto h-auto md:max-w-[570px] sm:max-w-[380px] absolute bottom-[0px] z-10 left-[50%] -translate-x-[50%]"
          loading="eager"
        />
        
        {/* Modern floating background elements */}
        <div className="w-full h-full absolute bottom-0 -z-5 overflow-hidden">
          {/* Large gradient orbs - more visible */}
          <div className="absolute top-[10%] left-[5%] w-48 h-48 bg-gradient-to-r from-cyan to-blue-600 rounded-full opacity-60 blur-2xl animate-pulse"></div>
          <div className="absolute top-[40%] right-[5%] w-40 h-40 bg-gradient-to-r from-orange-500 to-cyan rounded-full opacity-70 blur-xl animate-bounce"></div>
          <div className="absolute bottom-[20%] left-[15%] w-36 h-36 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full opacity-65 blur-lg animate-ping"></div>
          <div className="absolute top-[60%] right-[20%] w-32 h-32 bg-gradient-to-r from-cyan to-orange rounded-full opacity-50 blur-xl animate-pulse"></div>
          
          {/* Floating geometric shapes - larger and more visible */}
          <div className="absolute top-[5%] right-[15%] w-24 h-24 border-4 border-cyan opacity-70 rotate-45 animate-spin"></div>
          <div className="absolute top-[35%] left-[2%] w-20 h-20 border-4 border-orange opacity-60 rounded-full animate-bounce"></div>
          <div className="absolute bottom-[35%] right-[8%] w-16 h-16 bg-cyan opacity-50 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-[50%] left-[10%] w-12 h-12 bg-orange opacity-60 rounded-full animate-bounce"></div>
          
          {/* Animated lines/paths - thicker and more visible */}
          <div className="absolute top-[15%] left-[25%] w-1 h-32 bg-gradient-to-b from-transparent via-cyan to-transparent opacity-70 animate-pulse"></div>
          <div className="absolute bottom-[25%] right-[25%] w-24 h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-70 animate-pulse"></div>
          <div className="absolute top-[50%] left-[35%] w-1 h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60 animate-pulse"></div>
          
          {/* Large background circles - more prominent */}
          <div className="absolute top-[5%] left-[40%] w-80 h-80 bg-blue-600 opacity-20 rounded-full -translate-x-1/2 animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-[10%] right-[40%] w-64 h-64 bg-cyan opacity-25 rounded-full translate-x-1/2 animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
