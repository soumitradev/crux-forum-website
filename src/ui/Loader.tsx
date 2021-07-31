import * as React from 'react';
import { ThemeContext } from '../modules/theme/ThemeContextProvider';

const variants = {
  default: 'h-12 w-12 border-4 border-t-4',
  button: 'h-5 w-5 border-2 border-t-2',
};

interface LoaderProps {
  variant?: keyof typeof variants;
  color?: 'cyan' | 'red' | 'green' | 'purple';
}

const Loader: React.FC<LoaderProps> = ({
  variant = 'default',
  color = 'cyan',
}) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <div
        style={{ borderTopColor: color }}
        className={`${variants[variant]} loader ease-linear rounded-full ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-accent'
        }`}
      ></div>
    </>
  );
};

export default Loader;
