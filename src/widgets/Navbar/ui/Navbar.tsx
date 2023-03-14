import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export function Navbar({ className }: INavbarProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLInkTheme.PRIMARY} to="/" className={cls.mainLink}>{ t('home_page_nav') }</AppLink>
        <AppLink theme={AppLInkTheme.PRIMARY} to="/about">{ t('about_page_nav') }</AppLink>
      </div>
    </div>
  );
}
