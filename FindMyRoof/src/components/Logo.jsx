import React from 'react';

const Logo = ({ className = "", width = 40, height = 40 }) => {
  return (
    <svg 
      className={`${className} transition-all duration-300 hover:scale-110`}
      width={width}
      height={height}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with gradient effect */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0a3d62" />
          <stop offset="100%" stopColor="#083660" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" stroke="#f9573b" strokeWidth="1" />
      
      {/* Professional house with details */}
      <g>
        {/* Main roof */}
        <path d="M50 28L25 40L75 40L50 28Z" fill="#ffffff" />
        {/* Roof shadow */}
        <path d="M25 40L20 55L30 40Z" fill="#f0f0f0" opacity="0.2" />
        <path d="M75 40L80 55L70 40Z" fill="#f0f0f0" opacity="0.2" />
        
        {/* House body */}
        <rect x="25" y="55" width="50" height="30" rx="3" fill="#ffffff" />
        
        {/* Door with handle */}
        <rect x="43" y="68" width="14" height="17" rx="2" fill="#083660" />
        <circle cx="52" cy="76" r="1" fill="#f9573b" />
        
        {/* Windows */}
        <rect x="32" y="60" width="7" height="7" rx="2" fill="#083660" />
        <rect x="61" y="60" width="7" height="7" rx="2" fill="#083660" />
        
        {/* Chimney */}
        <rect x="66" y="42" width="4" height="8" rx="1" fill="#ffffff" />
        <rect x="67" y="42" width="2" height="6" rx="1" fill="#f0f0f0" opacity="0.3" />
      </g>
    </svg>
  );
};

export default Logo;
