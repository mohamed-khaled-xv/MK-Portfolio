import { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onClick,
  style = {}
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={`${className} bg-gray-700 animate-pulse flex items-center justify-center`}
          style={style}
        >
          <div className="text-gray-500 text-sm">Loading...</div>
        </div>
      )}
      
      {hasError ? (
        <div 
          className={`${className} bg-gray-800 flex items-center justify-center`}
          style={style}
        >
          <div className="text-gray-400 text-sm">Failed to load</div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
          style={style}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
