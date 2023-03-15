import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MenuIcon from 'shared/assets/icons/menu.svg';
import MenuOpenIcon from 'shared/assets/icons/menu_open.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <nav className={cls.NavLinks}>
        <AppLink
          theme={AppLInkTheme.PRIMARY}
          to={RoutePaths.main}
          className={cls.link}
        >
          <HomeIcon className={classNames(cls.linkIcon, { [cls.collapsed]: collapsed })} fill="var(--primary-color)" />
          {!collapsed && <span>{t('home_page_nav')}</span>}
        </AppLink>
        <AppLink
          theme={AppLInkTheme.PRIMARY}
          to={RoutePaths.about}
          className={cls.link}
        >
          <AboutIcon className={classNames(cls.linkIcon, { [cls.collapsed]: collapsed })} fill="var(--primary-color)" />
          {!collapsed && <span>{t('about_page_nav')}</span>}
        </AppLink>
      </nav>
      <Button
        data-testid="sidebar-toggle"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onToggle}
        className={cls.collapsedButton}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? <MenuIcon fill="var(--primary-color)" /> : <MenuOpenIcon fill="var(--primary-color)" />}
      </Button>
      <div className={cls.Switchers}>
        <ThemeSwitcher />
        <LangSwitcher shortName={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
