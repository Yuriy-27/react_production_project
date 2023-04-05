import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around';
export type FlexAlign = 'start' | 'end' | 'center';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyContentStart,
  end: cls.justifyContentEnd,
  center: cls.justifyContentCenter,
  between: cls.justifyContentBetween,
  around: cls.justifyContentAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignItemsStart,
  end: cls.alignItemsEnd,
  center: cls.alignItemsCenter,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  'row-reverse': cls.directionRowReverse,
  column: cls.directionColumn,
  'column-reverse': cls.directionColumnReverse,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  12: cls.gap12,
  16: cls.gap16,
  20: cls.gap20,
  24: cls.gap24,
  28: cls.gap28,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  maxWidth?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    maxWidth,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.maxWidth]: maxWidth,
  };

  return (
    <div className={classNames(cls.Flex, mods, classes)}>
      {children}
    </div>
  );
};
