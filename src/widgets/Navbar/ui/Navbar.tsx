import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLInkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss"

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLInkTheme.PRIMARY} to="/" className={cls.mainLink}>Home page</AppLink>
        <AppLink theme={AppLInkTheme.PRIMARY} to="/about">About page</AppLink>
      </div>
    </div>
  )
}
