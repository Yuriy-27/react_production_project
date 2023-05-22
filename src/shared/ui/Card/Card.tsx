import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import { VStack } from '../Stack';

export enum CardTheme {
  DEFAULT = 'default',
  OUTLINED = 'outlined',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.DEFAULT,
    ...otherProps
  } = props;

  return (
    <VStack
      maxWidth
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      { children }
    </VStack>
  );
});
