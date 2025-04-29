import React from 'react';

interface ButtonLinkProps {
  href: string;
  outline?: boolean;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ 
  href, 
  outline = false, 
  children 
}) => {
  return outline ? (
    <a 
      href={href}
      className="inline-block px-8 py-4 text-black border-2 border-dashed border-black rounded-full transition-all hover:bg-gray-100 text-xl font-medium"
    >
      {children}
    </a>
  ) : (
    <a 
      href={href}
      className="inline-block px-8 py-4 bg-candy-red text-white rounded-full transition-all hover:bg-red-600 text-xl font-medium"
    >
      {children}
    </a>
  );
};

export default ButtonLink;
