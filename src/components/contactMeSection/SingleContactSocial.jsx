const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center hover:border-cyan hover:text-cyan transition-all duration-300 cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
