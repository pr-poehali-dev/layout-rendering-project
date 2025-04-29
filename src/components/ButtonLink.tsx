import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  outline?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href, outline = false }) => {
  return (
    <Link 
      to={href}
      className={`
        px-8 py-3 rounded-full text-lg font-medium transition-all duration-300
        ${outline 
          ? 'border-2 border-dashed border-black hover:bg-gray-100' 
          : 'bg-red-600 text-white hover:bg-red-700'}
      `}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
