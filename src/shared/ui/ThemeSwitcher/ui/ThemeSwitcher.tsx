import { FC } from 'react';
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import DarkIcon from 'shared/assets/icons/theme-switcher.svg';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon fill="var(--primary-color)" /> : <DarkIcon fill="var(--primary-color)" />}
    </Button>
  );
};
