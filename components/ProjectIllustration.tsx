import { useState } from 'react';

interface ProjectIllustrationProps {
  variant: 'comunica' | 'vertown' | 'isvor';
  title: string;
}

export function ProjectIllustration({ variant, title }: ProjectIllustrationProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getIllustration = () => {
    switch (variant) {
      case 'comunica':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width="400" height="300" fill="#f8f8f8" />
            
            {/* Communication nodes */}
            <circle 
              cx="100" 
              cy="80" 
              r="25" 
              fill={isHovered ? "#646cff" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out"
            />
            <circle 
              cx="300" 
              cy="120" 
              r="20" 
              fill={isHovered ? "#398007" : "#e0e0e0"}
              className="transition-all duration-700 ease-in-out delay-100"
            />
            <circle 
              cx="200" 
              cy="200" 
              r="30" 
              fill={isHovered ? "#8b8b8b" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-200"
            />
            
            {/* Connection lines */}
            <line 
              x1="125" y1="80" x2="175" y2="200" 
              stroke={isHovered ? "#646cff" : "#d0d0d0"} 
              strokeWidth="2"
              className="transition-all duration-700 ease-in-out delay-300"
            />
            <line 
              x1="280" y1="120" x2="230" y2="200" 
              stroke={isHovered ? "#398007" : "#d0d0d0"} 
              strokeWidth="2"
              className="transition-all duration-700 ease-in-out delay-400"
            />
            
            {/* Data visualization elements */}
            <rect 
              x="50" 
              y="220" 
              width="80" 
              height="40" 
              rx="8" 
              fill={isHovered ? "#769269" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-500"
            />
            <rect 
              x="270" 
              y="240" 
              width="60" 
              height="30" 
              rx="6" 
              fill={isHovered ? "#828282" : "#e0e0e0"}
              className="transition-all duration-700 ease-in-out delay-600"
            />
          </svg>
        );
        
      case 'vertown':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width="400" height="300" fill="#f8f8f8" />
            
            {/* Urban/sustainability elements */}
            <rect 
              x="80" 
              y="120" 
              width="60" 
              height="100" 
              fill={isHovered ? "#398007" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out"
            />
            <rect 
              x="160" 
              y="80" 
              width="50" 
              height="140" 
              fill={isHovered ? "#646cff" : "#e0e0e0"}
              className="transition-all duration-700 ease-in-out delay-100"
            />
            <rect 
              x="230" 
              y="140" 
              width="55" 
              height="80" 
              fill={isHovered ? "#8b8b8b" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-200"
            />
            
            {/* Connecting elements */}
            <circle 
              cx="320" 
              cy="100" 
              r="18" 
              fill={isHovered ? "#769269" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-300"
            />
            <rect 
              x="40" 
              y="180" 
              width="30" 
              height="60" 
              fill={isHovered ? "#828282" : "#e0e0e0"}
              className="transition-all duration-700 ease-in-out delay-400"
            />
            
            {/* Abstract design elements */}
            <path 
              d="M350 250 L380 230 L380 270 Z" 
              fill={isHovered ? "#646cff" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-500"
            />
          </svg>
        );
        
      case 'isvor':
        return (
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width="400" height="300" fill="#f8f8f8" />
            
            {/* Automotive/industrial elements */}
            <ellipse 
              cx="150" 
              cy="150" 
              rx="80" 
              ry="50" 
              fill={isHovered ? "#8b8b8b" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out"
            />
            <rect 
              x="100" 
              y="120" 
              width="100" 
              height="20" 
              fill={isHovered ? "#646cff" : "#e0e0e0"}
              className="transition-all duration-700 ease-in-out delay-100"
            />
            
            {/* Technical elements */}
            <circle 
              cx="100" 
              cy="200" 
              r="15" 
              fill={isHovered ? "#398007" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-200"
            />
            <circle 
              cx="200" 
              cy="200" 
              r="15" 
              fill={isHovered ? "#398007" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-300"
            />
            
            {/* Process flow elements */}
            <rect 
              x="280" 
              y="100" 
              width="40" 
              height="100" 
              rx="10" 
              fill={isHovered ? "#769269" : "#e0e0e0"}
              className="transition-all duration-700 ease-in-out delay-400"
            />
            <rect 
              x="50" 
              y="80" 
              width="30" 
              height="30" 
              fill={isHovered ? "#828282" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-500"
            />
            
            {/* Connection indicators */}
            <path 
              d="M250 150 L270 140 L270 160 Z" 
              fill={isHovered ? "#646cff" : "#e5e5e5"}
              className="transition-all duration-700 ease-in-out delay-600"
            />
          </svg>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      className="aspect-[4/3] w-full bg-muted overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getIllustration()}
    </div>
  );
}