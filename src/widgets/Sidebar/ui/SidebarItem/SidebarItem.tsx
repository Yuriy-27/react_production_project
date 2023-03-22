import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLInkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLInkTheme.PRIMARY}
      to={item.path}
      className={cls.SidebarItem}
    >
      <item.Icon className={classNames(cls.linkIcon, { [cls.collapsed]: collapsed })} fill="var(--primary-color)" />
      {!collapsed && <span>{t(item.text)}</span>}
    </AppLink>
  );
});
