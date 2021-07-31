import * as React from 'react';
import MoonIcon from '../../ui/icons/MoonIcon';
import SunIcon from '../../ui/icons/SunIcon';
import Switch from '../../ui/Switch';
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
      icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
      active={active}
      toggleActive={() => setActive(!active)}
      variant='purple'
      onChange={toggleTheme!}
    />
  );
};

export default ThemeToggler;
