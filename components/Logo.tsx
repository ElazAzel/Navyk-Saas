import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`font-bold text-xl ${className}`}>
      <span className="text-primary">NAVYK</span>
    </div>
  );
};

export default Logo; 