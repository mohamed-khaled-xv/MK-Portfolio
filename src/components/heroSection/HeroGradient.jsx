const HeroGradient = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {/* Original gradient shadows */}
      <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
      <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
      <div className="shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50 "></div>
      
      {/* Organic floating blob shapes with contour effects */}
      <div className="absolute inset-0 -z-5 overflow-visible pointer-events-none">

        
        {/* Realistic Falling Stars/Meteors */}
        <div className="absolute top-[5%] left-[10%] animate-meteor-fall" style={{animationDelay: '0s'}}>
          {/* Bright star head */}
          <div className="absolute w-2 h-2 bg-white rounded-full blur-sm opacity-100" style={{boxShadow: '0 0 10px #ffffff, 0 0 20px #22d3ee'}}></div>
          {/* Long glowing tail */}
          <div className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-cyan/80 to-white transform -rotate-45 origin-top blur-sm"></div>
          <div className="absolute w-1 h-30 bg-gradient-to-t from-transparent via-cyan/40 to-white/60 transform -rotate-45 origin-top blur-md"></div>
        </div>
        
        <div className="absolute top-[8%] left-[50%] animate-meteor-fall-slow" style={{animationDelay: '1.5s'}}>
          {/* Bright star head */}
          <div className="absolute w-3 h-3 bg-warningyellow rounded-full blur-sm opacity-100" style={{boxShadow: '0 0 12px #FBBF24, 0 0 25px #EF4444'}}></div>
          {/* Long glowing tail */}
          <div className="absolute w-0.5 h-22 bg-gradient-to-t from-transparent via-warningyellow/80 to-warningyellow transform -rotate-45 origin-top blur-sm"></div>
          <div className="absolute w-1 h-32 bg-gradient-to-t from-transparent via-lightred/40 to-warningyellow/60 transform -rotate-45 origin-top blur-md"></div>
        </div>
        
        <div className="absolute top-[2%] left-[75%] animate-meteor-fall-fast" style={{animationDelay: '2.8s'}}>
          {/* Bright star head */}
          <div className="absolute w-1.5 h-1.5 bg-lightblue rounded-full blur-sm opacity-100" style={{boxShadow: '0 0 8px #60A5FA, 0 0 15px #06B6D4'}}></div>
          {/* Long glowing tail */}
          <div className="absolute w-0.5 h-18 bg-gradient-to-t from-transparent via-lightblue/80 to-lightblue transform -rotate-45 origin-top blur-sm"></div>
          <div className="absolute w-1 h-25 bg-gradient-to-t from-transparent via-cyan/40 to-lightblue/60 transform -rotate-45 origin-top blur-md"></div>
        </div>
        
        <div className="absolute top-[12%] left-[25%] animate-meteor-fall" style={{animationDelay: '4s'}}>
          {/* Bright star head */}
          <div className="absolute w-2 h-2 bg-successgreen rounded-full blur-sm opacity-100" style={{boxShadow: '0 0 10px #10B981, 0 0 20px #22D3EE'}}></div>
          {/* Long glowing tail */}
          <div className="absolute w-0.5 h-21 bg-gradient-to-t from-transparent via-successgreen/80 to-successgreen transform -rotate-45 origin-top blur-sm"></div>
          <div className="absolute w-1 h-31 bg-gradient-to-t from-transparent via-lightcyan/40 to-successgreen/60 transform -rotate-45 origin-top blur-md"></div>
        </div>
        
        <div className="absolute top-[0%] left-[65%] animate-meteor-fall-slow" style={{animationDelay: '5.5s'}}>
          {/* Bright star head */}
          <div className="absolute w-3 h-3 bg-white rounded-full blur-sm opacity-100" style={{boxShadow: '0 0 15px #ffffff, 0 0 30px #22d3ee, 0 0 45px #60a5fa'}}></div>
          {/* Long glowing tail */}
          <div className="absolute w-1 h-25 bg-gradient-to-t from-transparent via-white/90 to-white transform -rotate-45 origin-top blur-sm"></div>
          <div className="absolute w-1.5 h-35 bg-gradient-to-t from-transparent via-lightcyan/50 to-white/70 transform -rotate-45 origin-top blur-md"></div>
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute top-[25%] left-[10%] animate-shooting-star" style={{animationDelay: '0.5s'}}>
          <div className="w-4 h-1 bg-gradient-to-r from-cyan via-lightcyan to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 w-8 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-60"></div>
        </div>
        <div className="absolute top-[45%] left-[30%] animate-shooting-star" style={{animationDelay: '2.5s'}}>
          <div className="w-6 h-1 bg-gradient-to-r from-cyan via-lightcyan to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-60"></div>
        </div>
        
        {/* Additional Cyan Shooting Stars around image area */}
        <div className="absolute top-[35%] left-[55%] animate-shooting-star" style={{animationDelay: '1.2s'}}>
          <div className="w-5 h-1 bg-gradient-to-r from-lightcyan via-cyan to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-70"></div>
        </div>
        <div className="absolute top-[15%] left-[45%] animate-shooting-star" style={{animationDelay: '3.8s'}}>
          <div className="w-4 h-1 bg-gradient-to-r from-cyan via-deepcyan to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 w-8 h-1 bg-gradient-to-r from-transparent via-lightcyan to-transparent opacity-60"></div>
        </div>
        <div className="absolute top-[55%] left-[40%] animate-shooting-star" style={{animationDelay: '4.5s'}}>
          <div className="w-6 h-1 bg-gradient-to-r from-deepcyan via-cyan to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-transparent via-lightcyan to-transparent opacity-65"></div>
        </div>
        <div className="absolute top-[60%] left-[65%] animate-shooting-star" style={{animationDelay: '6.2s'}}>
          <div className="w-3 h-1 bg-gradient-to-r from-lightcyan via-cyan to-transparent blur-sm"></div>
          <div className="absolute top-0 left-0 w-6 h-1 bg-gradient-to-r from-transparent via-deepcyan to-transparent opacity-55"></div>
        </div>
        
        {/* Large slow-moving background gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-darkblue/10 via-transparent to-deepcyan/10 animate-spin" style={{animationDuration: '40s'}}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-cyan/5 via-transparent to-warningyellow/5 animate-spin" style={{animationDuration: '50s', animationDirection: 'reverse'}}></div>
      </div>
    </div>
  );
};

export default HeroGradient;
