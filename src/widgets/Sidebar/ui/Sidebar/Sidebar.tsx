import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
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
      <Button
        data-testid="sidebar-toggle"
        theme={ButtonTheme.CLEAR}
        onClick={onToggle}
      >
        {t('toggle')}
      </Button>
      <div className={cls.Switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
