import { useState } from 'react';

export function ProfileIllustration() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="aspect-[3/4] w-full max-w-sm bg-muted overflow-hidden cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 300 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="300" height="400" fill="#f8f8f8" />
        
        {/* Geometric shapes representing a minimalist portrait */}
        <circle 
          cx="150" 
          cy="120" 
          r="60" 
          fill={isHovered ? "#646cff" : "#e5e5e5"}
          className="transition-all duration-700 ease-in-out"
          style={{ opacity: isHovered ? 0.8 : 1 }}
        />
        
        {/* Body/torso as geometric shape */}
        <rect 
          x="100" 
          y="180" 
          width="100" 
          height="120" 
          rx="20" 
          fill={isHovered ? "#398007" : "#d0d0d0"}
          className="transition-all duration-700 ease-in-out delay-100"
          style={{ opacity: isHovered ? 0.7 : 1 }}
        />
        
        {/* Abstract design elements */}
        <rect 
          x="80" 
          y="320" 
          width="140" 
          height="40" 
          rx="20" 
          fill={isHovered ? "#8b8b8b" : "#e0e0e0"}
          className="transition-all duration-700 ease-in-out delay-200"
          style={{ opacity: isHovered ? 0.6 : 1 }}
        />
        
        {/* Small decorative elements */}
        <circle 
          cx="70" 
          cy="100" 
          r="8" 
          fill={isHovered ? "#769269" : "#e5e5e5"}
          className="transition-all duration-700 ease-in-out delay-300"
        />
        
        <circle 
          cx="230" 
          cy="150" 
          r="12" 
          fill={isHovered ? "#828282" : "#e5e5e5"}
          className="transition-all duration-700 ease-in-out delay-400"
        />
        
        <rect 
          x="40" 
          y="250" 
          width="20" 
          height="20" 
          fill={isHovered ? "#646cff" : "#e5e5e5"}
          className="transition-all duration-700 ease-in-out delay-500"
        />
        
        <rect 
          x="240" 
          y="280" 
          width="15" 
          height="30" 
          fill={isHovered ? "#398007" : "#e5e5e5"}
          className="transition-all duration-700 ease-in-out delay-600"
        />
      </svg>
    </div>
  );
}