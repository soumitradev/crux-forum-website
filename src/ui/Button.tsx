import * as React from 'react';
import Loader from './Loader';

const variants = {
  cyan: 'bg-cyan text-gray-900 border-transparent hover:opacity-80',
  green: 'bg-green text-gray-900 border-transparent hover:opacity-80',
  purple: 'bg-purple text-gray-100 border-transparent hover:opacity-80',
  red: 'bg-red text-gray-100 border-transparent hover:opacity-80',
  'cyan-outline':
    'border-cyan dark:text-cyan hover:bg-cyan dark:hover:text-gray-900',
  'green-outline': 'border-green text-green hover:bg-green hover:text-gray-900',
  'purple-outline':
    'border-purple text-purple hover:bg-purple hover:text-gray-900',
  'red-outline': 'border-red text-red hover:bg-red hover:text-gray-900',
  disabled:
    'dark:bg-gray-800 bg-gray-accent opacity-30 cursor-not-allowed border-transparent',
};

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  isLoading?: boolean;
  icon?: React.ReactNode;
  variant?: keyof typeof variants;
};

const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  icon,
  className,
  disabled,
  variant = 'cyan',
  ...props
}) => {
  return (
    <>
      <button
        disabled={disabled}
        {...props}
        className={`flex items-center gap-2 justify-center px-4 py-3 font-semibold rounded-md border-2 transition-all duration-300 ${
          variants[disabled ? 'disabled' : variant]
        } ${className ? className : ''}`}
      >
        {!isLoading && icon && <span>{icon}</span>}
        {isLoading && <Loader variant='button' color='purple' />}
        <span>{children}</span>
      </button>
    </>
  );
};

export default Button;
