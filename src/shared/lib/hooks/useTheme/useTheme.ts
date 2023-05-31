import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../../shared/constants/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../../shared/constants/localStorage';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    // let newTheme: Theme;
    // switch (theme) {
    // case Theme.DARK:
    //   newTheme = Theme.LIGHT;
    //   break;
    // case Theme.LIGHT:
    //   newTheme = Theme.ORANGE;
    //   break;
    // case Theme.ORANGE:
    //   newTheme = Theme.DARK;
    //   break;
    // default:
    //   newTheme = Theme.LIGHT;
    // }
    // setTheme?.(newTheme);
    // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme: theme || Theme.LIGHT,
  };
}
