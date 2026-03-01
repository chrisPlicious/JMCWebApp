import { type ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-solar-500 hover:bg-solar-400 text-navy-900 font-semibold shadow-md hover:shadow-lg',
  secondary:
    'bg-navy-800 hover:bg-navy-700 text-white font-semibold shadow-md hover:shadow-lg',
  outline:
    'border-2 border-white text-white hover:bg-white/10 font-semibold',
  ghost:
    'text-navy-700 hover:text-solar-500 font-medium',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer';
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
