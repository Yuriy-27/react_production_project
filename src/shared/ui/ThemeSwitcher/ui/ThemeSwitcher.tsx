import { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/dark-mode.svg';
import LightIcon from 'shared/assets/icons/light-mode.svg';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <LightIcon fill="var(--primary-color)" /> : <DarkIcon fill="var(--primary-color)" />}
    </Button>
  );
});
