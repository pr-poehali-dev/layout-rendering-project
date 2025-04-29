import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  outline?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, outline = false }) => {
  return (
    <Link
      to={href}
      className={`
        px-8 py-3 rounded-full text-lg font-medium transition-all duration-300
        ${outline 
          ? 'border-2 border-black border-dashed bg-transparent text-black hover:bg-black hover:text-white' 
          : 'bg-red-600 text-white hover:bg-red-700'}
      `}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
