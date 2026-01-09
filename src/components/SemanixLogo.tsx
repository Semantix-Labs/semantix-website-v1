import React from 'react';
import semantixLogoDark from '../assets/semantix-logo-dark.png';
import semantixLogoWhite from '../assets/semantix white.png';

interface SemanixLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  alt?: string;
}

const SemanixLogo: React.FC<SemanixLogoProps> = ({
  className = "",
  theme = 'dark',
  alt = "Semantix Labs Logo"
}) => {
  const logoSrc = theme === 'light' ? semantixLogoWhite : semantixLogoDark;

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={className}
    />
  );
};

export default SemanixLogo;