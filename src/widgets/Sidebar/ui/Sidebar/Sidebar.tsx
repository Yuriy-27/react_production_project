import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import MenuIcon from 'shared/assets/icons/menu.svg';
import MenuOpenIcon from 'shared/assets/icons/menu_open.svg';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <VStack gap="16" className={cls.NavLinks}>
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </VStack>
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
    </menu>
  );
});
