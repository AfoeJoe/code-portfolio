import useLocalStorage from '../hooks/useLocalStorage';
import { createContext, FC } from 'react';

export const enum Theme {
  dark = 'dark',
  light = 'light',
}

export const ThemeContext = createContext({
  theme: Theme.light,
  toggleTheme: () => null,
});

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', Theme.light, {
    serializer: e => JSON.stringify(e),
    parser: e => JSON.parse(e),
  });

  function toggleTheme() {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
    return null;
  }
  const providerValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
