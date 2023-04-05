import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { HStack } from '../Stack';

export interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  selectedValue: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    selectedValue,
    onTabClick,
  } = props;

  const onClickHandler = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <HStack gap="8" className={classNames('', {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === selectedValue ? CardTheme.DEFAULT : CardTheme.OUTLINED}
          key={tab.value}
          className={cls.tab}
          onClick={onClickHandler(tab)}
        >
          {tab.label}
        </Card>
      ))}
    </HStack>
  );
});
