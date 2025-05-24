import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-[#E94560] hover:bg-[#E94560]/90 text-white focus:ring-[#E94560]/50',
    secondary: 'bg-[#0F3460] hover:bg-[#0F3460]/90 text-white focus:ring-[#0F3460]/50',
    outline: 'bg-transparent border-2 border-[#E94560] text-[#E94560] hover:bg-[#E94560]/10 focus:ring-[#E94560]/50',
    text: 'bg-transparent text-[#0F3460] hover:text-[#E94560] focus:ring-transparent',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 rounded',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-6 py-3 rounded-lg',
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;