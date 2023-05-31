import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
