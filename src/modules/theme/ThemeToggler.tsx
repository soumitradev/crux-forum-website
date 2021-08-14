import React from 'react';
import Switch from '../../ui/Switch';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ThemeContext } from './ThemeContextProvider';

interface ThemeTogglerProps {}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({}) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [active, setActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    setActive(theme === 'dark');
  }, [theme]);

  return (
    <Switch
      left={
        theme === 'light' ? (
          <MoonIcon className='h-4 w-4' />
        ) : (
          <SunIcon className='h-4 w-4' />
        )
      }
      active={active}
      toggleActive={() => setActive(!active)}
      variant='purple'
      onChange={toggleTheme!}
    />
  );
};

export default ThemeToggler;
