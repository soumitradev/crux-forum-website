import React from 'react';

interface ThemeProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<Partial<ThemeProps>>({});

const ThemeContextProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.body.classList.add('dark');
      setTheme('dark');
    } else {
      document.body.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  React.useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      setTheme('light');
    } else {
      document.body.classList.add('dark');
      setTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
