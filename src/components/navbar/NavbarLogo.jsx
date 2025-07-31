const NavbarLogo = () => {
  return (
    <div className="-my-2">
      <div className="md:block sm:hidden">
        <img 
          src="/images/MK-SVG.svg" 
          alt="MK Logo" 
          className="h-16 w-auto"
        />
      </div>
      <div className="md:hidden sm:block">
        <img 
          src="/images/MK-SVG.svg" 
          alt="MK Logo" 
          className="h-14 w-auto"
        />
      </div>
    </div>
  );
};

export default NavbarLogo;
