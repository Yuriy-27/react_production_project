import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export function Navbar({ className }: INavbarProps) {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLInkTheme.PRIMARY} to="/" className={cls.mainLink}>Home page</AppLink>
        <AppLink theme={AppLInkTheme.PRIMARY} to="/about">About page</AppLink>
      </div>
    </div>
  );
}
